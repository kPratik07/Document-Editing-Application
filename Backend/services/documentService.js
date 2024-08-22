const Document = require("../models/Document");

exports.createDocument = async (title, content, owner) => {
  const document = new Document({ title, content, owner });
  return document.save();
};

exports.getDocuments = async (owner) => {
  return Document.find({ owner });
};

exports.getDocument = async (id) => {
  return Document.findById(id);
};
