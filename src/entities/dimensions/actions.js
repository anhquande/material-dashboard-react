import { SET_SCREEN_DIMENSIONS } from "./constants";

export function setScreenDimensions(width, height) {
  return {
    type: SET_SCREEN_DIMENSIONS,
    width,
    height
  };
}
