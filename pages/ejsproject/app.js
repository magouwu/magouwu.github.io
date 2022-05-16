const express = require('express');
const app = express();

// setting urlencoded to capture form data
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//importing dotenv
const dotenv = require('dotenv');
dotenv.config({path:'./env/.env'});
app.use('resources', express.static('/'))
app.use('/resources', express.static('public'));
app.use('/resources', express.static(__dirname + '/public'));

// setting templates ejs
app.set('view engine','ejs');
// importing bcryptjs
const bcryptjs = require('bcryptjs');

const session = require('express-session');
app.use(session({
    secret:'secret',
    resave: true,
    saveUninitialized: true
}));

const connection = require('./databases/db');

app.get('/',(req,res)=>{
    res.render('index');
})
app.listen(3000,(req,res)=>{
    console.log('SERVIDOR CORRIENDO EN https://localhost:3000');
});