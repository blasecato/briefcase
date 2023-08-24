import React from "react";
import css from "assets/images/brand/css.png";
import html from "assets/images/brand/html.png";
import js from "assets/images/brand/js.png";
import postgresql from "assets/images/brand/postgresql.png";
import three from "assets/images/brand/three.png";
import gatsby from "assets/images/brand/gatsby.png";
// import angular from "assets/images/brand/AngularJS.svg";
import next from "assets/images/brand/next.webp";
import reactNative from "assets/images/brand/reactNative.png";
import sass from "assets/images/brand/sass.png";
import wordpres from "assets/images/brand/wordpres.png";
import redux from "assets/images/brand/redux.png";
import reactNativ from "assets/images/brand/RN.png";
import Scene3dAvion from "components/Scene3dAvion/Scene3dAvion";
import Scene3dSphere from "components/Scene3dSphere/Scene3dSphere";

// ts, RRouter,git,node,

const Skills = () => {
  const dummyCardsSkills = [
    { id: 1, name: "css", image: css },
    { id: 2, name: "html", image: html },
    { id: 3, name: "js", image: js },
    { id: 4, name: "Next", image: next },
    { id: 5, name: "reactNative", image: reactNativ },
    { id: 6, name: "sass", image: sass },
    { id: 7, name: "wordpres", image: wordpres },
    { id: 8, name: "redux", image: redux },
  ];
  const dummyCardsSkills2 = [
    { id: 1, name: "post", image: postgresql },
    { id: 2, name: "three", image: three },
    { id: 3, name: "GATSBY", image: gatsby },
  ];
  return (
    <div className="Skills">
      <div className="container">
        <h1 className="title-effect" data-text="MY TECH STACK.">
          MY TECH STACK.
        </h1>
        <div className="content">
          <div className="brands">
            <div className="slidercircle">
              <div className="circle-one">
                <div className="circle-arround-one"></div>
              </div>
              <div className="circle-two">
                {dummyCardsSkills?.map((skill) => (
                  <div key={skill.id}>
                    <div className={`circle-arround-two-${skill.id} anima`}>
                      <img src={skill.image} alt="icon" className="icon" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="circle-middle">
                <img src={reactNative} className="react" alt="center" />
              </div>
            </div>
          </div>
          <div className="threeD">
            <div className="scenes3D">
              <div className="back">
                <Scene3dSphere />
              </div>
              <div className="front">
                <Scene3dAvion />
              </div>
            </div>
            <div className="brands-list">
              {dummyCardsSkills2?.map((skill) => (
                <img
                  key={skill.id}
                  src={skill.image}
                  alt="img"
                  className="image"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
