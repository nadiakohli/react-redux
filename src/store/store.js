import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import planetsReducer from 'reducers/planets';

const store = configureStore({ reducer: planetsReducer }, applyMiddleware());
window.store = store;

store.subscribe(() => {
  console.log(store.getState());
});

export default store;
