// const mysql= require("mysql");

// const con= mysql.createConnection({
//   host:"localhost",
//   user:"root",
//   password:"root",
//   database:"test"
// });

// con.connect((err)=>{
//   if(err)
//   {
//     console.warn("not connect")
//   }else{
//     console.warn("connected!!!")
//   }
// })

// // con.query("select * from users",(err,result)=>{
// //   if(err)
// //   {
// //     console.warn("some error")
// //   }
// //   else{
// //     console.warn(result)
// //   }
// // })
// Importing module
const mysql = require('mysql')

const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
	database: "durgesh"
})

// Connecting to database
connection.connect(function (err) {
	if (err) {
		console.log("Error in the connection")
		console.log(err)
	}
	else {
		console.log(`Database Connected`)
		connection.query(`SHOW DATABASES`,
			function (err, result) {
				if (err)
					console.log(`Error executing the query - ${err}`)
				else
					console.log("Result: ", result)
			})
	}
})
