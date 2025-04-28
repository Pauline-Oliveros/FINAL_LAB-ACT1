import React from 'react';
import profileImage from '../assets/profile.jpg';
import { FaEnvelope, FaUserGraduate, FaServer, FaLaptopCode } from 'react-icons/fa'; 
function Home() {
  return (
    <>
      <section className="home card-box">
        <div className="home-image-container">
          <img src={profileImage} alt="Profile" className="profile-image" />
        </div>
        <div className="home-text">
          <h1>Hi There, It's Pau</h1>
          <p>
            I am a 3rd year college student taking up Bachelor of Science in Information Technology. 
            I’m dedicated, curious, and always try to do my best. As I continue studying, I want to 
            gain experience and become a skilled, confident IT professional.
          </p>
          <a href="contact" className="cta-button">
            <FaEnvelope style={{ marginRight: '8px' }} /> Contact Me
          </a>
        </div>
      </section>

      <section className="what-i-do">
        <h2>What I Do</h2>
        <div className="card-container">
          <div className="card-box">
            <FaUserGraduate className="card-icon" />
            <h3>Student</h3>
            <p>
              As a 3rd-year IT student, I am passionate about learning and growing in the field of technology.
            </p>
          </div>
          <div className="card-box">
            <FaServer className="card-icon" />
            <h3>Learning Backend</h3>
            <p>
              I am exploring backend technologies to build efficient and scalable server-side applications.
            </p>
          </div>
          <div className="card-box">
            <FaLaptopCode className="card-icon" />
            <h3>Learning Frontend</h3>
            <p>
              I am honing my skills in frontend development to create interactive and user-friendly interfaces.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
