let log = console.log;
function userMiddleware(req, res, next) {
  // Implement user auth logic
  /*Basic schema structure:
          {{username:'username',password:'password',userId:'userId',todos:{{todo:'todo1',todoId;'todo1Id1'}}}
      */
  log(req.body.username);
  if (req.body.username == "r") {
    next();
  } else {
    res.json({ message: "You have been blocked" });
  }
}

module.exports = userMiddleware;
