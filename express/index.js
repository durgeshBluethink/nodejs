const express  = require('express');
const app = express();
app.get('',(req,res)=>{
    console.log("data send from browser>>>>",req.query.name)
    res.send('Welcome '+req.query.name);
});
app.get('/about',(req,res)=>{
    res.send('This is page about page');
});
app.get('/help',(req,res)=>{
    res.send('This is page help page');
});

app.listen(8089);