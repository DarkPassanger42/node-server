const express = require("express");
require('./services/passport');

const app = express();

//authRoutes(app); --- equivalent below, require return a function and we pass to it
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
