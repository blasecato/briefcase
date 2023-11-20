import React from "react";
import { dummyCardsSkills, dummyCardsSkills2 } from "common/utils/skills";
import reactNative from "assets/images/brand/reactNative.png";
import Scene3dAvion from "components/Animations/Scene3dAvion/Scene3dAvion";
import Scene3dSphere from "components/Animations/Scene3dSphere/Scene3dSphere";

const Skills = () => {
  return (
    <div className="Skills" id="skills">
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
