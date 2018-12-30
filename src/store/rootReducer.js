//REDUX
import { combineReducers } from "redux";
//REDUCER

//ENTITIES
import tokenReducer from "../entities/token/reducer";
import apiHostReducer from "../entities/apiHost/reducer";
import dimensionsReducer from "../entities/dimensions/reducer";
import todoReducer from "../entities/todo/reducer";

export const rootReducer = combineReducers({
  //ENTITIES
  tokenReducer,
  apiHostReducer,
  dimensionsReducer,
  todoReducer
});
