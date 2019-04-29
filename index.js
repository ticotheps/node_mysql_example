const express = require('express');
const mysql = require('mysql');

const app = express();

var db = mysql.createConnection({
    host: 'localhost',
    user: 'tico',
    password: '123456',
    database: 'acme'
});

db.connect();

app.get('/users', (req, res) => {
    const sql = `SELECT
    comments.body,
    posts.title,
    users.first_name,
    users.last_name
    FROM comments
    INNER JOIN posts on posts.id = comments.post_id
    INNER JOIN users on users.id = comments.user_id
    ORDER BY posts.title;`;

    db.query(sql, (err, result) => {
        if(err) throw err;
        res.send(result);
    });
});

app.listen(5000, () => console.log('Server for node_mysql_example is live!'));