import React from "react";
import style from "./Notification.module.css"


const Notification = ({ message }) => (
  <div>
    <h1 className={style.message}>{message}</h1>
  </div>
);

export default Notification;