const dotenv = require("dotenv");
let log = console.log;

const bcrypt = require("bcrypt");
const { UserModel } = require("../db");
async function userMiddleware(req, res, next) {
  // Implement user auth logic
  /*Basic schema structure:
          {{username:'username',password:'password',userId:'userId',todos:{{todo:'todo1',todoId;'todo1Id1'}}}
      */
  log(req.body.email);
  log(req.body.password);
  let token = req.headers.token;
  if (token) {
    next();
  } else {
    const password = req.body.password;
    try {
      const response = await UserModel.findOne({ email: req.body.email });
      log(password);
      const passwordMatch = await bcrypt.compare(password, response.password);
      if (!passwordMatch) {
        res.json({ message: "Invalid credentials" });
        return;
      } else {
        req.body.id = response._id.toString();
        next();
        return;
      }
    } catch (e) {
      res.json({ message: "Enter a valid email and password." });
      log(e);
    }
  }
}

module.exports = userMiddleware;
