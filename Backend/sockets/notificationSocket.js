const io = require("./index");

const notificationSocket = (socket) => {
  socket.on("sendNotification", (notification) => {
    socket.broadcast.emit("notificationReceived", notification);
  });
};

module.exports = notificationSocket;
