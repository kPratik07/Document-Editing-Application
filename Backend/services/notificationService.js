const Notification = require("../models/Notification");

exports.getNotifications = async (userId) => {
  return Notification.find({ user: userId });
};

exports.addNotification = async (content, userId) => {
  const notification = new Notification({ content, user: userId });
  return notification.save();
};
