//  start writing from here
/*User collection schema : 
    _id(default) ->This is used in Todos collection also to identify which todo belongs to whom.
    username
    email
    password
*/
let log = console.log;
const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.ObjectId;
//Schema has structure , Collection is table and model basically applies the schema rules on to the collection to facilitate the use of built in functions
//to create , update,find documents , delete documents ,etc.
// Connect to MongoDB
(async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:xfiEK7A4cpzAl25b@cluster0.m13bv.mongodb.net/todo_app_database"
    );
  } catch (e) {
    console.log(e);
  }
})();
// Define schemas

const UserSchema = new mongoose.Schema({
  // Schema definition here
  name: String,
  password: String,
  email: { type: String, unique: true },
});

const TodoSchema = new mongoose.Schema({
  // Schema definition here
  description: String,
  userId: ObjectId,
  done: Boolean,
});

const UserModel = mongoose.model("User", UserSchema);
const TodoModel = mongoose.model("Todo", TodoSchema);

module.exports = {
  UserModel,
  TodoModel,
};
