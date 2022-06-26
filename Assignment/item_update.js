let dbparams = {
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'demo',
    port: 3306
};

const mysql = require('mysql2');
const con = mysql.createConnection(dbparams);
let price = 20;
let category = "Ball Pen";
let itemno = 1;

con.query('update item set price=? ,category=? where itemno=?', [price, category,itemno],
    (err, resp) => {
        if (err) {
            console.log(err);
        } else {
            if (resp.affectedRows > 0) {
                console.log("Update Succeded");
            }
            else {
                console.log("Update Failed");
            }
        }
    }

);