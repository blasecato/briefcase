import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { Button } from "antd";
import dataExperience from "common/utils/dataExperience";
import prev from "assets/images/brand/arrow-prev.svg";
import next from "assets/images/brand/arrow-next.svg";

const Projects = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slider = useRef();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2.4,
    slidesToScroll: 1,
    className: "center",
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "60px",
    beforeChange: (current, next) => setActiveSlide(next),
  };
  const goToNext = () => {
    slider.current.slickNext();
  };
  const goToPrev = () => {
    slider.current.slickPrev();
  };
  return (
    <div className="Projects" data-aos="fade-up">
      <div className="container">
        <h1 className="title-effect" data-text="WORK EXPERIENCE.">
          WORK EXPERIENCE.
        </h1>
        <div className="Projects__content">
          <div className="box-information" data-aos="fade-up-right">
            <div className="body">
              {dataExperience?.map((item, index) => (
                <div key={index}>
                  {activeSlide === item.id && (
                    <>
                      <div className="animate__animated animate__fadeIn">
                        <div className="cont-title">
                          <h2>{item.name}</h2>
                        </div>
                        <div className="divider" />
                        <p>{item.desciption}</p>
                        <div className="rol">
                          <span>{item.rol}</span>
                        </div>
                      </div>
                      {item.link && (
                        <div className="animate__animated animate__fadeIn">
                          <a
                            className="link"
                            target="_blank"
                            rel="noopener noreferrer"
                            href={`${item.link}`}>
                            <div className="demo">Demo</div>
                          </a>
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="box" data-aos="fade-up-left">
            <Slider ref={slider} {...settings}>
              {dataExperience?.map((item, index) => (
                <div key={index} className="Projects__content--card">
                  <div className="head">
                    <img
                      src={item.image}
                      className="project-image"
                      alt="project"
                    />
                  </div>
                </div>
              ))}
            </Slider>
            <Button onClick={() => goToNext()} className="arrow arrow-next">
              <img src={next} className="img-logo" alt="next" />
            </Button>
            <Button onClick={() => goToPrev()} className="arrow arrow-prev">
              <img src={prev} className="img-logo" alt="prev" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
