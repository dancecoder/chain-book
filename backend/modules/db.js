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
     * @param {string} query
     * @param {IQueryParams} params optional
     * */
    async select(query, params) {
        const session = await this.#getSession();
        const executeResult = await session.executeQuery(query, params);
        const jsResult = TypedData.createNativeObjects(executeResult.resultSets[0]);
        return jsResult;
    }


}
