import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';

class Counter extends Component {
    state = {
        counter: 0
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 15" clicked={this.props.onSubtractCounter}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                  {this.props.storedResults.map(strResult => (
                    <li
                      key={strResult.id} 
                      onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                  ))}
                </ul>
            </div>
        );
    }
}

// ctr & res are declared in index.js
const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter,
    storedResults: state.res.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
    onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
    onAddCounter: () => dispatch({type: actionTypes.ADD, payload: 10}),
    onSubtractCounter: () => dispatch({type: actionTypes.SUBTRACT, payload: 15}),
    onStoreResult: (result) => dispatch({type: actionTypes.STORE_RESULT, result: result}),
    onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, resultElementId: id})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
