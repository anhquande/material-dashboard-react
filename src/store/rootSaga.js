//REDUX SAGA
import { all, fork } from "redux-saga/effects";
//SAGAS
import fetchTodosWatcher from "../entities/todo/saga";

import Log from "../Log";

export default function* rootSaga() {
  Log.info("rootSaga is called");
  yield all([fork(fetchTodosWatcher)]);
}
