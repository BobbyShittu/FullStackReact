const express = require('express');
const mongoose = require('mongoose');
require('./models/User');
require('./services/passport');


mongoose.connect('mongodb://shittu:Harryp1460!@ds147518.mlab.com:47518/fullstack-react-dev');


const app = express();
require('./routes/authRoute')(app)

const PORT = process.env.PORT || 5000;
app.listen(PORT);