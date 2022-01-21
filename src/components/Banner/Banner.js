import React from "react";
import {
  GithubOutlined,
  GitlabOutlined,
  LinkedinOutlined,
  GoogleOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import billing from "../../assets/images/billing.svg";
import icon from "../../assets/images/icon-ring.svg";

const Banner = () => {
  return (
    <div className="Banner">
      <div className="animate__fadeInLeft animate__animated box box--left">
        <div className="box-title">
          <h1 className="title">
            Sebastian <br /> Calderon
          </h1>
          <h1 className="des">
            Front-end <br /> Developer
          </h1>
        </div>
        <p className="sub-title">
          Development of web sites and applications, as well as cross-platform
          mobile applications.
        </p>
        <Button className="btn-cv">
          <div className="btn-cv--img">
            <img src={icon} className="icon-ring" alt="icon-ring" />
            <div className="circle">
              <img src={billing} className="billing" alt="billing" />
            </div>
          </div>
          <div className="btn-cv--text">
            <p>RESUME (CV)</p>
            <span>Download</span>
          </div>
        </Button>
        <div className="netWorks">
          <a
            href="https://github.com/blasecato"
            target="_blank"
            className="link-net"
            rel="noopener noreferrer"
          >
            <GithubOutlined />
          </a>
          <a
            href="https://gitlab.com/blasecato"
            target="_blank"
            rel="noopener noreferrer"
            className="link-net link-net--next"
          >
            <GitlabOutlined />
          </a>
          <a
            href="https://www.linkedin.com/in/sebastian-calderon-444366192/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-net"
          >
            <LinkedinOutlined />
          </a>
          <a
            href="mailto:bl.calderonn@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link-net link-net--next"
          >
            <GoogleOutlined />
          </a>
          <a
            href="https://www.instagram.com/blasecato"
            target="_blank"
            rel="noopener noreferrer"
            className="link-net"
          >
            <InstagramOutlined />
          </a>
        </div>
      </div>
      <div className="animate__fadeInRight animate__animated box box--rigth">
        <div className="box-flex">
          <div className="mockup mockup1"></div>
          <div className="mockup mockup2"></div>
        </div>
        <div>
          <div className="mockup mockup3"></div>
        </div>
        <div className="box-flex">
          <div className="mockup mockup4"></div>
          <div className="mockup mockup5"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
