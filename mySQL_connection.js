var mysql = require('mysql');

var dbase = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'learninpointstutorial'
});

module.exports = dbase;