import React from 'react';
import { FaUniversity, FaGraduationCap, FaSchool } from 'react-icons/fa'; // Import icons from react-icons

function Education() {
  return (
    <section className="education">
      <h2>Education</h2>
      <div className="card-box">
        <FaUniversity className="education-icon" />
        <strong>College:</strong><br />
        University of Cabuyao<br />
        Bachelor of Science in Information Technology<br />
        2022-2025
      </div>
      <div className="card-box">
        <FaGraduationCap className="education-icon" />
        <strong>Senior High:</strong><br />
        St. Vincent College of Cabuyao<br />
        Humanities and Social Sciences<br />
        2020-2022
      </div>
      <div className="card-box">
        <FaSchool className="education-icon" />
        <strong>Junior High:</strong><br />
        Cabuyao National High School<br />
        General Academic Strand<br />
        2016-2020
      </div>
    </section>
  );
}

export default Education;