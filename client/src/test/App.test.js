import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

import { SocketIO } from 'mock-socket';

// mocks socket connection for test
window.io = SocketIO;

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
