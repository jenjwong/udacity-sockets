import React from 'react';
import './Input.css';

const Form = ({ _handleSubmit, _handleKeyPress, msgText }) => (
  <div className="chat--form--container">
    <form className="chat--form" onSubmit={_handleSubmit}>
      <input
        className="chat-text--input"
        name="msgText"
        onChange={_handleKeyPress}
        type="text" value={msgText}
        placeholder="Write a message..."
      />
    </form>
  </div>
  );

export default Form;
