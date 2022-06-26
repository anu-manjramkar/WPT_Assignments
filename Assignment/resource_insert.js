let dbparams = {
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'demo',
    port:3306
};

const mysql = require('mysql2');
const con = mysql.createConnection(dbparams);

let resource_id = 4;
let resourcename = "Gold";
let status = true;


con.query('insert into resource(resource_id,resourcename,status) values (?,?,?)', [resource_id, resourcename,status],
    (err, res1) => {
        if (err) {
            console.log("error has Occured let us see");
        } else {
            console.log("Inserted "+res1.affectedRows+" Row");
        }
    }
);