import React from 'react';

const Notification = ({showNotification}) => {
  // Two ways of doing this:
  // return ( showNotification &&
  //   <div className="notification-container">
  //     <p>You have already entered this letter</p>
  //   </div>
  // );

  return (
    <div className={`notification-container ${showNotification ? 'show' : ''}`}>
      <p>You have already entered this letter</p>
    </div>
  );
};

export default Notification;
