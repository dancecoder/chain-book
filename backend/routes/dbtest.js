const express = require('express');
const {Driver, getCredentialsFromEnv, getLogger} = require('ydb-sdk');

module.exports.dbTestRouter = express.Router();
module.exports.dbTestRouter.get('/dbtest', async (req, res, next) => {

    const logger = getLogger({level: 'debug'});
    const entryPoint = ''; // FIXME
    const dbName = ''; // FIXME
    const authService = getCredentialsFromEnv(entryPoint, dbName, logger);
    const driver = new Driver(entryPoint, dbName, authService);

    if (!await driver.ready(10000)) {
        logger.fatal(`Driver has not become ready in 10 seconds!`);
        process.exit(1);
    }

    await driver.tableClient.withSession(async (session) => {
        // выполняем запросы в конкретной сессии
        const result = await session.executeQuery('select * from test_table');
    });

});
