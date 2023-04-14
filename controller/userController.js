const User = require("../models/user");
const {isAuthenticated} = require('../config/passportConfig');

//Display sign-in page
module.exports.showSignInPage = (req, res) => {
  if(req.isAuthenticated()) {
    //Redirecting to home page if authenticated
    return res.redirect('/');
  }
  return res.render('sign-in', {
    title: 'home'
  });
};

//Display sign-up page
module.exports.showSignUpPage = (req, res) => {
  if(req.isAuthenticated()) {
    //Redirecting to home page if authenticated
    return res.redirect('/');
  }
  return res.render('sign-up', {
  });
};

//Creating / Signing-up the User 
module.exports.signUp = async (req, res) => {
  console.log(req.body, "---------------");
  const user = await User.findOne({ email: req.body.email });

  if (user) return res.status(400).send("User Already Exists");

  //If existing user with that email not found then only creating the user
  const newUser = await User.create(req.body);
  res.status(201).redirect('/');
};

//Sign-in/login the user
module.exports.signIn = (req, res) => {
  //While returning success from passport - login, redirecting user to the home page
    return res.redirect('/');
};

//Logging out the user
module.exports.logout = (req, res) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    return res.redirect("/users/sign-in");
  });
};
