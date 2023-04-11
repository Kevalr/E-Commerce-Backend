const User = require('../models/user');

module.exports.signIn = async (req, res) => {
    // res.render('login');
    res.send('user is creating');
}

module.exports.signUp = async (req, res) => {
    // res.render('sing-up');
    res.send('user is singing-up');
}

module.exports.createUser = (req, res) => {
    res.send('user is creating');
}





