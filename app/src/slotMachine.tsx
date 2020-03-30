import React, { useState, useEffect } from 'react';
import { Country, Option } from './types';

import { connect } from 'react-redux';
import { getSpinRequest } from './store/actions/slotMachine';
import BodySlotMachine from './components/bodySlotMachine';

interface Props {
  getSpinRequest: () => void;
  result: number;
  row1: string;
  row2: string;
  row3: string;
}

const SlotMachine = (props: Props) => {
  const [coins, setCoins] = useState<number>(20);
  const resetCoins = () => {
    setCoins(20)
  }
  const spin = () => {
    if(coins > 0){
      setCoins(coins - 1)
      props.getSpinRequest()
    }
  }
  return (
    <div className="main">
      <BodySlotMachine coins={coins} setCoins={setCoins} resetCoins={resetCoins} spin={spin}/>
      <div> result: { props.result } </div>
      <div> row1: { props.row1 } </div>
      <div> row2: { props.row2 } </div>
      <div> row3: { props.row3 } </div>
    </div>
  )
};

const mapStateToProps = (state: any) => ({
  result: state.slotMachine.result_slot_machine,
  row1: state.slotMachine.row1,
  row2: state.slotMachine.row2,
  row3: state.slotMachine.row3,

})
export default connect(mapStateToProps, { getSpinRequest })(SlotMachine)
