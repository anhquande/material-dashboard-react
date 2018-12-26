import { CLEAR_TOKEN, SET_TOKEN } from "./constants";

const initialState = {
  token: null
};

const reducer = function tokenReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TOKEN:
      return {
        token: action.token
      };
    case CLEAR_TOKEN:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
