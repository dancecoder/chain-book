const express = require('express');
const { Driver, getCredentialsFromEnv, getLogger, TypedData } = require('ydb-sdk');

module.exports.dbTestRouter = express.Router();
module.exports.dbTestRouter.get('/dbtest', async (req, res, next) => {
    const db = req.app.locals.db;
    const data = await db.select('select * from test_table');
    res.json({ data });
});
