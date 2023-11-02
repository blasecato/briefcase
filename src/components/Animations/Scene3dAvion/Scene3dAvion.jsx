import {
  cleanUpSeceneAvion,
  mountSceneAvion,
} from "components/Script/ScriptModelAvion";
import React, { useEffect, useRef } from "react";

const Scene3dAvion = () => {
  const mountRef = useRef(null);
  useEffect(() => {
    //init secene
    mountSceneAvion(mountRef);
    //celan up scene
    return () => {
      cleanUpSeceneAvion();
    };
  }, []);
  return (
    <div
      className="content3d"
      ref={mountRef}
      style={{ width: "100%", height: "500px" }}></div>
  );
};

export default Scene3dAvion;
