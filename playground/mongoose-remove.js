const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });


// Todo.findOneAndRemove({_id: '59d7255ce4b21f82472e2688'}).then((todo) => {
//
// });

Todo.findByIdAndRemove('59d7255ce4b21f82472e2688').then((todo) => {
  console.log(todo);
});
