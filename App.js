const express = require("express");
//Initiating the application app.
const app = express();
const mongoose = require("mongoose");
const pug = require("pug");
const path = require("path");
const nodemon = require("nodemon");
const bodyParser = require("body-parser");
//const session = require('express-session');
//const passport = require('passport');
//const passportLocalMongoose = require('passport-local-mongoose');
//const connectEnsureLogin = require('connect-ensure-login');
const mainRoute = require("./routes/mainRoute");
//const Employee = require('./models/supervisorRegModel')
require("dotenv/config");

// mongoose.connect(
//   process.env.db_connection,
//   {useNewUrlParser:true,userUnifiedTopology:true,userCreateIndex:true,userFindAndModify:false})
//   function (err) {
//     if (err) throw err;
//     else console.log("tech is cool");
//   }
// );

mongoose.connect(process.env.db_connection, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

mongoose.connection
  .on("open", () => {
    console.log("Mongoose connection open");
  })
  .on("error", (err) => {
    console.log(`Connection error: ${err.message}`);
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.static("public"));

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

app.use("/", mainRoute);

app.get("*", (req, res) => {
  res.send("Error");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
