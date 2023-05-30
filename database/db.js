const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root123',
    database: 'crud1'
});

conexion.connect((error)=>{
    if(error){
        console.log("ERROR ----> " + error)
    }else{
        console.log("---- CONECTADO A LA DB DE MYSQL -----")
    }
});

module.exports = conexion;