import { applyMiddleware, createStore } from 'redux';
import  createSagaMiddleware  from '@redux-saga/core';
import rootReducer from './reducer';
import rootWatcher from './watcher';

const saga = createSagaMiddleware();
const midleWare = [saga];
const store = createStore(rootReducer,applyMiddleware(...midleWare));
saga.run(rootWatcher);

export default store;
