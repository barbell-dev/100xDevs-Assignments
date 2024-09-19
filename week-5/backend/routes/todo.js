//  start writing your code from hereconst { todoRouter } = require("express");
const { Router } = require("express");
const { UserModel, TodoModel } = require("../db");
const adminMiddleware = require("../middleware/user");
const todoRouter = Router();
const jwt = require("jsonwebtoken");
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

todoRouter.put("/", adminMiddleware, (req, res) => {
  // Implement update todo  logic
});

todoRouter.delete("/", adminMiddleware, (req, res) => {
  // Implement delete todo logic
});

todoRouter.delete("/:id", adminMiddleware, (req, res) => {
  // Implement delete todo by id logic
});

todoRouter.get("/todos", adminMiddleware, (req, res) => {
  // Implement fetching all todo logic
});

todoRouter.get("/:id", adminMiddleware, (req, res) => {
  // Implement fetching todo by id logic
});

module.exports = todoRouter;
