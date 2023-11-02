import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import * as dat from "dat.gui";

//global variables
let currentMount = null;
// let object = null;
const gui = new dat.GUI();

// const objetos3D = {
//   cubos: 2,
//   esferas: {
//     rojas: {
//       small: 2,
//     },
//   },
// };
// gui
//   .add(objetos3D, "cubos")
//   .min(1)
//   .max(10)
//   .step(0.000001)
//   .name("no. cubes")
//   .onChange(() => {
//     console.log(objetos3D.cubos);
//   });
//   gui.add(objetos3D.esferas.rojas, "small")
//scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(25, 100 / 100, 0.1, 1000);
camera.position.z = 5;
camera.position.y = 0;
camera.position.x = 0;
// camera.position.z = 25;
// camera.position.y = 20;
// camera.position.x = 30;
scene.add(camera);

// sphere
// const textureLoader = new THREE.TextureLoader();
// const matcap = textureLoader.load("./textures/matcap1.png");
// const geometry = new THREE.SphereGeometry(0.6, 22, 16);
// // const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
// const material = new THREE.MeshMatcapMaterial({
//   matcap: matcap,
// });
// const sphere = new THREE.Mesh(geometry, material);
// scene.add(sphere);
// sphere.position.y = 1.5;

// torusKnot
const geometry1 = new THREE.TorusKnotGeometry(0.5, 0.18, 200, 16);
const material1 = new THREE.MeshNormalMaterial({
  // flatShading: true,
});
const torusKnot = new THREE.Mesh(geometry1, material1);
torusKnot.position.set(0, 0, 0);
torusKnot.scale.set(0.8, 0.8, 0.8);
// scene.add(torusKnot);

// const material = new THREE.MeshBasicMaterial({
//   // color: 0xff0000,
//   // transparent: true,
//   // opacity: 0.3,
//   // wireframe: true,
// });

//Renderer
const renderer = new THREE.WebGL1Renderer();
renderer.setClearColor(0x000000, 0);
// renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);

// controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.target = new THREE.Vector3(0, 0, 0);
controls.enableDamping = true;
controls.enableZoom = false;
//Resize
const resize = () => {
  renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
  camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
  camera.updateProjectionMatrix();
};
window.addEventListener("resize", resize);

//loader Avion
const dracoLoader = new DRACOLoader();
const gltfLoader = new GLTFLoader();
// const stlLoader = new STLLoader();
gltfLoader.setDRACOLoader(dracoLoader);
gltfLoader.load(
  "./model/F-16D.gltf",
  //onload
  (gltf) => {
    // scene.add(gltf.scene);
    // object = new THREE.Mesh(
    //   gltf,
    //   new THREE.MeshLambertMaterial({ color: 0x00ff00 })
    // );
    // object.scale.set(3, 3, 3);
    // object.position.set(0, 0, 0);
  },
  //progress
  () => {},
  //error
  () => {}
);
// textures
const textureLoader = new THREE.TextureLoader();
const mapMind = textureLoader.load("./textures/anime1.webp");
// const map = textureLoader.load("./brick/Wall_Stone_010_basecolor.jpg");
// const aoMap = textureLoader.load("./brick/Wall_Stone_010_ambientOcclusion.jpg");
// const roughnessMap = textureLoader.load("./brick/Wall_Stone_010_roughness.jpg");
// const normalMap = textureLoader.load("./brick/Wall_Stone_010_normal.jpg");
// const heightMap = textureLoader.load("./brick/Wall_Stone_010_height.png");

//Cube
const geometry = new THREE.BoxBufferGeometry();
const material = new THREE.MeshStandardMaterial({
  map: mapMind,
  aoMap: mapMind,
  roughnessMap: mapMind,
  normalMap: mapMind,
  // roughnessMap: roughnessMap,
  // normalMap: normalMap,
  // displacementMap: heightMap,
  // displacementScale: 0.05,
  // wireframe: true,
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// //controles del cubo
// const positions = gui.addFolder("Positions");
// positions.add(cube.position, "x").min(-10).max(10).step(0.5).name("post x");
// positions.add(cube.position, "y").min(-10).max(10).step(0.5).name("post y");
// positions.add(cube.position, "z").min(-10).max(10).step(0.5).name("post z");

// const scales = gui.addFolder("Scales");
// const cubeAux = { scale: 1, color: 0xffffff };
// scales
//   .add(cubeAux, "scale", {
//     small: 1,
//     medium: 2,
//     big: 3,
//   })
//   .name("scale")
//   .onChange(() => {
//     cube.scale.set(cubeAux.scale, cubeAux.scale, cubeAux.scale);
//   });
// scales.add(cube.scale, "x", { Small: 1, Medium: 2, Big: 3 }).name("scale x");
// scales.add(cube.scale, "y").min(-10).max(10).step(0.5).name("scale y");
// scales.add(cube.scale, "z").min(-10).max(10).step(0.5).name("scale z");

// const colors = gui.addFolder("Colors");
// colors.addColor(cubeAux, "color").onChange(() => {
//   cube.material.color.set(cubeAux.color);
// });

//Lights
const A0 = new THREE.AmbientLight(0xffffff, 0.4);
const pointLight = new THREE.PointLight(0xffffff, 1.3);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.4);
directionalLight.position.set(5, 5, 5);
pointLight.position.y = 5;

// const enviromentMap = new THREE.CubeTextureLoader();
// const envMap = enviromentMap.load([
//   "./envMap/px.png",
//   "./envMap/nx.png",
//   "./envMap/py.png",
//   "./envMap/ny.png",
//   "./envMap/pz.png",
//   "./envMap/nz.png",
// ]);
// scene.environment = envMap;
// scene.background = envMap;
scene.add(A0);
scene.add(directionalLight);

//Renderer the scene
const animate = () => {
  controls.update();
  requestAnimationFrame(animate);

  cube.rotation.x += 0.001;
  cube.rotation.y += 0.001;
  renderer.render(scene, camera);
};
animate();

//Mount scene
export const mountScene = (mountRef) => {
  currentMount = mountRef.current;
  resize();
  currentMount.appendChild(renderer.domElement);
};
//celan up scene
export const cleanUpSecene = () => {
  // scene.dispose();
  gui.destroy();
  currentMount.removeChild(renderer.domElement);
};
