import React from 'react';
import ReactDOM from 'react-dom';
import './styles/Project/index.css';
import Routes from './routes/routes';
import { Provider } from 'react-redux';
import store from  './utils/redux/store'

ReactDOM.render(
    <Provider store={store}>
      <Routes />
    </Provider>
    , document.getElementById('root'));


