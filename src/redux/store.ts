import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import { todosReducer } from "./reducers";

const sagaMiddleware = createSagaMiddleware();
function* rootSaga() {
  yield all([]);
}

const store = createStore(
  combineReducers({
    todos: todosReducer,
  }),
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

const handleChange = () => {
  localStorage.setItem("localState", JSON.stringify(store.getState()));
};

store.subscribe(() => handleChange());

export default store;
