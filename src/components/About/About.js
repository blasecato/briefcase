import React from "react";
import Scene3d from "components/Scene3d/Scene3d";

const About = () => {
  return (
    <div className="About-me" data-aos="fade-up">
      <div className="container">
        <h1 className="title-effect" data-text="ABOUT ME">
          ABOUT ME
        </h1>
        <div className="container__box">
          <div className="container__box__img" data-aos="fade-up-right">
            {/* <img src={Answer} alt="Answer" className="Answer" /> */}
            <Scene3d />
          </div>
          <div
            className="container__box__content"
            data-aos="fade-up-left"
            data-aos-offset="200"
            data-aos-easing="ease-out-cube"
            data-aos-duration="500">
            <div className="circle"></div>
            <div className="circle-two"></div>
            <div className="card">
              <p>
                Professional systems engineer in training and frontend
                developer. <br />
                Four (4) words define me. Learn, Technology, Responsible,
                Friendly. <br />
                <br />I like to be in constant learning and to be updated in the
                technologies that I use.
                <br />
                <br /> Technology has always caught my attention, since I was
                very young it has been a great passion, <br />
                <br /> I like to be committed y responsible with the tasks that
                are entrusted to me and achieve the goals effectively and
                efficiently, I consider myself a person who adapts to teamwork
                and who likes to give his contribution, opinion and add to a
                work team
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
