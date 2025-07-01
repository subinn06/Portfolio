import React from 'react';
import './index.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <div className="contact-icons">
        <a href="mailto:subinsuresha@gmail.com" target="_blank" rel="noreferrer" title="Email">
          <FaEnvelope />
        </a>
        <a href="https://www.linkedin.com/in/subin06" target="_blank" rel="noreferrer" title="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://github.com/subinn06" target="_blank" rel="noreferrer" title="GitHub">
          <FaGithub />
        </a>
      </div>
    </section>
  );
}

export default Contact;

