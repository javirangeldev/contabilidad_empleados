const con = require('../db/connection');

class PartnersService {

    async show() {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM Empleados';
            con.query(sql, (err, data) => {
                if (err) reject(err);
                else resolve(data);
            });
        });
    }
    
}

module.exports = PartnersService;