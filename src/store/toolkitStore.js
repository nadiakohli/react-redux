import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import peopleReducer from 'reducers/people';

const toolkitStore = configureStore({ reducer: peopleReducer }, applyMiddleware());
window.toolkitStore = toolkitStore;

toolkitStore.subscribe(() => {
  console.log(toolkitStore.getState());
});

export default toolkitStore;
