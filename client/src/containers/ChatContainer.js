import React, { PureComponent } from 'react';
import dompurify from 'dompurify';
import userId from 'uuid/v1';
import Input from '../components/chat/Input';
import MessageDisplay from '../components/chat/MessageDisplay';
import ChatHeader from '../components/chat/ChatHeader';
import { introText } from '../utils';

import './ChatContainer.css';

export default class Chat extends PureComponent {
  state = {
    msgText: '',
    messageHistory: [],
    hasIntroPlayed: false,
  }

  componentWillMount() {
    this.setState({socket: window.io()});
    this.setState({user: userId()});
  }

  componentDidMount() {
    this.state.socket.on('chat message', (msg) => {
      const updatedMessages = [...this.state.messageHistory, msg];
      this.setState({messageHistory: updatedMessages });
    });
  }

  playIntro = () => {
    const timedMsg = (msgDictionary, index=0) => {
        const updatedMessages = [...this.state.messageHistory, msgDictionary[index]]
        setTimeout(() => {
          this.setState({messageHistory: updatedMessages });
          if (index < Object.keys(msgDictionary).length - 1) {
            timedMsg(msgDictionary, index + 1)
          }
        },  msgDictionary[index].timing)
    }
    const intro = introText(this.state.user);
    timedMsg(intro);
  }

  componentDidUpdate() {
    if (this.props.isChatToggled && !this.state.hasIntroPlayed) {
      this.setState({hasIntroPlayed: true});
      this.playIntro(this.state.user);
    }
  }

  _handleKeyPress = (e) => {
    e.preventDefault();
    const sanitizedInput = dompurify.sanitize(e.target.value);
    this.setState({ [e.target.name]: sanitizedInput });
    this.state.socket.emit('typing', `${this.state.user} is typing...`);
  }

  _handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.msgText.length > 0) {
      const msg = {
        created: Date.now(),
        text: this.state.msgText,
        user: this.state.user,
        room: null
      }
      this.state.socket.emit('chat message', msg);
      this.setState({msgText: ''});
    }
  }

  render() {
    return (
      <div>
        {this.props.isChatToggled &&
          <div className="chat-container">
            <ChatHeader name={'Ask Me Anything!'} _handleHeaderClick={this.props._handleChatToggle}/>
            <MessageDisplay messageHistory={this.state.messageHistory} user={this.state.user}></MessageDisplay>
            <Input
              _handleKeyPress={this._handleKeyPress}
              msgText={this.state.msgText}
              _handleSubmit={this._handleSubmit}
            />
          </div>}
      </div>
    );
  }
}
