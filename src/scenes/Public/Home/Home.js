import React from "react";
import Banner from "../../../components/Banner/Banner";
import Header from "../../../components/Header/Header";
import About from "../../../components/About/About.js";

const Home = () => {
  return (
    <div className="Home">
      <div className="container">
        <Header />
        <Banner />
        <About />
      </div>
    </div>
  );
}

export default Home;
