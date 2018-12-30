import { ADD_TODO, FETCH_TODOS_FINISHED, TOGGLE_TODO } from "./constants";

import Log from "Log";

const initState = [];

export default (state = initState, action) => {
  Log.info(action, "Todo reducer");
  switch (action.type) {
    case FETCH_TODOS_FINISHED:
      return [action.todos];
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      return state.map((todo, id) => {
        if (id === action.id) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          });
        }
        return todo;
      })

    default:
      return initState;
  }
};
