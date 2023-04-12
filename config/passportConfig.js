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
      async (email, password, done) => {
        try {
          const user = await User.findOne({ email });

          if (!user) return done(null, false);

          if (user.password !== password) return done(null, false);

          return done(null, user);
        } catch (error) {
          return done(null, error);
        }
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
