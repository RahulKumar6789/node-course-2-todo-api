var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
<<<<<<< HEAD
//mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');
mongoose.connect('mongodb://<rahul.kumar@sofocle.com>:<sofocle@1234>@ds163294.mlab.com:63294/mongoose' || 'mongodb://localhost:27017/TodoApp');
=======
mongoose.connect('mongodb://<rahul.kumar@sofocle.com>:<sofocle@1234>@ds163294.mlab.com:63294/mongoose' || 'mongodb://localhost:27017/TodoApp');

>>>>>>> 2e73456599218f118a2c2743ff38e2068ccd9f2d
module.exports = {mongoose};
