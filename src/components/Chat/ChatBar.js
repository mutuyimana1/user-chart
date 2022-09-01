import React from 'react';
import "./chat.css";

const ChatBar = () => {
  return (
    <div className="chat__sidebar">
      <div>
        <h4 className="chat__header">ACTIVE USERS</h4>
        <div className="chat__users">
            {/* listing all online users */}
        </div>
      </div>
    </div>
  );
};

export default ChatBar;
