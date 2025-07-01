import React from 'react';
import './index.css';

const Header = () => {
  return (
    <header className="hero">
      <div className="hero-content">
        <img
          src={`${process.env.PUBLIC_URL}/subin.jpg`}
          alt="Subin"
          className="profile-img"
        />
        <h1>Hi, I'm Subin A</h1>
        <p>Full Stack Developer | MERN Stack Enthusiast</p>
        <a href="#projects" className="btn-primary">View My Projects</a>
      </div>
    </header>
  );
}

export default Header;
