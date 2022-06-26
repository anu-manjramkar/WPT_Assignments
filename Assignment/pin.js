const express = require('express');
const app = express();

app.use(express.static("sf"));
const mysql = require("mysql2");
let dbparams = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "demo",
  port: 3306,
};

const con = mysql.createConnection(dbparams);

app.get("/pin", (req, res) => {
    let pin = req.query.pin;
    let output = { status: false,areadetails:{pincode:0,area: "" } };
    
    console.log(pin);
    con.query('select pin,area from pin where pin=?', [pin],
        (err, rows) => {
            if (err) {
                console.log(err);
            } else {
                if (rows.length > 0) {
                output.status = true;
                output.areadetails = rows[0];
                }
                
            }
            console.log(output);
            res.send(output);


    });

    
    


});

app.listen(358, function () {
    console.log("Server Listening at Port 358 ")
});