import React from 'react';
import './ProjectListEntry.css';

const ProjectListEntry = ({ project }) => (
  <div className={`project-list-entry-container ${project.id}`}>
    <a className="project-list-entry-link" href={project.url}>
      <img className="project-list-entry-image" src={project.src} alt={project.title} />
    </a>
  </div>
  );

export default ProjectListEntry;
