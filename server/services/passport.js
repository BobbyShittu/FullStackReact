const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const Keys = require('../config/Keys')


const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
         done(null, user);
        })
})


passport.use(new GoogleStrategy({
    clientID: Keys.googleClientId,
    clientSecret: Keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    User.findOne({ googleId: profile.id })
        .then((existingUser) => {
            if (existingUser) {
                // we already have a record of this user
                done(null, existingUser);
            } else {
                //we dont have a record of tis user
                new User({ googleId: profile.id })
                    .save()
                    .then(user => done(null, user));
            }
        });

   
    
}));