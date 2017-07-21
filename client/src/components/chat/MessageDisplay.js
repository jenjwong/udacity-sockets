import React, { PureComponent } from 'react';
import ChatEntry from './ChatEntry';
import './MessageDisplay.css';

class MessageDisplay extends PureComponent {
  componentDidUpdate() {
    this.MessageDisplayDiv.scrollTop = this.MessageDisplayDiv.scrollHeight;
  }
  render() {
    return (
      <div className="message-display" ref={(input) => { this.MessageDisplayDiv = input; }}>
        {this.props.messageHistory.map(message => <ChatEntry key={message.created} message={message} user={this.props.user} />)}
      </div>
    );
  }
}

export default MessageDisplay;
