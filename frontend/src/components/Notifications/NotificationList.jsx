import React, { useContext } from "react";
import { NotificationContext } from "../../contexts/NotificationContext";
import NotificationItem from "./NotificationItem";

const NotificationList = () => {
  const { notifications } = useContext(NotificationContext);

  return (
    <ul>
      {notifications.map((notification) => (
        <NotificationItem key={notification.id} notification={notification} />
      ))}
    </ul>
  );
};

export default NotificationList;
