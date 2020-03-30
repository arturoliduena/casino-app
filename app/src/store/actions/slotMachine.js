// actions types
export const Types = {
  SPIN: 'SPIN',
  GET_SPIN_SUCCESS: 'GET_SPIN_SUCCESS',
}

export const getSpinRequest = () => ({
  type: Types.SPIN
})

export const getSpinSuccess = ({ data }) => ({
  type: Types.GET_SPIN_SUCCESS,
  payload: data
})