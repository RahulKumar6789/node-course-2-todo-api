var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://rahul.kumar@sofocle.com:sofocle@1234@ds163294.mlab.com:63294/mongoose' || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
