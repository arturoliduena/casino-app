import { takeEvery, fork, put, call } from 'redux-saga/effects';
import * as actions from '../actions/slotMachine';
import * as api from '../../api';

function* fetchMachine() {
  try {
    const data = yield call(api.getSpin);
    yield put(actions.getSpinSuccess({ data: data.data }))
  } catch (e) {
    console.log(e);
  }
}
function* watchFetchMachine() {
  yield takeEvery(actions.Types.SPIN, fetchMachine);
}

const SlotMachineSagas = [
  fork(watchFetchMachine),
];

export default SlotMachineSagas;