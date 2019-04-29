const dotenv = require('dotenv');
const express = require('express');
const mysql = require('mysql');

const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.SQL_PASSWORD,
    database: 'acme'
});

db.connect();

app.get('/users', (req, res) => {
    const sql = 'SELECT * FROM users';

    db.query(sql, (err, result) => {
        if(err) throw err;
        res.send(results);
    });
});

app.listen(5000, () => console.log('Server for node_mysql_example is live!'));