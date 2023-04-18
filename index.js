// console.log(process.argv[1])
const fs = require("fs");

 const path = require('path');
 const dirPath  = path.join(__dirname,'files');
 for (let index = 0; index < 5; index++) {
    // create a dynmic file in spafic folder
    // fs.writeFileSync(dirPath+"/hello"+index+".txt","this is simple file in dynmic form we are create !");
    fs.writeFileSync(dirPath+`/hello ${index}.txt`,"this is simple file in dynmic form we are create !");
    
 }



