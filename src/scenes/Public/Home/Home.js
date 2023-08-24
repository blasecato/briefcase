import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Banner from "components/Banner/Banner";
import About from "components/About/About.js";
import Projects from "components/Projects/Projects.js";
import Skills from "components/Skills/Skills.js";
import ContactMe from "components/ContactMe/ContactMe.js";
import whatsaap from "assets/images/whatsaap.png";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="Home">
      <div className="container-home">
        <Banner />
        <About />
        <Projects />
        <Skills />
        <ContactMe />
      </div>
      <a
        href="https://wa.me/573157308621?text=Me%20interesaria%20trabajar%20con%20tigo"
        className="buttonW">
        <img src={whatsaap} alt="whatsaap" className="imgwhatsaap" />
      </a>
    </div>
  );
};

export default Home;
