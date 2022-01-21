import React from "react";
import {
  SolutionOutlined,
  ReadOutlined,
  MessageOutlined,
  ThunderboltOutlined
} from "@ant-design/icons";
import logo from "../../assets/images/SC-01.svg";
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
              <SolutionOutlined />
              <span>About</span>
            </div>
          </a>
          <a href="./" className="button-header">
            <div className="button-header--content">
              <ReadOutlined />
              <span>Projects</span>
            </div>
          </a>
          <a href="./" className="button-header">
            <div className="button-header--content">
              <ThunderboltOutlined />
              <span>
                Skills
              </span>
            </div>
          </a>
          <a href="./" className="button-header">
            <div className="button-header--content">
              <MessageOutlined />
              <span>Contact</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
