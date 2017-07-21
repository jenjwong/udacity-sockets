import React from 'react';
import './ChatEntry.css';

const ChatEntry = ({ message, user }) => {
  const type = message.user === user ? 'chat-primary-user' : 'chat-other-user';
  return <div className={`chat-entry ${type}`} key={message.created}>{message.text}</div>;
};

export default ChatEntry;
