const express = require("express");
const router = express.Router();
const versionController = require("../controllers/versionController");
const authMiddleware = require("../middlewares/authMiddleware");

router.get("/:documentId", authMiddleware, versionController.getVersions);
router.post("/:versionId", authMiddleware, versionController.revertToVersion);

module.exports = router;
