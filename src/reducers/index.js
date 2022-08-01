import { combineReducers } from 'redux';

import planetsReducer from 'reducers/planets';
import peopleReducer from 'features/PeopleView/peopleSlice';

const rootReducer = combineReducers({
  planets: planetsReducer,
  people: peopleReducer,
});

export default rootReducer;
