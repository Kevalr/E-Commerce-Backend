const User = require("../models/user");
const passport = require("passport");

//Display sign-in page
module.exports.showSignInPage = (req, res) => {
  //Will render the sign-in page below in actual app
  return res.send("Sign-In Page");
};

//Display sign-up page
module.exports.showSignUpPage = (req, res) => {
  //Will render the sign-up page below in actual app
  return res.send("Sign-Up Page");
};

//Creating / Signing-up the User 
module.exports.signUp = async (req, res) => {
  console.log(req.body, "---------------");
  const user = await User.findOne({ email: req.body.email });

  if (user) return res.status(400).send("User Already Exists");

  //If existing user with that email not found then only creating the user
  const newUser = await User.create(req.body);
  res.status(201).send(newUser);
};

//Sign-in/login the user
module.exports.signIn = () => {
  passport.authenticate("local", {
    failureRedirect: "/users/sign-in",
    successRedirect: "/",
  });
};

//Logging out the user
module.exports.logout = (req, res) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/users/sign-in");
  });
};
