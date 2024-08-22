import React from "react";

const NotificationItem = ({ notification }) => {
  return <li>{notification.message}</li>;
};

export default NotificationItem;
