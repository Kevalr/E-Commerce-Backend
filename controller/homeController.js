const User = require("../models/user");

//render the homepage
module.exports.home = async (req, res) => {
  // let user = await User.findById(req.user);
  // return res.send(`<h1>Home Page</h1>`);
  return res.render('home', {
    user: {
      username: 'keval',
      email: 'kevl@gmail.com'
    }
  });
};
