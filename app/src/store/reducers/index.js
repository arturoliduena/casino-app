import {combineReducers} from 'redux';
import DataReducer from './data';
import SlotMachineReducer from './slotMachine'

export default combineReducers({
    data: DataReducer,
    slotMachine: SlotMachineReducer,
})