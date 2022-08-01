import axios from 'axios';

export const LOADING = 'loading';
export const SUCCESS = 'success';
export const ERROR = 'error';

export const fetchPlanets = () => (dispatch) => {
  dispatch({ type: LOADING });
  return axios
    .get('https://swapi.dev/api/planets')
    .then((response) => dispatch({ type: SUCCESS, payload: response.data.results }))
    .catch((err) => dispatch({ type: ERROR, payload: err }))
};
