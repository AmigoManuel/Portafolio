import "./style.css";
import * as Tween from "@tweenjs/tween.js";
import { camera, scene, renderer } from "./public/InitialConfig";
import * as Models from "./public/Models";
import { cameraProcedure } from "./public/Procedures";

const plane = new Models.Airplane(
  scene,
  [0 + window.innerWidth * 0.01, 50 - window.innerHeight * 0.01, 0],
  [0, -1.5, 0],
  1
);
await plane.init();
const balloon = new Models.Balloon(
  scene,
  [0 - window.innerWidth * 0.01, 50 - window.innerHeight * 0.01, -1],
  [0, 0, 0],
  1
);
balloon.init();
const computer = new Models.Computer(scene, [0, 10 - window.innerHeight * 0.006, -2], [0, 0, 0], 0.01);
await computer.init();
const cursor = new Models.Cursor(scene, [0, 10, 0], [1.5, 0, 0], 0.2);
await cursor.init();
const cursorhand = new Models.CursorHand(scene, [0, 10, 0], [0, 0, 0], 0.0007);
await cursorhand.init();
const graduation = new Models.Graduation(scene, [0, -9 + window.innerHeight * 0.0007, 0], [0, 0, 0], 1.5);
await graduation.init();
const city = new Models.City(scene, [0, -50, 0], [0, 0, 0], 0.005);
await city.init();
const university = new Models.University(scene, [-25.707, -49.306, -37.062], [0, 0, 0], 0.35);
await university.init();

// Clouds
const topClouds = Array.from({ length: 50 }, () => {
  const cloud = new Models.Cloud(
    scene,
    [Math.random() * (50 - -50) + -50, Math.random() * (40 - 30) + 30, Math.random() * (-10 - 0) + 0],
    [0, 0, 0],
    1
  );
  cloud.speed = {
    x: Math.floor(Math.random() * (0.001 - 0.005 + 1)) + 0.005,
    y: Math.floor(Math.random() * (0.001 - 0.0005 + 1)) + 0.0005,
    rot: 0,
  };
  cloud.init();
  return cloud;
});

const middleClouds = Array.from({ length: 50 }, () => {
  const cloud = new Models.Cloud(
    scene,
    [Math.random() * (50 - -50) + -50, Math.random() * (1 - -1) + 1, Math.random() * (-10 - 0) + 0],
    [0, 0, 0],
    1
  );
  cloud.speed = {
    x: Math.floor(Math.random() * (0.001 - 0.005 + 1)) + 0.005,
    y: Math.floor(Math.random() * (0.001 - 0.0005 + 1)) + 0.0005,
    rot: 0,
  };
  cloud.init();
  return cloud;
});

cameraProcedure(camera);

/* document.onmousedown = () => {
  console.log(
    "x:",
    camera.position.x.toFixed(3),
    ",y:",
    camera.position.y.toFixed(3),
    ",z:",
    camera.position.z.toFixed(3)
  );
  console.log(
    "x:",
    camera.rotation.x.toFixed(3),
    ",y:",
    camera.rotation.y.toFixed(3),
    ",z:",
    camera.rotation.z.toFixed(3)
  );
}; */

const animate = (time) => {
  requestAnimationFrame(animate);

  plane.animation();
  balloon.animation();
  computer.animation();
  graduation.animation();
  topClouds.forEach((cloud) => {
    cloud.animation();
    if (cloud.model.position.x < -50) {
      cloud.model.position.x = 50;
    }
    cloud.model.position.x -= cloud.speed.x * 2;
  });
  middleClouds.forEach((cloud) => {
    cloud.animation();
    if (cloud.model.position.x < -50) {
      cloud.model.position.x = 50;
    }
    cloud.model.position.x -= cloud.speed.x * 2;
  });
  cursor.animation();
  cursorhand.animation();

  renderer.render(scene, camera);
  Tween.update(time);
};

animate();
