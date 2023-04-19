// const express = require('express');
// const path = require('path');

// const app = express();
// const publicPath=path.join(__dirname,'public')

// app.use(express.static(publicPath));

// app.listen(5000);
const express = require('express');
const path = require('path');

const app = express();
const publicPath=path.join(__dirname,'public')

// app.use(express.static(publicPath));
app.get('',(_,resp)=>{
    resp.sendFile(`${publicPath}/index.html`)
});

app.get('/contact',(_,resp)=>{
    resp.sendFile(`${publicPath}/home.html`)
});

app.get('/help',(_,resp)=>{
    resp.sendFile(`${publicPath}/help.html`)
});

app.get('*',(_,resp)=>{
    resp.sendFile(`${publicPath}/index.html`)
});

app.listen(5000);