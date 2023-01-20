const path=require('path');
require('dotenv').config({path:path.resolve(__dirname,'../../.env')});
const Promise = require('promise');
const mysql = require('mysql2')

exports.connection = mysql.createPool(
    {
        host: process.env.DB_HOST,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        port:process.env.DB_PORT,
        database: process.env.DB_DATABASE,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);

/**
 *
 * @param {string} queryString
 * @param {array} params
 * @returns {ThenPromise<unknown> | ThenPromise}
 */
exports.pool = (queryString, params) => {
    return  new Promise((resolve, reject) => {
        this.connection.query(queryString, params, (err, rows, fields) => {
            (err) ? reject(err) : resolve(rows);
        })
    })
}