const User = require("../models/user");

//render the homepage
module.exports.home = async (req, res) => {
  return res.render('home', {
    user: {
      username: req.user.username,
      email: req.user.email
    }
  });
};
