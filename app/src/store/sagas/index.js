import { all } from 'redux-saga/effects';
import DataSagas from './data';
import SlotMachineSagas from './slotMachine'
// combine all sagas
export default function* rootSaga() {
  yield all([
    ...DataSagas,
    ...SlotMachineSagas,
  ]);
}