import React, { useState } from "react";
import "./Notification.css";
import notifactionsuccess from "../assets/notifactionsucess.svg";
import close from "../assets/close.svg";

const Notification = () => {
  const [showNotification, setShowNotification] = useState(false);

  const handleShowNotification = () => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000); // Hide notification after 3 seconds
  };

  return (
    <div className="notification-container">
      <button className="trigger-button" onClick={handleShowNotification}>
        Show Notification
      </button>
      {showNotification && (
        <div className="notification flex justify-between items-center py-4 px-3">
          <div className="flex items-center gap-4 ">
            <span className="notification-icon  ">
              <img src={notifactionsuccess} alt="" />
            </span>
            <div>
              <span className="notification-message text-[16px] font-[700] text-[#2EC4B6] ">
                Success
              </span>
              <p className="text-[12px] font-[600]"> New Campaign Created.</p>
            </div>
          </div>
          <button
            className="close-button text-center flex justify-center items-center p-2  "
            onClick={() => setShowNotification(false)}
          >
            <img src={close} alt="" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Notification;
