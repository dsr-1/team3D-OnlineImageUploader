const mysql = require("mysql2");

const conn = mysql.createConnection({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

conn.connect((error)=>{
    if(error) throw error;
    console.log("db connected")
});

module.exports = conn;