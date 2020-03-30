import { Types } from '../actions/data';

// create initial state for reducers
const INITIAL_STATE = {
  countries: [],
  result_countries: [],
}

// reducer function to transform state
export default function data(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_ALL_COUNTRIES_SUCCESS: {
      return Object.assign({}, state, {
        countries: action.payload
      })
    }
    case Types.GET_COUNTRIES_SUCCESS: {
      return Object.assign({}, state, {
        result_countries: action.payload
      })
    }
    default: return state;
  }
}