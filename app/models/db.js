const mysql = require("mysql2"); //เรียกใช้ mysql2 (link in database)
//*const dbconfig = require("../config/db.config"); //เรียกตัว module จาก  db.config //*
require('dotenv').config()
const connection = mysql.createConnection(
    process.env.DATABASE_URL

);


connection.connect((error)=>{ //check error
    if(error) console.log("MYsql connection " +error);//error : show error
    else console.log("Successfully connected to database");//not error : show success that can connnect to database
});
module.exports = connection; //exprots เพื่อให้ file อื่นใช้ได้โดย require("ที่อยู่ไฟล์นี้")
