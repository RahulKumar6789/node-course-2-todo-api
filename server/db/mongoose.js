var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds163294.mlab.com:63294/mongoose' || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
