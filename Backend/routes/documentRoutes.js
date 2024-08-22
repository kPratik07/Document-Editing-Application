const express = require("express");
const router = express.Router();
const documentController = require("../controllers/documentController");
const { validateDocument } = documentController;

router.post("/", validateDocument, documentController.createDocument);
router.get("/:id", documentController.getDocument);
router.put("/:id", validateDocument, documentController.updateDocument);
router.delete("/:id", documentController.deleteDocument);

module.exports = router;
