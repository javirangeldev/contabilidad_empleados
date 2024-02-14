const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    port: '8889', // Puerto de MySQL
    user: 'root',
    password: 'root',
    database: 'cont_empl_db',
    connectTimeout: 10000 // Tiempo de espera de conexión en milisegundos
});

app.get('/', (req, res) => {
    return res.json('Backend funcionando')
})

app.get('/users', (req, res) => {
    const sql = 'SELECT * FROM Empleados';
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
})

app.listen(8081, () => {
    console.log('listening')
})