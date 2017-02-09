import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import allReducer from "./reducers";
import App from './components/app';

const store = createStore(allReducer);

ReactDOM.render(
	<Provider store={store}>
    <App />
  </Provider>,  
  document.getElementById('root')
);
