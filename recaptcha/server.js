const express = require('express');
//const session = require('express-session');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/submit',require('./routes/recaptchaRouter'));
app.use('/home',require('./routes/homeRouter'));

app.use("*",function(req,res) {
    res.status(404).send("404");
});

app.listen(3030,()=>{
    console.log("3000 server ready");
});