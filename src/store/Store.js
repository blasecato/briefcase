/* eslint-disable import/no-anonymous-default-export */
import { logger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware } from "connected-react-router";

import rootSaga from "./Sagas";
import rootReducers from "./Reducers";

export default (history) => {
  const sagaMiddleware = createSagaMiddleware();
  const routeMiddleware = routerMiddleware(history);
  let middleware = [sagaMiddleware, routeMiddleware];

  if (!false) middleware = [...middleware, logger];

  const store = createStore(
    rootReducers(history),
    composeWithDevTools(applyMiddleware(...middleware))
  );

  sagaMiddleware.run(rootSaga);

  return store;
};
