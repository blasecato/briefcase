import React from "react";
import logo from "assets/images/SC-01.svg";

const Header = () => {
  return (
    <div className="Header">
      <div className="container">
        <div className="box">
          <a href="#banner" className="btn-logo">
            <img src={logo} alt="logo" className="logo" />
          </a>
        </div>
        <div className="box">
          <a href="#about-me" className="button-header">
            <div className="button-header--content">
              <span>About</span>
            </div>
          </a>
          <a href="#projects" className="button-header">
            <div className="button-header--content">
              <span>Projects</span>
            </div>
          </a>
          <a href="#skills" className="button-header">
            <div className="button-header--content">
              <span>Skills</span>
            </div>
          </a>
          <a href="#contact" className="button-header">
            <div className="button-header--content">
              <span>Contact</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
