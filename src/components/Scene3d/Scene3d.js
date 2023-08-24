import { cleanUpSecene, mountScene } from "components/Script/ScriptModel";
import React, { useEffect, useRef } from "react";

const Scene3d = () => {
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
      className="content3d"
      ref={mountRef}
      style={{ width: "100%", height: "500px" }}></div>
  );
};

export default Scene3d;
