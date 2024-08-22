const http = require("http");
const app = require("./app");
const initializeSocketServer = require("./sockets/index");
const documentSocket = require("./sockets/documentSocket");
const notificationSocket = require("./sockets/notificationSocket");

// Create HTTP server
const server = http.createServer(app);

// Initialize WebSocket server
const io = initializeSocketServer(server);

// Set up WebSocket event handlers
io.on("connection", (socket) => {
  documentSocket(socket);
  notificationSocket(socket);
});

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
