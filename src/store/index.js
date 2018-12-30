import { createStore, applyMiddleware } from "redux";

import { rootReducer } from "./rootReducer";

import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import logger from "redux-logger";

const sagaMiddleware = createSagaMiddleware();

const pReducer = persistReducer(
  {
    key: "root",
    storage: storage
  },
  rootReducer
);

const store = createStore(pReducer, applyMiddleware(logger, sagaMiddleware));

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

window.store = store;
export { store, persistor };
