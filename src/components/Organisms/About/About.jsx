import React from "react";
import Scene3d from "components/Animations/Scene3d/Scene3d";

const About = () => {
  return (
    <div className="About-me" data-aos="fade-up" id="about-me">
      <div className="container">
        <h1 className="title-effect" data-text="ABOUT ME">
          ABOUT ME
        </h1>
        <div className="container__box">
          <div className="container__box__img" data-aos="fade-up-right">
            <Scene3d />
          </div>
          <div
            className="container__box__content"
            data-aos="fade-up-left"
            data-aos-offset="200"
            data-aos-easing="ease-out-cube"
            data-aos-duration="500"
          >
            <div className="circle"></div>
            <div className="circle-two"></div>
            <div className="card">
              <p>
                Hi, I'm Blas, a frontend developer. I define myself as
                Responsible, Companionate, Adaptable, Studious. <br />
                <br /> I like to be committed and responsible with the tasks
                entrusted to me and achieve objectives effectively. I consider
                myself a person who adapts to teamwork and who likes to give his
                contribution, opinion and add to a work team.
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
