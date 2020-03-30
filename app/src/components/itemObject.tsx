import React, { ReactElement, Fragment } from 'react';
import { Country } from '../types';

interface Props {
  item: Country,
}

const renderArray = (array: [] | any) => {
  return <Fragment> [
    { array.map((element: {}, index: number) => {
      const type = typeof element;
      if(type === 'number' || type == 'string'){
        return <Fragment key={index}><span className="string">"{element}"</span> {index < array.length - 1 ? ',' : '' }</Fragment>
      }
      return renderObject(element)
    })
  }
  ]
  </Fragment>
}
const renderObject = (obj: {} | []) : JSX.Element=> {
  if(!obj){
    return <div></div>
  }
  const styles = {
    paddingLeft: '20px', 
  }
  const isArray = Array.isArray(obj)
  if(isArray) {
    return renderArray(obj)
  }
  return (
    <div style={styles}> {'{'} <br/>
      { Object.entries(obj).map(([key, value]) => {
        const type = typeof value;
        if(type === 'number'){
          return <Fragment key={key}><span style={styles} className="string">{key}</span>: <span className="number">{value}</span>, <br/></Fragment>
        }
        if(type == 'string'){
          return <Fragment key={key}><span style={styles} className="string">{key}</span>: <span className="string">"{value}"</span>, <br/></Fragment>
        }
        if(type === 'object'){
          return <Fragment key={key}><span style={styles} className="string">{key}</span>: <span >{renderObject(value)}</span>, <br/></Fragment>
        }
        }) 
      }
      {'},'}
    </div>
  )
}
const ItemObject = (props: Props) => (
  <pre>
    <code className="lang-json"> 
      { renderObject(props.item) }
    </code>
  </pre>
);

export default ItemObject;