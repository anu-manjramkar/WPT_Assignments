let dbparams = {
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'demo',
    port: 3306
};

const mysql = require('mysql2');
const con = mysql.createConnection(dbparams);
let resource = 'Diamond';
let id = 1;

con.query('update resource set resourcename=? where resource_id=?', [resource, id],
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
