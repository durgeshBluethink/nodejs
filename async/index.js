console.log("start.exe......!")
let a=10;
let b=0;

// this is drow back of asynchronous

setTimeout(()=>{
    console.log("logic.exe.....!")
    b=20;
},2000)
console.log("complate.exe...!")
console.log(a+b);
console.log(a+b);

console.log("......................................................handle asynchronous data.....................................................")
let c=10;
let d=0;

let waitingData  = new Promise((resovle,reject)=>{
    setTimeout(()=>{
        console.log("logic.exe.....!")
       resovle(30)
    },2000)
})

waitingData.then((data)=>{
    console.log(+data);
})