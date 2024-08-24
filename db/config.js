// require("dotenv").Config();
const mysql2 = require("mysql2");

const dbConnection = mysql2.createPool({
	socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
	port: "5500",
	host: "localhost",
	user: "evangadi-admin",
	password: "123456",

	database: "evangadi-db",
	connetionLimit: 10,
});

// dbconnection.execute("select 'test'", (err, result) => {
//   if (err) {
//     console.log(err.massege);
//   } else {
//     console.log(result);
//   }
// });
module.exports = dbConnection.promise();
