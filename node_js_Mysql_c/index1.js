const mysql= require("mysql");

const con= mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"root",
  database:"sys"
});

con.connect((err)=>{
  if(err)
  {
    console.warn("not connect")
  }else{
    console.warn("connected!!!")
  }
})

// con.query("select * from sys_config",(err,result)=>{
//   if(err)
//   {
//     console.warn("some error")
//   }
//   else{
//     console.warn(result)
//   }
// })