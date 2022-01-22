import React, { useRef, useState } from "react";
import { Button } from "antd";
import Slider from "react-slick";
import css from "../../assets/images/brand/css.png";
import html from "../../assets/images/brand/html.png";
import js from "../../assets/images/brand/js.png";
import postgresql from "../../assets/images/brand/postgresql.png";
import reactNative from "../../assets/images/brand/reactNative.png";
import sass from "../../assets/images/brand/sass.png";
import wordpres from "../../assets/images/brand/wordpres.png";
import redux from "../../assets/images/brand/redux.png";
import prev from "../../assets/images/brand/arrow-prev.svg";
import next from "../../assets/images/brand/arrow-next.svg";

const Skills = () => {
  const slider = useRef();
  const [activeSlide, setActiveSlide] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    beforeChange: (current, next) => setActiveSlide(next),
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 784,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 584,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };
  const dummyCardsSkills = [
    { id: 1, name: "css", image: css },
    { id: 2, name: "html", image: html },
    { id: 3, name: "js", image: js },
    { id: 4, name: "postgresql", image: postgresql },
    { id: 5, name: "reactNative", image: reactNative },
    { id: 6, name: "sass", image: sass },
    { id: 7, name: "wordpres", image: wordpres },
    { id: 8, name: "redux", image: redux },
  ];
  const goToNext = () => {
    slider.current.slickNext();
  };
  const goToPrev = () => {
    slider.current.slickPrev();
  };
  return (
    <div className="Skills">
      <div className="container">
        <h1 className="title">Skills</h1>
        <div className="content">
          <div className="content-brand">
            <Slider ref={slider} {...settings}>
              {dummyCardsSkills?.map((item, index) => (
                <div className={`brand`}>
                  <img src={item.image} className="brand-image" alt="brand" />
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

export default Skills;
