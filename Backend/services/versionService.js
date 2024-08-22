const Version = require("../models/Version");
const Document = require("../models/Document");

exports.createVersion = async (documentId, content) => {
  const version = new Version({ document: documentId, content });
  await version.save();
  await Document.findByIdAndUpdate(documentId, { content });
};

exports.getVersions = async (documentId) => {
  return Version.find({ document: documentId });
};
