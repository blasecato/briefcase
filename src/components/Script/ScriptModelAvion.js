import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import * as dat from "dat.gui";

//global variables
let currentMount = null;
// let object = null;
const gui = new dat.GUI();

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(25, 100 / 100, 0.1, 1000);
// camera.position.z = 5;
// camera.position.y = 0;
// camera.position.x = 0;
camera.position.z = 30;
camera.position.y = 30;
camera.position.x = 15;
scene.add(camera);

// torusKnot
const geometry1 = new THREE.TorusKnotGeometry(0.5, 0.18, 200, 16);
const material1 = new THREE.MeshNormalMaterial({
  // flatShading: true,
});
const torusKnot = new THREE.Mesh(geometry1, material1);
torusKnot.position.set(0, 0, 0);
torusKnot.scale.set(0.8, 0.8, 0.8);
// scene.add(torusKnot);

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
    scene.add(gltf.scene);
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

//Cube

const A0 = new THREE.AmbientLight(0xffffff, 0.4);
const pointLight = new THREE.PointLight(0xffffff, 1.3);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.4);
directionalLight.position.set(5, 5, 5);
pointLight.position.y = 5;

scene.add(A0);
scene.add(directionalLight);

const animate = () => {
  controls.update();
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
};
animate();

//Mount scene
export const mountSceneAvion = (mountRef) => {
  currentMount = mountRef.current;
  resize();
  currentMount.appendChild(renderer.domElement);
};
//celan up scene
export const cleanUpSeceneAvion = () => {
  // scene.dispose();
  gui.destroy();
  currentMount.removeChild(renderer.domElement);
};
