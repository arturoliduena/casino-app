import React from 'react';
import './components.css';

interface Props {
  coins: number,
  setCoins: (coins: number) => void;
  resetCoins: () => void;
  spin: () => void;
}

const BodySlotMachine = (props: Props) => {
  return (
    <div className="slot-machine-container">
     <div> Slot Machine </div>
      <div> coins : {props.coins} </div>
      
      <button className="button-machine" onClick={props.resetCoins}> reset </button>
      <button className="button-machine" onClick={props.spin}> spin </button>
    </div>
  )
}

export default BodySlotMachine;