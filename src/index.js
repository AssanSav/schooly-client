import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from "redux"
import {Provider} from "react-redux"
import logger from "redux-logger"
import thunk from "redux-thunk"
import {rootReducer} from "./reducers"

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let globalStore = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk, logger))
)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={globalStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

