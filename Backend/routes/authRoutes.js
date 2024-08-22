const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// Example protected route
router.get("/protected", authMiddleware, (req, res) => {
  res.status(200).json({ message: "Access granted", user: req.user });
});

module.exports = router;
