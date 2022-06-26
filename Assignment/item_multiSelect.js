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

let category='Stationary';
con.query('select itemno, itemname, price,category from item where category=?', [category], 
(err, rows) => {
    if (err) {
        console.log("Error Occured");  
    } else {
        if(rows.length > 0)
        {
            for(let i=0; i < rows.length; i++)
            console.log(rows[i].itemno + " " + rows[i].itemname + " " + rows[i].price+" "+rows[i].category);     
        }
            else
            console.log("Item Details Not found with itemno :"+ itemno);
    
        }
});
