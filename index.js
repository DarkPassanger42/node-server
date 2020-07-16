const express = require("express");
const mongoose = require('mongoose');
const keys = require('./config/keys')
require('./services/passport');
require('./models/User');

mongoose.connect(keys.mongoURI)
const app = express();

//authRoutes(app); --- equivalent below, require return a function and we pass to it
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
