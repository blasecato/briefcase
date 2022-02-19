import React from "react";
import Banner from "../../../components/Banner/Banner";
import Header from "../../../components/Header/Header";
import About from "../../../components/About/About.js";
import Projects from "../../../components/Projects/Projects.js";
import Skills from "../../../components/Skills/Skills.js";
import ContactMe from "../../../components/ContactMe/ContactMe.js";

const Home = () => {
  return (
    <div className="Home">
      <div className="container">
        <Header />
        <Banner />
        <About />
        <Projects />
        <Skills />
        <ContactMe />
      </div>
    </div>
  );
}

export default Home;
