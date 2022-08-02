import axios from 'axios';

export const LOADING = 'loading';
export const SUCCESS = 'success';
export const ERROR = 'error';

export const fetchPlanets = () => async (dispatch) => {
  dispatch({ type: LOADING });
  const response = await axios
    .get('https://swapi.dev/api/planets')
    .catch((err) => dispatch({ type: ERROR, payload: err }));

  return dispatch({ 
    type: SUCCESS, 
    payload: response.data.results 
  });
};
