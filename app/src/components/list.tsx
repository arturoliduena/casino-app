import React from 'react';
import Item from './item';
import { Country } from '../types';

interface Props {
  list: Country[],
}

const List = (props: Props) => {
  const { list = [] } = props;
  return <div className="list-container">
    {list.map(item => <Item key={item.name} item={item}/>)}
  </div>
}

export default List;