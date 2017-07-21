import React from 'react';
import { shallow } from 'enzyme';
import MessageDisplay from '../components/chat/MessageDisplay';
import ChatEntry from '../components/chat/ChatEntry';

const mockMessages = [{ text: 'hi', created: 1 }, { text: 'two messages', created: 2 }];

test('List should render entry for each item in dataset', () => {
  const component = shallow(<MessageDisplay messageHistory={mockMessages} />);
  expect(component.find(ChatEntry).length).toEqual(2);
});
