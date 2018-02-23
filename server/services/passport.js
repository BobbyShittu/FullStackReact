const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const Keys = require('../config/Keys')


const User = mongoose.model('users');

passport.use(new GoogleStrategy({
    clientID: Keys.googleClientId,
    clientSecret: Keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    User.findOne({ googleId: profile.id })
        .then((exiistingUser) => {
            if (existgingUser) {
                // we already have a record of this user
            } else {
                //we dont have a record of tis user
                new User({ googleId: profile.id }).save();
            }
        })

   
    
}));