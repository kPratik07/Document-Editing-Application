const Comment = require("../models/Comment");

exports.addComment = async (documentId, content, author) => {
  const comment = new Comment({ document: documentId, content, author });
  return comment.save();
};

exports.getComments = async (documentId) => {
  return Comment.find({ document: documentId });
};
