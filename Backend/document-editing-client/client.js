const io = require("socket.io-client");
const socket = io("http://localhost:5000");

socket.on("connect", () => {
  console.log("Connected to WebSocket server");
});

socket.on("documentUpdated", (data) => {
  console.log("Document updated:", data);
});

// Emit an event
socket.emit("editDocument", { documentId: "123", content: "Updated content" });
