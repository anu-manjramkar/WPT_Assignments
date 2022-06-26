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

let status=true;
con.query('select resource_id, resourcename, status from resource where status=?', [status], 
(err, rows) => {
    if (err) {
        console.log("Error Occured");  
    } else {
        if(rows.length > 0)
        {
            for(let i=0; i < rows.length; i++)
            console.log(rows[i].resource_id + " " + rows[i].resourcename + " " + rows[i].status);     
        }
            else
            console.log("Resource Details Not Found with status : "+ status);
    
        }
});
