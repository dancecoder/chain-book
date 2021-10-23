const express = require('express');
const { Driver, getCredentialsFromEnv, getLogger, TypedData } = require('ydb-sdk');

module.exports.dbTestRouter = express.Router();
module.exports.dbTestRouter.get('/db', async (req, res, next) => {
    try {
        const db = req.app.locals.db;


        // Транзакции в YDB несколько отличаются от нормальныхю Судя по всему запросы просто накапливаются в памяти,
        // затем при закрытии транзакции они применяются одним движением. В результате невозможно прочитать только что
        // записанные в рамказ транзакции данные. По этой же причине нельзя удалить запись, а затем выполнить
        // запрос на Select.
        //
        // Yandex вышел из положения некрасиво. Они реализовали прямой логический запрет на любые операции
        // после UPDATE/REPLACE/DELETE на таблице. В частности код ниже не работает, поскольку после первого INSET
        // по сути запрещен второй.
        //
        // Таким образом транзакции могут быть использованы для объенения некольких чтений и/или объединения
        // записи/обновления/удаления строк в разных связанных таблицах (в разных, не в одной).
        //
        // см. так же https://cloud.yandex.ru/docs/ydb/concepts/transactions
        var tx = await db.transaction();
        await tx.query('INSERT INTO test_table (id, name) VALUES (4, "test 4")');
        await tx.query('INSERT INTO test_table (id, name) VALUES (5, "test 5")');
        await tx.commit();

        // Нельзя читать только что добавленные в транзакции данные
        // новые данные будут доступны для чтения только после закрытия (commit) транзакции
        const data = await db.query('select * from test_table');
        res.json({ data });
    } catch (e) {
        await tx.rollback();
        next(e);
    }
});
