import { loadGLTFModel } from "./Utils";
import { ModelPaths, JsonModels } from "./Constants";
import * as THREE from "three";

class Model {
  constructor(scene, [x, y, z], [rx, ry, rz], scale) {
    this.scene = scene;
    this.initPos = { x, y, z };
    this.initRot = { rx, ry, rz };
    this.scale = scale;
    this.speed = { x: 0.0015, y: 0.0015 };
    this.multiplier = { x: 1, y: 1, rot: 1 };
  }

  async init() {
    await this._loadModel().then((model) => (this.model = model));
    this.model.position.set(this.initPos.x, this.initPos.y, this.initPos.z);
    this.model.rotation.set(this.initRot.rx, this.initRot.ry, this.initRot.rz);
    this.model.scale.set(this.scale, this.scale, this.scale);
  }

  async _loadModel() {
    return await loadGLTFModel(this.path, this.scene);
  }
}

class University extends Model {
  constructor(scene, [x, y, z], [rx, ry, rz], scale) {
    super(scene, [x, y, z], [rx, ry, rz], scale);
    this.path = ModelPaths.university.path;
  }
}
class City extends Model {
  constructor(scene, [x, y, z], [rx, ry, rz], scale) {
    super(scene, [x, y, z], [rx, ry, rz], scale);
    this.path = ModelPaths.city.path;
  }
}

class Cursor extends Model {
  constructor(scene, [x, y, z], [rx, ry, rz], scale) {
    super(scene, [x, y, z], [rx, ry, rz], scale);
    this.path = ModelPaths.cursor.path;
    this.speed = { x: 0.05, y: 0.015, rot: 0.002 };
  }

  animation() {
    if (Math.abs(this.model.position.x - this.initPos.x) > 4) this.multiplier.x *= -1;
    if (Math.abs(this.model.position.y - this.initPos.y) > 3) this.multiplier.y *= -1;
    this.model.position.x += this.speed.x * this.multiplier.x;
    this.model.position.y += this.speed.y * this.multiplier.y;
  }
}

class CursorHand extends Model {
  constructor(scene, [x, y, z], [rx, ry, rz], scale) {
    super(scene, [x, y, z], [rx, ry, rz], scale);
    this.path = ModelPaths.cursorhand.path;
    this.speed = { x: 0.015, y: 0.015, rot: 0.002 };
  }

  animation() {
    if (Math.abs(this.model.position.x - this.initPos.x) > 4) this.multiplier.x *= -1;
    if (Math.abs(this.model.position.y - this.initPos.y) > 3) this.multiplier.y *= -1;
    this.model.position.x -= this.speed.x * this.multiplier.x;
    this.model.position.y -= this.speed.y * this.multiplier.y;
  }
}

class Graduation extends Model {
  constructor(scene, [x, y, z], [rx, ry, rz], scale) {
    super(scene, [x, y, z], [rx, ry, rz], scale);
    this.path = ModelPaths.graduation.path;
    this.speed = { x: 0.0015, y: 0.0015, rot: 0.002 };
  }

  animation() {
    this.model.rotation.y += this.speed.rot;
  }
}

class Computer extends Model {
  constructor(scene, [x, y, z], [rx, ry, rz], scale) {
    super(scene, [x, y, z], [rx, ry, rz], scale);
    this.path = ModelPaths.screen.path;
    this.speed = { x: 0.0015, y: 0.0015 };
  }

  animation() {
    if (Math.abs(this.model.rotation.z) - Math.abs(this.initRot.rz) > 0.2) this.multiplier.rot *= -1;
    this.model.rotation.z += 0.001 * this.multiplier.rot;
    this.model.rotation.x += 0.001 * this.multiplier.rot;
  }
}

class Airplane extends Model {
  constructor(scene, [x, y, z], [rx, ry, rz], scale) {
    super(scene, [x, y, z], [rx, ry, rz], scale);
    this.path = ModelPaths.airplane.path;
    this.speed = { x: 0.003, y: 0.003, rot: 0.002 };
  }

  animation() {
    if (Math.abs(this.model.position.x - this.initPos.x) > 0.2) this.multiplier.x *= -1;
    if (Math.abs(this.model.position.y - this.initPos.y) > 0.1) this.multiplier.y *= -1;
    if (Math.abs(this.model.rotation.z - this.initRot.rz) > 0.2) this.multiplier.rot *= -1;
    this.model.position.x += this.speed.x * this.multiplier.x;
    this.model.position.y += this.speed.y * this.multiplier.y;
    this.model.rotation.z += this.speed.rot * this.multiplier.rot;
  }
}

class Cloud extends Model {
  constructor(scene, [x, y, z], [rx, ry, rz], scale) {
    super(scene, [x, y, z], [rx, ry, rz], scale);
    this.speed = {
      x: Math.floor(Math.random() * (0.005 - 0.001 + 1)) + 0.001,
      y: Math.floor(Math.random() * (0.005 - 0.001 + 1)) + 0.001,
    };
  }

  init() {
    const random = Math.floor(Math.random() * JsonModels.cloud.length);
    this.model = new THREE.ObjectLoader().parse(JsonModels.cloud[random]);
    this.model.position.set(this.initPos.x, this.initPos.y, this.initPos.z);
    this.model.rotation.set(this.initRot.rx, this.initRot.ry, this.initRot.rz);
    this.scene.add(this.model);
  }

  animation() {
    if (Math.abs(this.model.position.x - this.initPos.x) > 0.2) this.multiplier.x *= -1;
    if (Math.abs(this.model.position.y - this.initPos.y) > 0.05) this.multiplier.y *= -1;
    this.model.position.x += this.speed.x * this.multiplier.x;
    this.model.position.y += this.speed.y * this.multiplier.y;
  }
}

class Balloon extends Model {
  constructor(scene, [x, y, z], [rx, ry, rz], scale) {
    super(scene, [x, y, z], [rx, ry, rz], scale);
    this.speed = { x: 0.003, y: 0.003, rot: 0.007 };
  }

  init() {
    this.model = new THREE.ObjectLoader().parse(JsonModels.balloon);
    this.model.position.set(this.initPos.x, this.initPos.y, this.initPos.z);
    this.model.rotation.set(this.initRot.rx, this.initRot.ry, this.initRot.rz);
    this.scene.add(this.model);
  }

  animation() {
    if (Math.abs(this.model.position.x - this.initPos.x) > 3) this.multiplier.x *= -1;
    if (Math.abs(this.model.position.y - this.initPos.y) > 2) this.multiplier.y *= -1;
    this.model.position.x += this.speed.x * this.multiplier.x;
    this.model.position.y += this.speed.y * this.multiplier.y;
    this.model.rotation.y += this.speed.rot;
  }
}

export { Airplane, Balloon, Cloud, Computer, Graduation, Cursor, CursorHand, University, City };
