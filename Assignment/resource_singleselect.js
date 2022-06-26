let dbparams=
{
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'demo',
	port:3306
};


const mysql = require('mysql2');
const con=mysql.createConnection(dbparams);

let resource_id=1;
con.query('select * from resource where resource_id=?', [resource_id], 
(err, rows) => {
    if (err) {
        console.log("error occured");  
    } else {
        if(rows.length > 0)
          console.log(rows[0].resource_id + " " + rows[0].resourcename + " " + rows[0].status);     
        else
           console.log("Resource Details Not found with resource id : "+ resource_id);
    
        }
});