const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/user");

//Intializing passport to user local stretegy
exports.initializingPassport = (passport) => {
  //Specifying passport to use local stretegy
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
      },
      function (email, password, done) {
        User.findOne({ email: email })
          .then((user) => {
            if (!user || user.password !== password) {
              console.log("Invalid Username/Password");
              return done(null, false);
            }
            console.log('passss ---', user);
            return done(null, user);
          })
          .catch((err) => {
            console.log(`Error in finding user --passport: ${err}`);
            return done(err);
          });
      }
    )
  );

  //serializing user for storing user-id into the session
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  //deserializing user-id to get the user
  passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (error) {
        done(error, false);
    }
  })
};

//For cheking if user is authenticated or not
exports.isAuthenticated = (req, res, next) => {
    if(req.user) return next();
    res.redirect('/users/sign-in');
}
