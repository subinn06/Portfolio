import React from 'react';
import './index.css';

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="project-grid">
        <div className="project-card">
          <h3>Insta Share</h3>
          <p>React, JWT Auth, REST APIs</p>
          <p>A responsive Instagram-like app with authentication, user feed, and interactions.</p>
          <a href="https://instasharesubin.ccbp.tech" target="_blank" rel="noreferrer">Live Demo</a> | 
          <a href="https://github.com/subinn06/InstaShare-Clone" target="_blank" rel="noreferrer"> GitHub</a>
        </div>

        <div className="project-card">
          <h3>Nxt Trendz</h3>
          <p>React, Routing, JWT Auth, REST APIs</p>
          <p>E-commerce site inspired by Flipkart/Amazon with protected routes and product details.</p>
          <a href="https://nxttrendzsubin.ccbp.tech" target="_blank" rel="noreferrer">Live Demo</a> | 
          <a href="https://github.com/subinn06/NxtTrendz" target="_blank" rel="noreferrer"> GitHub</a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
