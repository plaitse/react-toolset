import * as actionTypes from './actionTypes';

export const storeResult = (result) => {
  return {
    type: actionTypes.STORE_RESULT,
    result
  };
};
 
// Executed by Redux Thunk
export const storeResultAsync = (result) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(storeResult(result));
    }, 2000);
  }
  /* --- Example to add some logic: --- */
  // return (dispatch, getState) => {
  //   setTimeout(() => {
  //     const oldCounter = getState().ctr.counter;
  //     console.log({oldCounter});
  //     dispatch(storeResult(result));
  //   }, 2000);
  // }
};

export const deleteResult = (resultElementId) => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultElementId
  };
};
