import React from 'react';
import { FaReact, FaTasks } from 'react-icons/fa'; // Import icons from react-icons

function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="card-box">
        <FaReact className="project-icon" />
        <h3>Portfolio About Me</h3>
        <p>
          This portfolio showcases my creativity as a passionate individual who loves minimalist design. 
          It's a space where I share my projects, ideas, and my dedication to simple, thoughtful, and impactful design.
        </p>
        <p><strong>Technologies used:</strong> React.js</p>
      </div>
      <div className="card-box">
        <FaTasks className="project-icon" />
        <h3>Task-Management</h3>
        <p>
          Task Management is a collaborative project developed with my classmates. 
          It focuses on creating a simple and efficient CRUD (Create, Read, Update, Delete) system to manage tasks, 
          helping teams stay organized and productive.
        </p>
        <p><strong>Technologies used:</strong> GitHub, React.js</p>
      </div>
    </section>
  );
}

export default Projects;
