import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {io} from 'socket.io-client';
import "./chat.css";


let newSock;
const ChatBody = () => {
  const { user } = useSelector((state) => {
    return {
      user: state.userProfile?.user.user,
    };
});
  const navigate = useNavigate();
  const handleLeaveChat = () => {
    // localStorage.removeItem('auth-token');
    navigate('/');
  
  };

  const connectingSocket = () => {
    const socket = io(process.env.BACKEND_SOCKET_URL, {
      transports: ['websocket'],
      auth: {
        token:localStorage.getItem('auth-token'),
      },
    });

    console.log('$$$$$$$44', socket);
    
    return socket;
  };

  connectingSocket()

const [messages, setMessages] = useState([]);
  const [count, setCount] = useState();
  const [storedMessage, setStoredMessage] = useState();
  const [mySocket, setMySocket] = useState()
  

  const userToken = localStorage.getItem('userToken');
  const tok = JSON.parse(userToken);
  
  // useEffect(() => {
  //   const socket = connectingSocket();
  //   setMySocket(socket)
  //   socket.on('message', (data)=>{
  //       setMessages(data.Chats)
  //       console.log('message', data.Chats)
  //   })


  // }, []);
  return (
    <>
      <header className="chat__mainHeader">
        <p>Chat With Others</p>
        <button className="leaveChat__btn" onClick={handleLeaveChat}>
          LEAVE CHAT
        </button>
      </header>

      {/*This shows messages sent from you*/}
      <div className="message__container">

      {messages?.map((message)=>{
                (
                  <div className="message__chats">
                  <>
                  <p className="sender__name">Me</p>
                  <div className="message__sender">
                        <p>{console.log('Tyyyyyyt', message.sender)}</p>
                  </div>
                  </>
                  </div>
                )
                
              })
      }

                <div className="message__chats">
                  <>
                  <p className="sender__name">Me</p>
                  <div className="message__sender">
                        <p>Hettoo</p>
                  </div>
                  </>
                  </div>

                  <div className="message__chats">
                  <>
                  <p className="sender__name">Me</p>
                  <div className="message__sender">
                        <p>Hello</p>
                  </div>
                  </>
                  </div>  
        
            
              {/* {messages? messages.map((message)=>{
                (
                  <div className="message__chats">
                  <>
                  <p className="sender__name">Me</p>
                  <div className="message__sender">
                        <p>{console.log('Tyyyyyyt', message.sender)}</p>
                  </div>
                  </>
                  </div>
                )
                
              }): '' } */}
             
           
          {/* {messages? (
            <>
            <p className="sender__name">Me</p>
            <div className="message__sender">
             <p>Hello there</p>
            </div>
            </>
          ): ''} */}
          
        

        {/*This shows messages received by you*/}
        <div className="message__chats">
          <p>Kamali</p>
          <div className="message__recipient">
            <p>Hey, I'm good, you?</p>
          </div>
        </div>

        {/*This is triggered when a user is typing*/}
        <div className="message__status">
          {/* <p>Someone is typing...</p> */}
        </div>
      </div>
    </>
  );
};

export

 default ChatBody;

