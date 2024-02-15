const mysql = require('mysql');

const Connection = mysql.createConnection({
    host: 'localhost',
    port: '8889', // Puerto de MySQL
    user: 'root',
    password: 'root',
    database: 'cont_empl_db',
    connectTimeout: 10000 // Tiempo de espera de conexión en milisegundos
});

module.exports = Connection;