import React from 'react';
import './option.css';
function Options(props) {

  return (
    <div>
         <button className="form-check" onClick={()=>props.check(props.item)}>{props.a}</button>
    </div>
  )
}

export default Options;