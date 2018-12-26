import { SET_API_HOST, CLEAR_API_HOST } from "./constants";

const initialState = {
  apiHost: null
};

const reducer = function apiHostReducer(state = initialState, action) {
  switch (action.type) {
    case SET_API_HOST:
      return {
        apiHost: action.apiHost
      };
    case CLEAR_API_HOST:
      return {
        apiHost: null
      };
    default:
      return state;
  }
};

export default reducer;
