const io = require("./index");

const documentSocket = (socket) => {
  socket.on("editDocument", (data) => {
    socket.broadcast.emit("documentUpdated", data);
  });

  socket.on("joinDocument", (documentId) => {
    socket.join(documentId);
    socket.to(documentId).emit("userJoined", socket.id);
  });

  socket.on("leaveDocument", (documentId) => {
    socket.leave(documentId);
    socket.to(documentId).emit("userLeft", socket.id);
  });
};

module.exports = documentSocket;
