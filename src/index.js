import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import ThunkMiddleware from 'redux-thunk';
import './index.css';
import App from './containers/App'
import 'tachyons';
import * as serviceWorker from './serviceWorker';
import { searchRobotsReducer, requestRobotsReducer } from './reducers';

const rootReducer = combineReducers({
  search: searchRobotsReducer,
  request: requestRobotsReducer
});

const store = createStore(rootReducer, applyMiddleware(ThunkMiddleware));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
