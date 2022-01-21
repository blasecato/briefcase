import React from "react";
import Answer from "../../assets/images/Answer.png";

const About = () => {
  return (
    <div className="About-me">
      <div className="container">
        <h1 className="title">About Me</h1>
        <div className="container__box">
          <div className="container__box__img">
            <img src={Answer} alt="Answer" className="Answer" />
          </div>
          <div className="container__box__content">
            <div className="circle"></div>
            <div className="circle-two"></div>
            <div className="card">
              <p>
                Hi i'm Blas Sebastian Calderon Torres, a self-taught front-end developer highly
                passionate and professional.
                <br /><br />
                My passion has always been software development, but above all,
                that it has an attractive design, that hooks whoever uses it and
                that makes your experience an unforgettable memory.
                <br /><br />
                If you are interested in working with me or hiring me, you can
                contact me through my email or my social networks.
                <br /><br />
                I'm excited that we create the applications of the future!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
