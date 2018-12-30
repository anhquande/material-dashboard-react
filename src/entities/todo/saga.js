//REDUX SAGA
import { call, fork, put, take } from "redux-saga/effects";
//CONSTANTS
import { FETCH_TODOS } from "./constants";
import {
  fetchTodosStarted,
  fetchTodosFinished,
  fetchTodosFailed
} from "./actions";

import Log from "../../Log";

//ACTIONS

function apiFetchTodos(filter) {
  Log.info("sag apiFetchTodos", filter);
  return fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "GET"
  })
    .then(response => response.json())
    .catch(error => error);
}

function* fetchTodosFlow() {
  try {
    yield put(fetchTodosStarted());
    const response = yield call(apiFetchTodos, "all");
    console.log("response: ",response);
    yield put(fetchTodosFinished(response));
  } catch (error) {
    yield put(fetchTodosFailed(-1, error));
  }
}

const fetchTodosWatcher = function* fetchTodosWatcher() {
  while (true) {
    Log.info("fetchTodoWatchers");
    yield take(FETCH_TODOS);
    Log.info("FETCH_TODOS is catched");
    yield fork(fetchTodosFlow);
  }
};

export default fetchTodosWatcher;
