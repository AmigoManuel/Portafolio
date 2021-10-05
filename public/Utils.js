import * as THREE from "three";
import * as Tween from "@tweenjs/tween.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// Cargar modelos gltf
const loadGLTFModel = async (path, scene, anim) => {
  const gltfLoader = new GLTFLoader();
  let result;
  await gltfLoader.loadAsync(path).then((gltf) => {
    result = gltf.scene;
    scene.add(gltf.scene);
  });
  return result;
};

/* const loadGLTFModel = async (path, scene, anim) => {
  const gltfLoader = new GLTFLoader();
  const obj = new Object();
  if (anim == null) anim = 0;
  gltfLoader.load(path, (gltf) => {
    const model = gltf.scene;
    const animations = gltf.animations;
    model.traverse((n) => {
      if (n.isMesh) {
        n.scale.set(1, 1, 1);
        n.castShadow = true;
        n.receiveShadow = true;
        if (n.material.map) {
          n.material.map.anisotropy = 16;
        }
      }
    });
    scene.add(model);
    const mixer = new THREE.AnimationMixer(model);
    if (animations.length > 0) {
      const action = mixer.clipAction(animations[anim]);
      action.play();
    }
    obj.model = model;
    obj.mixer = mixer;
  });
  return obj.model;
}; */

// Mover camara suavemente
const tweenCamera = (camera, dstCords, dstRots, bodyContent) => {
  const cords = { x: camera.position.x, y: camera.position.y, z: camera.position.z };
  const rots = { x: camera.rotation.x, y: camera.rotation.y, z: camera.rotation.z };
  new Tween.Tween(cords)
    .to(dstCords)
    .onUpdate(() => camera.position.set(cords.x, cords.y, cords.z))
    .onStart(() => textManager(" "))
    .onComplete(() => textManager(bodyContent))
    .start();
  new Tween.Tween(rots)
    .to(dstRots)
    .onUpdate(() => camera.rotation.set(rots.x, rots.y, rots.z))
    .start();
};

const textManager = (bodyContent) => {
  document.getElementById("textHolder").remove();
  let newDiv = document.createElement("div");
  newDiv.id = "textHolder";
  newDiv.innerHTML += bodyContent;
  document.getElementsByTagName("div")[0].appendChild(newDiv);
  //document.getElementById("textHolder").outerHTML = "";
};

export { tweenCamera, loadGLTFModel };
