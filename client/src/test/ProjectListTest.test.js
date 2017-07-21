import React from 'react';
import { shallow } from 'enzyme';
import ProjectList from '../components/projects/ProjectList';
import ProjectListEntry from '../components/projects/ProjectListEntry';
import { projectData } from '../utils';

test('List should render entry for each item in dataset', () => {
  const component = shallow(<ProjectList list={projectData} />);
  expect(component.find(ProjectListEntry).length).toEqual(3);
});
