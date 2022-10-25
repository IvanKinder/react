import {applyMiddleware, compose, createStore} from "redux";
import {toggleReducer} from "./reducers/toggleReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSTION_COMPOSE__ || compose

export const store = createStore(toggleReducer, composeEnhancers(applyMiddleware()))
