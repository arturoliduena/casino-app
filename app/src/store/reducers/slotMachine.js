import { Types } from '../actions/slotMachine';

// create initial state for reducers
const INITIAL_STATE = {
  result_slot_machine: 0,
  row1: '',
  row2: '',
  row3: '',
}

// reducer function to transform state
export default function data(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_SPIN_SUCCESS: {
      return Object.assign({}, state, {
        result_slot_machine: action.payload.result,
        row1: action.payload.row1,
        row2: action.payload.row2,
        row3: action.payload.row3,
      })
    }
    default: return state;
  }
}