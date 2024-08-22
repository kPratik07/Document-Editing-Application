const Version = require("../models/Version");

exports.getVersions = async (req, res) => {
  try {
    const versions = await Version.find({ document: req.params.documentId });
    res.json(versions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.revertToVersion = async (req, res) => {
  try {
    const { versionId } = req.params;
    const version = await Version.findById(versionId);
    if (!version) {
      return res.status(404).json({ message: "Version not found." });
    }
    await Document.findByIdAndUpdate(version.document, {
      content: version.content,
    });
    res.json({ message: "Document reverted to selected version." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
