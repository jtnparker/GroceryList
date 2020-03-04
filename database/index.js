const mysql = require('mysql');
var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'student',
  database : 'grocery'
});

db.connect((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("connected");
  }
});
module.exports = db;
