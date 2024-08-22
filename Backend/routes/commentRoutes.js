const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/", authMiddleware, commentController.addComment);
router.get("/:documentId", authMiddleware, commentController.getComments);

module.exports = router;
