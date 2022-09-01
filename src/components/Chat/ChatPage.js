import React, { useEffect } from 'react';
import ChatBar from './ChatBar';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';
import "./chat.css";
import axiosInstance from '../../helpers/http';


const ChatPage = ({  }) => {
    useEffect(async()=>{
        const allChats = await axiosInstance.get('/users/chats/');
        console.log('aaaaaaaaaa', allChats)
    }, [])
  return (
    <div className="chat">
      <ChatBar />
      <div className="chat__main">
        <ChatBody />
        <ChatFooter />
      </div>
    </div>
  );
};

export default ChatPage;
