import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {  routerMiddleware  } from 'react-router-redux';

import mainReducer from './mainReducer';
import history from './history';

const store = createStore(
    mainReducer, compose(applyMiddleware(routerMiddleware(history),thunk)
        , window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

export default store;