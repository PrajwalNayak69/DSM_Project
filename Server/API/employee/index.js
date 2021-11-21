import mysql from "mysql"
import connection from "../../Database/connection";

connection.connect(function(err) {
    if(err) throw err;
    connection.query("SELECT * FROM employee", function(err, result, fields){
        if(err) throw err;
        console.log(result);
    });
});

