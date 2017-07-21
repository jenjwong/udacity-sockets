import React from 'react';
import './ChatHeader.css';

const ChatHeader = ({ name, _handleHeaderClick }) => (
  <div className="chat-header--container">
    <div className="chat-header--pic" />
    <div className="chat-header--name">{name}</div>
    <div className="chat-header--close" onClick={_handleHeaderClick}><i className="fa fa-times" aria-hidden="true" /></div>

  </div>
  );

export default ChatHeader;
