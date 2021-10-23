const { Driver, getCredentialsFromEnv, getLogger, TypedData } = require('ydb-sdk');

module.exports.DB = class DB {

    logger = getLogger({level: 'debug'});
    entryPoint = process.env.YDB_ENDPOINT;
    dbName = process.env.YDB_DBNAME;
    authService = getCredentialsFromEnv(this.entryPoint, this.dbName, this.logger);
    #driver = new Driver(this.entryPoint, this.dbName, this.authService);

    /**
     * @type {Session}
     * */
    #session;

    constructor(config) {
        // TODO: реализовать класс для конфигурации
    }

    async #getSession() {
        if (this.#session == null) {
            await this.#driver.tableClient.withSession(async session => this.#session = session);
        }
        return this.#session;
    }

    /**
     * @param {string} sql
     * @param {IQueryParams} params optional
     * @param {string} txId optional - transaction ID
     * */
    async query(sql, params, txId) {
        const session = await this.#getSession();
        const txControl = txId  == null ? undefined : { txId };
        const executeResult = await session.executeQuery(sql, params, txControl);
        if (executeResult.resultSets.length > 0) {
            const jsResult = TypedData.createNativeObjects(executeResult.resultSets[0]);
            return jsResult;
        }
        return null;
    }

    /**
     * @description Метод начинает новую транзакцию
     * @return {{
     *     query: (sql, params) => Promise<Record<string, any>[]>;
     *     commit: () => Promise<void>;
     *     rollback: () => Promise<void>;
     * }}
     * */
    async transaction() {
        const session = await this.#getSession();
        const txMeta = await session.beginTransaction({
            serializableReadWrite: {} // strict mode
        });
        return {
            query: async (sql, params) => this.query(sql, params, txMeta.id),
            commit: async () => session.commitTransaction({ txId: txMeta.id }),
            rollback: async () => session.rollbackTransaction({ txId: txMeta.id }),
        }
    }


}
