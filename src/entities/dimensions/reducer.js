import { SET_SCREEN_DIMENSIONS } from "./constants";

const initialState = {
  width: 0,
  height: 0
};

const reducer = function dimensionsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SCREEN_DIMENSIONS:
      return {
        width: action.width,
        height: action.height
      };
    default:
      return state;
  }
};

export default reducer;
