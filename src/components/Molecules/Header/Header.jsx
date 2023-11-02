import React from "react";
import logo from "assets/images/SC-01.svg";
import { Button } from "antd";

const Header = () => {
  return (
    <div className="Header">
      <div className="container">
        <div className="box">
          <Button className="btn-logo">
            <img src={logo} alt="logo" className="logo" />
          </Button>
        </div>
        <div className="box">
          <a href="./" className="button-header">
            <div className="button-header--content">
              <span>About</span>
            </div>
          </a>
          <a href="./" className="button-header">
            <div className="button-header--content">
              <span>Projects</span>
            </div>
          </a>
          <a href="./" className="button-header">
            <div className="button-header--content">
              <span>Skills</span>
            </div>
          </a>
          <a href="./" className="button-header">
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
