import * as AirBalloonJson from "./models/balloon/balloon.json";
import * as Cloud1Json from "./models/clouds/cloud1.json";
import * as Cloud2Json from "./models/clouds/cloud2.json";
import * as Cloud3Json from "./models/clouds/cloud3.json";
import * as Cloud4Json from "./models/clouds/cloud4.json";
import * as Cloud5Json from "./models/clouds/cloud5.json";
import * as Cloud6Json from "./models/clouds/cloud6.json";
import * as Cloud7Json from "./models/clouds/cloud7.json";
import * as Cloud8Json from "./models/clouds/cloud8.json";

const JsonModels = {
  balloon: AirBalloonJson,
  cloud: [Cloud1Json, Cloud2Json, Cloud3Json, Cloud4Json, Cloud5Json, Cloud6Json, Cloud7Json, Cloud8Json],
};

const ModelPaths = {
  airplane: { path: "./public/models/smallplane/scene.gltf" },
  screen: { path: "./public/models/screen/scene.gltf" },
  graduation: { path: "./public/models/graduation/scene.gltf" },
  cursor: { path: "./public/models/cursor/scene.gltf" },
  cursorhand: { path: "./public/models/cursorhand/scene.gltf" },
  university: { path: "./public/models/university/scene.gltf" },
  city: { path: "./public/models/city/scene.gltf" },
};

const camLocs = {
  camLoc1: { cords: { x: 0, y: 10, z: 10 }, rots: { x: 0, y: 0, z: 0 } },
  camLoc2: { cords: { x: -3.801, y: -5, z: 7.654 }, rots: { x: 0.09, y: -0.459, z: 0 } },
  camLoc3: { cords: { x: -12.707, y: -45.306, z: -36.62 }, rots: { x: -1.647, y: 1.51, z: 1.658 } },
  camLoc4: { cords: { x: -2.381, y: 3.37, z: 5.323 }, rots: { x: -1.008, y: -0.972, z: -0.919 } },
  camLoc5: { cords: { x: 6.307, y: -0.416, z: 7.092 }, rots: { x: 0.059, y: 0.726, z: -0.039 } },
  camLoc6: { cords: { x: 5.959, y: 0.285, z: -0.509 }, rots: { x: -2.631, y: 1.473, z: 2.633 } },
  camLoc7: { cords: { x: -0.413, y: 5.264, z: -6.755 }, rots: { x: -2.48, y: -0.048, z: -3.104 } },
  camLoc8: { cords: { x: -1.125, y: 12.875, z: 0.026 }, rots: { x: -1.569, y: -0.087, z: -1.548 } },
  camLoc9: { cords: { x: 0, y: 50, z: 20 }, rots: { x: 0, y: 0, z: 0 } },
};

const bodyContents = {
  content1: `<div class="center">
        <h1 class="content"><p class="contentText">Toda mi vida he sido un apasionado por la informática, me gusta investigar y conocer nuevas tecnologias y productos.</p></h1>
        </div>`,
  content2: `<div class="center">
        <h1 class="content"><p class="contentText">En 2021 me gradue como Ingeniero Civil en Informática de la UdeC. Si bien la carrera me ha aportado bastante, me he interiorisado más por mi cuenta en el desarrollo backend</p></h1>
      </div>`,
  content3: `<div class="center">
        <h1 class="content"><p class="contentText">Durante el transcurso de mi carrera me desempeñe como profesor ayudante en las asignaturas de Análisis de Algoritmos y Proyecto de Aplicaciones Móviles, </p></h1>
      </div>`,
  content4: `<div class="center">
  <p>recuerda traer tu pase de movilidad debidamente habilitado y cumplir con los protocolos establecidos por las autoridades 😷</p>
      </div>`,
  content5: `<div class="center">
  <p>La celebración será en la casita de Hualpen 🏡</p>
      </div>`,
  content6: `<div class="center">
        <h2>Y recuerda mostrar respeto ante las bendiciones! 🐈🐈</h2>
        <p>pintas y tin</p>
      </div>`,
  content7: `<div class="center">
        <h2>Habrá pastel!</h2>
        <p>juegos, silla musical, pirotecnia, fornai, frifai y mucho más </p>
      </div>`,
  content8: `<div class="center">
        <h2>No faltes 😎</h2>
        <br>
        <br>
        <h2>Creado con ThreeJS sobre Vite!</h2>
        <h2>Modelos de <a href="sketchfab.com">sketchfab.com</a></h2>
        <h2>Repositorio <a href="https://github.com/AmigoManuel/NelSpookyParty">NelSpookyParty</a></h2>
      </div>`,
  content9: `<div class="center">
        <h1 class="bigyikes"><span class="yikes">Bien</span><span class="yikes">venida!</span></h1>
        <h1 class="content"><p class="contentText">Mi nombre es Manuel Diaz, en este espacio llevo registro de mi desarrollo academico, profesional, mis motivaciones y mis aficiones.</p></h1>
        </div>`,
};

export { ModelPaths, JsonModels, bodyContents, camLocs };
