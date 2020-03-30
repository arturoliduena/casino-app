import { takeEvery, fork, put, call } from 'redux-saga/effects';
import * as actions from '../actions/data';
import * as api from '../../api';

// create a generator function
function* fetchData() {
  // try to make the api call
  try {
    // yield the api responsse into data
    const data = yield call(api.getAllCountries);
    yield put(actions.getAllCountriesSuccess({ data: data.data }))
  } catch (e) {
    console.log(e);
  }
}
function* watchFetchData() {
  yield takeEvery(actions.Types.GET_ALL_COUNTRIES_REQUEST, fetchData);
}

function* fetchCountries(action) {
  try {
    const data = yield call(api.getCountries, action.payload);
    yield put(actions.getCountriesSuccess({ data: data.data }))
  } catch (e) {
    console.log(e);
  }
}

function* watchFetchCountries() {
  yield takeEvery(actions.Types.GET_COUNTRIES_REQUEST, fetchCountries);
}
const DataSagas = [
  fork(watchFetchData),
  fork(watchFetchCountries)
];

export default DataSagas;