const Comment = require("../models/Comment");

exports.addComment = async (req, res) => {
  try {
    const { documentId, content } = req.body;
    const comment = new Comment({
      document: documentId,
      content,
      author: req.user.id,
    });
    await comment.save();
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getComments = async (req, res) => {
  try {
    const comments = await Comment.find({ document: req.params.documentId });
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
