const mysql = require("mysql2/promise");
const pool = mysql.createPool({
  user: "root",
  host: "localhost",
  database: "materials",
  password: "0542222175",
  port: 3306,
});

module.exports = pool;
