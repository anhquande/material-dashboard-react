import { createStore, applyMiddleware } from "redux";

import { rootReducer } from "./rootReducer";

import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const sagaMiddleware = createSagaMiddleware();

const pReducer = persistReducer(
  {
    key: "root",
    storage: storage
  },
  rootReducer
);

const store = createStore(pReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export {store, persistor};
