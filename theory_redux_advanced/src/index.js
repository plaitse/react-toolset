import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer
});

/* --- Middleware --- */
// -> Runs between the dispatching of an action and the point of time the action reaches the reducer
const logger = store => {
  return next => {
    return action => {
      console.log('[Middleware] Dispatching', action);
      const result = next(action);
      console.log('[Middleware] next state', store.getState());
      return result;
    };
  };
};

// Redux devTools extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(rootReducer, applyMiddleware(logger));
const store = createStore(
  rootReducer, // preloaded state
  composeEnhancers(applyMiddleware(logger, thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById( 'root' ) );
registerServiceWorker();
