const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


var id = '59d357553abe6e225b9be9ef';
// var id = '59d48ef27da9bf213b922c4211';
//
// if(!ObjectID.isValid(id)) {
//   console.log('Id not valid');
// };
// // Todo.find({
// //   _id: id
// // }).then((todos) => {
// //   console.log('Todos', todos);
// // });
// //
// // Todo.findOne({
// //   _id: id
// // }).then((todo) => {
// //   console.log('Todo', todo);
// // });
//
// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

User.findById(id).then((user) => {
  if(!user) {
    console.log('User not found');
  }
  console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));
