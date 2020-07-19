
//NODE_ENV comes from heroku
if (process.env.NODE_ENV === 'production'){
    module.exports = require('./prod');
}
else {
    //local will fall into this case
    module.exports = require('./dev');
}