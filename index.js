const fs = require('fs');
const path = require('path');
const dirPath= path.join(__dirname,'crud');
const filePath = `${dirPath}/apple.txt`;
//create
//Read File
// fs.writeFileSync(filePath,'this is a simple file');
// fs.readFile(filePath,'utf8',(err,item)=>{
// console.log(item);
// })

//Update file.

// fs.appendFile(filePath,' for fruits',(err)=>{
// if(!err) console.log("file is updated")
// })

//Rename file

// fs.rename(filePath, `${dirPath}/fruit.txt`,(err)=>{
// if(!err) console.log("file name is updated")
// })

//Delete file.
fs.unlinkSync(`${dirPath}/fruit.txt`);