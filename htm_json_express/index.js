const express  = require('express');
const app = express();
app.get('',(req,res)=>{
    //console.log("data send from browser>>>>",req.query.name)
    res.send(`<h1>'Welcome ' to home page </h1>
     <a href="/about">go to about</a>
     `);
});
app.get('/about',(req,res)=>{
    res.send(`<input type="text" placeholder="User name" value=${req.query.name} />
    <button>Click Me</button>
    <a href="/">go to home</a>
    
    `);
});
app.get('/help',(req,res)=>{
    res.send([
        {
        name:'durgesh',
        mail:'durgesh@12gmail.com'
        },
        {
            name:'amritesh',
            mail:'mail@gmail.com'
        }
    ]);
});

app.listen(8089);