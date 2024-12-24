const express = require("express");
const { loginUser, registerUser } = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/login", loginUser);
router.post("/signup", registerUser);
router.get("/protected", protect, (req, res) => {
  res.json({ message: "This is a protected route.", user: req.user });
});

module.exports = router;
