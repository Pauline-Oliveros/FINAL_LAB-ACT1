import React from 'react';
import { FaUser, FaPaintBrush, FaSwimmer } from 'react-icons/fa'; // Import icons from react-icons

function About() {
  return (
    <section className="about">
      <h2>About Me</h2>
      <div className="card-box">
        <p>
          <FaUser style={{ marginRight: '8px', color: '#16a34a' }} />
          <strong>Personal Background:</strong> Hi, I'm someone who deeply appreciates the beauty of minimalist design — clean, simple, and purposeful spaces inspire me both in work and life.
        </p>
      </div>
      <div className="card-box">
        <p>
          <FaPaintBrush style={{ marginRight: '8px', color: '#16a34a' }} />
          <strong>Hobbies:</strong> In my free time, I enjoy painting, where I express creativity through colors and simplicity, and playing badminton for both fun and fitness.
        </p>
      </div>
      <div className="card-box">
        <p>
          <FaSwimmer style={{ marginRight: '8px', color: '#16a34a' }} />
          <strong>Interests:</strong> I'm passionate about swimming, going on nature trips, and watching movies. Exploring new places and stories, whether outdoors or on screen, always excites me and fuels my creativity.
        </p>
      </div>
    </section>
  );
}

export default About;
