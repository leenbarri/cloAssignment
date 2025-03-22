const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 5000;

const db = mysql.createConnection({
    host: 'database',
    user: 'root',
    password: 'root',
    database: 'urgentNews'
});

db.connect(err => {
    if (err) throw err;
    console.log('Connected to database');
});

app.get('/getUrgentNews', (req, res) => {
    db.query('SELECT * FROM News ORDER BY id DESC LIMIT 10', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});