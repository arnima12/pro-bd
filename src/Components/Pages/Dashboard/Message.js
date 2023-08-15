import React, { useState, useEffect, useContext } from 'react';
import { List, ListItem, ListItemText, TextField, Button } from '@mui/material';
import axios from 'axios';
import { UserContext } from '../Authentication/UserContext';
import { useLocation } from 'react-router-dom';

const MessagePage = () => {
  const [chatIds, setChatIds] = useState([]);
  const [selectedChat, setSelectedChat] = useState('');
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const { isLoggedIn } = useContext(UserContext);
  const [chatName,setChatName] = useState(null);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const getProfessionalIdFromURL = () => {
    const pathnameParts = location.pathname.split('/');
    const professionalIdIndex = pathnameParts.indexOf('msg') + 1;
    return pathnameParts[professionalIdIndex];
  };

  const professionalId = getProfessionalIdFromURL();
  const professionalName = queryParams.get('name');
//  setChatName(professionalName);
  console.log('professionalName', professionalName);
  console.log('professionalId', professionalId);
  const handleChatItemClick = async (chatId) => {
    try {
      // Fetch messages for the selected chatId
      const token = localStorage.getItem("cookie");
      const options = {
        headers: {
          Authorization: `${token}`,
        },
      };

      const response = await axios.post('https://pbd.onrender.com/api/loadprevmsg', {
        receiver: chatId,
      }, options);
      setMessages(response.data);

      // Find the chat item with the selected chat ID and update the professional name
      const chatItem = chatIds.find(chat => chat.uid === chatId);
      
    } catch (error) {
      console.error('Failed to fetch messages:', error);
    }
  };

  useEffect(() => {
    const fetchChatIds = async () => {
      try {
        const token = localStorage.getItem("cookie");
        const options = {
          headers: {
            Authorization: `${token}`,
          },
        };
  
        const response = await axios.get('https://pbd.onrender.com/api/chatidlist', options);
        console.log(response.data)
        setChatIds(response.data);
      } catch (error) {
        console.error('Error fetching chat IDs:', error);
      }
    };
    fetchChatIds();
  }, []);
  

  // useEffect(() => {
  //   const mapChatIdsToProfessionalNames = async (chatIds) => {
  //     try {
  //       const response = await axios.post('https://pbd.onrender.com/api/professionallist', {
  //         query: chatIds,
  //       });
  //       const professionalNames = response.data.map(professional => professional.name);
  //       return professionalNames;
  //     } catch (error) {
  //       console.error('Error fetching professional names:', error);
  //       return [];
  //     }
  //   };

  //   const fetchProfessionalNames = async () => {
  //     if (chatIds && chatIds.length > 0) {
  //       const professionalNames = await mapChatIdsToProfessionalNames(chatIds);
  //       setChatIds(professionalNames);
  //     }
  //   };

  //   fetchProfessionalNames();
  // }, [chatIds]);


  const fetchMessages = async () => {
    try {
      const token = localStorage.getItem("cookie");
      const options = {
        headers: {
          Authorization: `${token}`,
        },
      };
      if (professionalId) { // 
        const response = await axios.post('https://pbd.onrender.com/api/loadprevmsg', {
          receiver: professionalId,
        }, options);
        setMessages(response.data);
      }
    } catch (error) {
      console.error('Failed to fetch messages:', error);
    }
  };
  
  // useEffect(() => {
  //   if (selectedChat) {
  //     fetchMessages();
  //   }
  // }, [selectedChat]);
  const handleSendMessage = async () => {
    if (!newMessage) return;
console.log(newMessage)
    try {
      const token = localStorage.getItem("cookie");
      const options = {
        headers: {
          Authorization: `${token}`,
        },
      };

      const response = await axios.post('https://pbd.onrender.com/api/savemsg', { receiver: professionalId, msg: newMessage},options);
      console.log("Receiver:", response.data.receiver);
      console.log("Message:", response.data.msg);
      console.log(response.data);
      fetchMessages();

      setNewMessage('');
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  };
  

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      
      <div style={{ flex: 1, backgroundColor: '#f0f0f0', padding: '1rem' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '1rem' }}>Message</h1>
        {chatIds === null ? (
  <div>Loading...</div>
) : chatIds.length > 0 ? (
  <List>
            {chatIds.map(chat => (
              <ListItem
              key={chat.uid} 
              button
              selected={selectedChat === chat.uid}
              onClick={() => handleChatItemClick(chat.uid)}
            >
              <ListItemText primary={chat.rname || chat.sname} /> 
            </ListItem>
            ))}
          </List>
) : (
  <div>No chats found.</div>

        )}
      </div>
      <div style={{ flex: 3, padding: '1rem' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '1rem' }}>Chat with {professionalName}</h2>
        <div style={{ height: '400px', overflowY: 'scroll', marginBottom: '1rem', border: '1px solid #ccc', padding: '1rem' }}>
          {Array.isArray(messages) ? (
            messages.map((message, index) => (
              <div key={index} style={{ marginBottom: '0.5rem' }}>
              {message.msg}
            </div>
            ))
          ) : (
            <div>No messages found.</div>
          )}
        </div>
        <div style={{ display: 'flex' }}>
          <TextField
            value={newMessage}
            onChange={e => setNewMessage(e.target.value)}
            fullWidth
            variant="outlined"
            placeholder="Type your message..."
            style={{ flexGrow: 1, marginRight: '5px' }}
          />
          <Button onClick={()=>handleSendMessage()} variant ="contained" color="primary">
            Send
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MessagePage;
