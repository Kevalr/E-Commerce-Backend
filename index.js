const express = require("express");
const app = express();
const PORT = 8000;
const { connectMongoose } = require("./config/databse.js");
const passport = require("passport");
const { initializingPassport } = require("./config/passportConfig.js");
const expressSession = require("express-session");

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


// --------------  Including Routes ---------------------------------//
app.use("/", require("./routes"));

//Starting the server
app.listen(PORT, (err) => {
  if (err) {
    console.log(`Error While Starting The Server - ${err}`);
    return;
  }
  console.log(`Server is running on port ${PORT}`);
});
