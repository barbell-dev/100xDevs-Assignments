//  start writing your code from hereconst { todoRouter } = require("express");
const { Router } = require("express");
const { UserModel, TodoModel } = require("../db");
const adminMiddleware = require("../middleware/user");
const todoRouter = Router();
const jwt = require("jsonwebtoken");
let log = console.log;
// todo Routes
todoRouter.post("/addTodo", async (req, res) => {
  // Implement todo creation logic
  let token = req.headers.token;
  let description = req.body.description;
  let userData = jwt.verify(token, process.env.JWT_SECRET);
  let userId = userData.id;
  try {
    await TodoModel.create({
      userId: userId,
      description: description,
      done: false,
    });
    console.log(`Todo ${description} created.`);
  } catch (e) {
    console.log(e);
  }
  // console.log(userData);
});

todoRouter.put("/todos", adminMiddleware, async (req, res) => {
  // Implement update todo  logic
  try {
    let token = req.headers.token;
    let userData = jwt.verify(token, process.env.JWT_SECRET);
    let userId = userData.id;
    let index = req.body.index;
    let oldTodo = req.body.oldTodo;
    let newTodo = req.body.newTodo;
    let todoWithGivenDescription = await TodoModel.find({
      userId: userId,
      description: oldTodo,
    });
    log(index);
    let requiredObject = todoWithGivenDescription[index];
    log(requiredObject);
    await TodoModel.updateOne(requiredObject, {
      $set: { description: newTodo },
    });
    res.json({ message: `${oldTodo} has been updated to ${newTodo}` });
    log("updated");
    return;
  } catch (e) {
    log(e);
  }
  // log("Updated");
});

todoRouter.delete("/todos", adminMiddleware, (req, res) => {
  // Implement delete todo logic
});

todoRouter.delete("/:id", adminMiddleware, (req, res) => {
  // Implement delete todo by id logic
});

todoRouter.get("/todos", adminMiddleware, async (req, res) => {
  // Implement fetching all todo logic
  let token = req.headers.token;
  let userData = jwt.verify(token, process.env.JWT_SECRET);
  let userId = userData.id;
  let todosObjects = await TodoModel.find({ userId: userId });
  // console.log(todosObjects);
  let todos = [];
  for (let i = 0; i < todosObjects.length; i++) {
    todos.push(todosObjects[i].description);
  }
  res.json({ todos: todos });
  return;
});

todoRouter.get("/:id", adminMiddleware, (req, res) => {
  // Implement fetching todo by id logic
});

module.exports = todoRouter;
