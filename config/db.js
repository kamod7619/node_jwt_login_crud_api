require('dotenv').config();
const mysql = require('mysql2');

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST??'localhost',
  user: process.env.DB_USER??'root',
  password: process.env.DB_PASSWORD??'',
  database: process.env.DB_NAME??'nodejs_crud'
});

module.exports = pool.promise();  // Export the promise-based pool
