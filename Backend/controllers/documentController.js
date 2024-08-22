const { check, validationResult } = require("express-validator");
const Document = require("../models/Document");

// Validation middleware for document creation and update
exports.validateDocument = [
  check("title").notEmpty().withMessage("Title is required"),
  check("content").notEmpty().withMessage("Content is required"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

// Create a new document
exports.createDocument = async (req, res) => {
  try {
    const newDocument = new Document({
      title: req.body.title,
      content: req.body.content,
      author: req.user.id,
    });
    await newDocument.save();
    res.status(201).json(newDocument);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a document by ID
exports.getDocument = async (req, res) => {
  try {
    const document = await Document.findById(req.params.id);
    if (!document) return res.status(404).json({ error: "Document not found" });
    res.json(document);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a document
exports.updateDocument = async (req, res) => {
  try {
    const document = await Document.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!document) return res.status(404).json({ error: "Document not found" });
    res.json(document);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a document
exports.deleteDocument = async (req, res) => {
  try {
    const document = await Document.findByIdAndDelete(req.params.id);
    if (!document) return res.status(404).json({ error: "Document not found" });
    res.json({ message: "Document deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
