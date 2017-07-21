import React from 'react';
import Chat from './ChatContainer';
import './FooterContainer.css';

const FooterContainer = ({ isChatToggled, _handleChatToggle }) => (
  <div>
    <Chat isChatToggled={isChatToggled} _handleChatToggle={_handleChatToggle} />
    <footer onClick={_handleChatToggle}>
      <div className="chat">
        <span className="ask">Ask me anything!</span>
        <i className="fa fa-commenting-o" aria-hidden="true" />
      </div>
    </footer>
  </div>
  );

export default FooterContainer;
