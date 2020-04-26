import { combineReducers, createStore, applyMiddleware, } from 'redux';
import { ourReducer } from './body_container/reducer';
import { tabsReducer } from './body_container/reducer_for_tabs';
import {reducerForMap} from './map/reducer';
import {new_reducer} from './body_container/new_reducer';
import { IndiaReducer } from './body_container/reducer_india';
import thunk from "redux-thunk";
export const reducers = combineReducers({
  ourReducer, tabsReducer, reducerForMap, new_reducer, IndiaReducer
});

// store.js

export function configureStore(initialState = {}) {
  const store = createStore(reducers, applyMiddleware(thunk));
  return store;
};

export const store = configureStore();
