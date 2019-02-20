import React from 'react';

const input = (props) => {
  let inputElement = null;

  switch (props.inputType) {
    case ('input'):
      inputElement = <input />
      break;
    case ('textarea'): 
      inputElement = <textarea />
      break;
    default:
      inputElement = <input />
  }

  <div>
    <label>{props.label}</label>
    <input name= />
  </div>
};

export default input;
