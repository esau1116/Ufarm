const express = require('express')
const app = express()
const mongoose = require('mongoose')
const pug = require('pug')
const path = require('path')
const nodemon = require('nodemon')
const bodyParser = require('body-parser')
//const session = require('express-session');
//const passport = require('passport');
//const passportLocalMongoose = require('passport-local-mongoose');
//const connectEnsureLogin = require('connect-ensure-login');
//const loginRoutes = require('./routes/loginRoutes')
//const Employee = require('./models/supervisorRegModel')


mongoose.connect('mongodb://localhost:27017/ufarm',{useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify: false},function(err){
    if (err) throw err;
    else
    console.log('tech is cool');  
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');

app.use(express.static('public'))

// app.use(session({
//     secret: 'secret',
//     resave: false,
//     saveUninitialized: false
// }));

/*  MIDDLEWARE SETUP : PASSPORT */
// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(Employee.createStrategy());
// passport.serializeUser(Employee.serializeUser());
// passport.deserializeUser(Employee.deserializeUser());

//app.use('/', mainRoute)

app.get('*',(req,res)=>{
    res.send('Error')
})

app.listen(3000,()=>{
    console.log('listening on port 3000');
    
})