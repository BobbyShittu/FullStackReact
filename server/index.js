const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const Keys = require('./config/Keys')

const app = express();

passport.use(new GoogleStrategy({
    clientID: Keys.googleClientId,
    clientSecret: Keys.googleClientSecret,
    callbackURL:'/auth/google/callback'
}, acessToken => {
   console.log(acessToken)
    }));


app.get('/auth/google', passport.authenticate('google', {
    scope:['profile','email']
}))

const PORT = process.env.PORT || 5000;
app.listen(PORT);