const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./models/User');
require('./services/passport');


mongoose.connect('mongodb://shittu:Harryp1460!@ds147518.mlab.com:47518/fullstack-react-dev');


const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: ['jhvkhvkljbvljbjlbljvdlfsbfjksbblbvfls']
    })
);
app.use(passport.initialize());
app.use(passport.session()); 

require('./routes/authRoute')(app)

const PORT = process.env.PORT || 5000;
app.listen(PORT);