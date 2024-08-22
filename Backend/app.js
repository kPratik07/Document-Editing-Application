const express = require("express");
const app = express();
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const documentRoutes = require("./routes/documentRoutes");
const versionRoutes = require("./routes/versionRoutes");
const commentRoutes = require("./routes/commentRoutes");
const notificationRoutes = require("./routes/notificationRoutes");
const errorHandler = require("./middlewares/errorHandler");

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/documents", documentRoutes);
app.use("/api/versions", versionRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/notifications", notificationRoutes);
app.use(errorHandler);

module.exports = app;
