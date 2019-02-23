import * as actionTypes from './actionTypes';

export const increment = () => {
  return {
    type: actionTypes.INCREMENT
  };
};

export const decrement = () => {
  return {
    type: actionTypes.DECREMENT
  };
};

export const add = (number) => {
  return {
    type: actionTypes.ADD,
    number
  };
};

export const subtract = (number) => {
  return {
    type: actionTypes.SUBTRACT,
    number
  };
};
