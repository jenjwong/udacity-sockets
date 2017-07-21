import React from 'react';
import ProjectListEntry from './ProjectListEntry';
import './ProjectList.css';

const ProjectList = ({ list }) => (
  <div className="project-list">
    {list.map(project => <ProjectListEntry key={project.title} project={project} />)}
  </div>
);

export default ProjectList;
