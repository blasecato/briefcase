import { cleanUpSecene, mountScene } from "components/Script/ScriptModelSphere";
import React, { useEffect, useRef } from "react";

const Scene3dSphere = () => {
  const mountRef = useRef(null);
  useEffect(() => {
    //init secene
    mountScene(mountRef);
    //celan up scene
    return () => {
      cleanUpSecene();
    };
  }, []);
  return (
    <div
      className=""
      ref={mountRef}
      style={{ width: "100%", height: "500px" }}></div>
  );
};

export default Scene3dSphere;
