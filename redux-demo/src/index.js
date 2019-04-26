import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import DevTools from './DevTools';
import comments from './comments.js';
import users from './users.js';

const reducer = combineReducers({
    comments,
    users
});

const logger = createLogger();
const store = createStore(
    reducer,
    DevTools.instrument()
);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
        document.getElementById('root')
);

