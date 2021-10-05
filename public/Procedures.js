import { tweenCamera } from "./Utils";
import { camLocs, bodyContents } from "./Constants";

// Saltos de camara según click
const clickCounter = (camera, iteration) => {
  switch (iteration) {
    case 2:
      tweenCamera(camera, camLocs.camLoc1.cords, camLocs.camLoc1.rots, bodyContents.content1);
      break;
    case 3:
      tweenCamera(camera, camLocs.camLoc2.cords, camLocs.camLoc2.rots, bodyContents.content2);
      break;
    case 4:
      tweenCamera(camera, camLocs.camLoc3.cords, camLocs.camLoc3.rots, bodyContents.content3);
      break;
    case 5:
      tweenCamera(camera, camLocs.camLoc4.cords, camLocs.camLoc4.rots, bodyContents.content4);
      break;
    case 6:
      tweenCamera(camera, camLocs.camLoc5.cords, camLocs.camLoc5.rots, bodyContents.content5);
      break;
    case 7:
      tweenCamera(camera, camLocs.camLoc6.cords, camLocs.camLoc6.rots, bodyContents.content6);
      break;
    case 8:
      tweenCamera(camera, camLocs.camLoc7.cords, camLocs.camLoc7.rots, bodyContents.content7);
      break;
    case 9:
      tweenCamera(camera, camLocs.camLoc8.cords, camLocs.camLoc8.rots, bodyContents.content8);
      break;
    default:
      tweenCamera(camera, camLocs.camLoc9.cords, camLocs.camLoc9.rots, bodyContents.content9);
      break;
  }
};

const cameraProcedure = (camera) => {
  // Desplazamiento inicial
  let iteration = 1;
  clickCounter(camera, iteration);
  // Listener de clicks
  document.onmousedown = () => {
    if (iteration == 9) iteration = 0;
    iteration += 1;
    clickCounter(camera, iteration);
  };
};

export { cameraProcedure };
