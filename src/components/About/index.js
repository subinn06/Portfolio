import React from 'react';
import './index.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiGit } from 'react-icons/si';

const About = () => {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>
      <p>
        I'm a Full Stack Developer with MERN Specialization. I completed the NxtWave CCBP 4.0 Program and earned the 
        <a href="https://certificates.ccbp.in/intensive/irc?id=M465XYSQ3F" target="_blank" rel="noreferrer"> IRC Certificate</a>.
        I love building modern web apps and learning new tools and technologies.
      </p>

      <h3>Skills</h3>
      <div className="skills-icons">
        <FaHtml5 title="HTML5" color="#e44d26" />
        <FaCss3Alt title="CSS3" color="#264de4" />
        <FaJs title="JavaScript" color="#f0db4f" />
        <FaReact title="React" color="#61DBFB" />
        <FaNodeJs title="Node.js" color="#68a063" />
        <SiMongodb title="MongoDB" color="#4db33d" />
        <SiGit title="Git" color="#f1502f" />
      </div>
    </section>
  );
}

export default About;
