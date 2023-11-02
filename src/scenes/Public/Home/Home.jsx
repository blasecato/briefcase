import React, { useEffect } from "react";
import Banner from "components/Organisms/Banner/Banner";
import About from "components/Organisms/About/About";
import Projects from "components/Organisms/Projects/Projects";
import Skills from "components/Organisms/Skills/Skills";
import ContactMe from "components/Organisms/ContactMe/ContactMe";
import whatsappPng from "assets/images/whatsaap.png";
import Aos from "aos";
import "aos/dist/aos.css";

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
        <img src={whatsappPng} alt="whatsaap" className="imgwhatsaap" />
      </a>
    </div>
  );
};

export default Home;
