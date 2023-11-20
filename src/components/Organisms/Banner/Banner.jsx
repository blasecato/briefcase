import React, { useEffect } from "react";
import billing from "assets/images/billing.svg";
import icon from "assets/images/icon-ring.svg";
import hv from "assets/cv.pdf";
import Header from "components/Molecules/Header/Header";
import networks from "common/utils/netWorks";

const Banner = () => {
  useEffect(() => {
    document.addEventListener("DOMContentLoaded", function () {
      const textElement = document.getElementById("text");
      const text = textElement.innerHTML;
      textElement.innerHTML = "";
      let i = 0;
      function typeWriter() {
        if (i < text.length) {
          textElement.innerHTML += text.charAt(i);
          i++;
          setTimeout(typeWriter, Math.random() * 200 + 100); // Adjust the timing as desired
        }
      }
      typeWriter();
    });
  }, []);
  return (
    <div className="Banner" id="banner">
      <Header />
      <div className="container">
        <div className="animate__fadeInLeft animate__animated box box--left">
          <div className="box-title">
            <h1 className="title">
              Sebastian <br /> Calderon
            </h1>
            <h1 className="des" id="text">
              Front-end Developer
            </h1>
          </div>
          <p className="sub-title">
            Development of web sites and applications, as well as cross-platform
            mobile applications.
          </p>
          <a
            className="btn-cv"
            href={hv}
            target="_blank"
            rel="noopener noreferrer"
          >
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
          </a>
          <div className="netWorks">
            {networks?.map((network) => (
              <a
                key={network.id}
                href={`${network.link}`}
                target="_blank"
                className="link-net"
                rel="noopener noreferrer"
              >
                {network.icon}
              </a>
            ))}
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
    </div>
  );
};

export default Banner;
