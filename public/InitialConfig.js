import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as Three from "three";

// Scene
const scene = new Three.Scene();

// Background
scene.background = new Three.Color(0xa1c6f8);

// Camera
const aspectRatio = window.innerWidth / window.innerHeight;
const camera = new Three.PerspectiveCamera(75, aspectRatio, 1, 5000);
camera.position.set(0, 50, 20);
camera.rotation.set(0, 0, 0);
camera.lookAt(0, 50, 20);

scene.add(camera);

const canvas = document.querySelector("#bg");
const renderer = new Three.WebGLRenderer({ canvas, antialias: true });
renderer.toneMapping = Three.ReinhardToneMapping;
renderer.toneMappingExposure = 2.3;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = Three.PCFShadowMap;
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

// Lights
const hemiLight = new Three.HemisphereLight(0xa1c6f8, 0x34a0a4, 1);
hemiLight.position.set(0, 5, 5);
scene.add(hemiLight);
const light = new Three.PointLight(0xffffff, 1, 50, 2);
light.castShadow = true;
light.shadow.camera.near = 2;
light.shadow.camera.far = 10;
light.name = "cameralight";
camera.add(light);
// scene.add(light);

// Debug
/* scene.add(new Three.AxesHelper(500));
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25; */

// Resize
window.addEventListener(
  "resize",
  () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  },
  false
);

export { scene, camera, renderer };
