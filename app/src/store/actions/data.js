// actions types
export const Types = {
  GET_COUNTRIES_REQUEST: 'GET_COUNTRIES_REQUEST',
  GET_COUNTRIES_SUCCESS: 'GET_COUNTRIES_SUCCESS',
  GET_ALL_COUNTRIES_REQUEST: 'GET_ALL_COUNTRIES_REQUEST',
  GET_ALL_COUNTRIES_SUCCESS: 'GET_ALL_COUNTRIES_SUCCESS',
}

export const getAllCountriesRequest = () => ({
  type: Types.GET_ALL_COUNTRIES_REQUEST
})

export const getAllCountriesSuccess = ({ data }) => ({
  type: Types.GET_ALL_COUNTRIES_SUCCESS,
  payload: data
})

export const getCountriesRequest = (countries) => ({
  type: Types.GET_COUNTRIES_REQUEST,
  payload: countries
})

export const getCountriesSuccess = ({ data }) => ({
  type: Types.GET_COUNTRIES_SUCCESS,
  payload: data
})