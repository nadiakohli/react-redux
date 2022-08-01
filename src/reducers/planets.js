import { LOADING, SUCCESS, ERROR } from 'actions/planets';

const planetsReducer = (state = { data: [], loading: false, error: false }, { type, payload }) => {
  switch (type) {
    case LOADING:
      return { ...state, loading: true };
    case SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        data: payload,
      };
    case ERROR:
      return { ...state, loading: false, error: true };
    default:
      return state;
  };
};

export default planetsReducer;
