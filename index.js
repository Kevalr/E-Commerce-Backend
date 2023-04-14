const express = require("express");
const app = express();
const PORT = 8000;
const { connectMongoose } = require("./config/databse.js");
const passport = require("passport");
const { initializingPassport } = require("./config/passportConfig.js");
const expressSession = require("express-session");
const expressLayouts = require('express-ejs-layouts');

//Connectnig to database
connectMongoose();

// Intializing Passport before any other middleware or router so that they can use passport local stretegy
initializingPassport(passport);

//middleware for parse the request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//middleware for using the session storage to store the user id
app.use(
    expressSession({
      secret: "secret-key",
      resave: false,
      saveUninitialized: false,
    })
  );
//Intializing passport as a middleware and using passport session method
app.use(passport.initialize());
app.use(passport.session());

//Seeting up the static files
app.use(express.static('./assets'));
app.use(expressLayouts);

// Extract style and scripts from the sub pages and put it into layouts
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

// --------------  Including Routes ---------------------------------//
app.use("/", require("./routes"));


// setup the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//Starting the server
app.listen(PORT, (err) => {
  if (err) {
    console.log(`Error While Starting The Server - ${err}`);
    return;
  }
  console.log(`Server is running on port ${PORT}`);
});
