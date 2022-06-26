let dbparams = {
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'demo',
    port:3306
};

const mysql = require('mysql2');
const con = mysql.createConnection(dbparams);

let itemno = 4;
let itemname = "Biscuits";
let price = 10;
let category = "Food";

con.query('insert into item(itemno,itemname,price,category) values (?,?,?,?)', [itemno, itemname,price,category],
    (err, res1) => {
        if (err) {
            console.log("error has Occured let us see");
        } else {
            console.log(res1.affectedRows);
        }
    }
);