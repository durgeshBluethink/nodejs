var clc = require("cli-color");
console.log(clc.bgBlue("bluethink in red"));
console.log(clc.red.bgWhite.underline("Underlined Enginer on white background."));
console.log(clc.red("red") + " plain " + clc.blue("blue"));
console.log(clc.red("red " + clc.blue("blue") + " red"));
var error = clc.red.bold;
var warn = clc.yellow;
var notice = clc.blue;

console.log(error("Error!"));
console.log(warn("Warning"));
console.log(notice("Notice"));