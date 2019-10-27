// Set up MySQL connection.
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createPool(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burgers_db"
  });
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  // connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  //   if (err) throw err;
  
  //   console.log('The solution is: ', rows[0].solution);
  // });

  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.

module.exports = connection;