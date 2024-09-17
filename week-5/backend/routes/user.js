const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
router.post("/signup", (req, res) => {
  // Implement user signup logic
});

router.post("/login", userMiddleware, (req, res) => {
  // Implement user login logic
  res.send("You've logged in");
});

router.get("/todos", userMiddleware, (req, res) => {
  // Implement logic for getting todos for a user
});

router.post("/logout", userMiddleware, (req, res) => {
  // Implement logout logic
});
router.get("/", (req, res) => {
  //   res.send("Herwrwe");
  res.json({ message: "You are on landing page." });
});
module.exports = router;
