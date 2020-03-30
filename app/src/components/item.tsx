import React, { useState } from 'react';
import ItemObject from './itemObject';
import { Country } from '../types';

interface Props {
  item: Country,
}

const Item = (props: Props) => {
  const [open, setOpen] = useState(false);

  const { flag, name } = props.item;
  const handleOpen = () => {
    setOpen(!open)
  }
  return (
    <div className="item-container">
      <img className="flag" src={flag} alt=""/>
      <span> {name} </span>
      <button onClick={handleOpen}> details... </button>
      <br/>
      { open && <ItemObject item={props.item}/>}
    </div>
  )
};

export default Item;