import * as THREE from "three";
import * as dat from "dat.gui";

//LOading
const textureLoader = new THREE.TextureLoader();
// const mapMind = textureLoader.load("./textures/earth.jpg");
const mapMind = textureLoader.load("./textures/earth2.jpg");
// const map = textureLoader.load("./brick/Wall_Stone_010_basecolor.jpg");
// const aoMap = textureLoader.load("./brick/Wall_Stone_010_ambientOcclusion.jpg");
// const roughnessMap = textureLoader.load("./brick/Wall_Stone_010_roughness.jpg");
const normalMap = textureLoader.load("./textures/norEarth.jpg");
// const heightMap = textureLoader.load("./brick/Wall_Stone_010_height.png");

//global variables
let currentMount = null;
const gui = new dat.GUI();

//scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(25, 100 / 100, 0.1, 1000);
camera.position.z = 5;
camera.position.y = 0;
camera.position.x = 0;
scene.add(camera);

// sphere
const geometry = new THREE.SphereGeometry(0.7, 28, 89);
const material = new THREE.MeshStandardMaterial();
material.map = mapMind;
material.normalMap = normalMap;
material.metalness = 0.3;
material.roughness = 0.1;
// const material = new THREE.MeshMatcapMaterial({
//   matcap: matcap,
// });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);
sphere.position.y = 0;
sphere.scale.y = 1.3;
sphere.scale.x = 1.3;
sphere.scale.z = 1.3;

//Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0x000000, 0);
// renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);

// controls

//Resize
const resize = () => {
  renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
  camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
  camera.updateProjectionMatrix();
};
window.addEventListener("resize", resize);

//Lights
const A0 = new THREE.AmbientLight(0xffffff, 1);
const pointLight = new THREE.PointLight(0xffffff, 0.1);
pointLight.position.set(2, 3, 4);

const pointLight2 = new THREE.PointLight(0xff0000, 2);
pointLight2.position.set(1, 1, 1);
pointLight2.intensity = 1;

const pointLight3 = new THREE.PointLight(0xe1ff, 2);
pointLight3.position.set(-2.13, -5, -5.98);
pointLight3.intensity = 1;

scene.add(A0);
// scene.add(pointLight);
// scene.add(pointLight2);
// scene.add(pointLight3);

const clock = new THREE.Clock();

document.addEventListener("mousemove", onDocumentMauseMove);
let mouseX = 0;
let mouseY = 0;

let targetX = 0;
let targetY = 0;

const windowX = window.innerWidth / 2;
const windowY = window.innerHeight / 2;

function onDocumentMauseMove(event) {
  mouseX = event.clientX - windowX;
  mouseY = event.clientY - windowY;
}

const animate = () => {
  targetX = mouseX * 0.001;
  targetY = mouseY * 0.001;
  const elapsedTime = clock.getElapsedTime();
  requestAnimationFrame(animate);

  // sphere.rotation.x += 0.01;
  // sphere.rotation.y += 0.001;
  sphere.rotation.y = 0.3 * elapsedTime;

  sphere.rotation.y += 0.5 * (targetX - sphere.rotation.y);
  sphere.rotation.x += 0.05 * (targetY - sphere.rotation.x);
  sphere.position.z += -0.05 * (targetY - sphere.rotation.x);
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
