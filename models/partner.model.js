// userModel.js
const db = require('../db/connection');

const Partner = {
  createUser: async (correo, contraseña) => {
    const [rows, fields] = await db.execute('SELECT * FROM Empleados');
    return rows.insertId;
  }
  // Puedes agregar más métodos según sea necesario
};

module.exports = Partner;
