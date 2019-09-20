const mysql = require('mysql');
require('dotenv').config()

const db = mysql.createConnection({
  host: 'localhost',
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: 'chatapp'
});

db.connect((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Connected to the database');
  }
});

module.exports = db;