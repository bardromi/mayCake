import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {createLogger} from 'redux-logger';

import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
//import '../node_modules/bootstrap/dist/js/bootstrap';

import App from './components/App'
import reducers from './reducers/index';

const loggerMiddleware = createLogger();

const createStoreMiddleware = applyMiddleware(thunk, loggerMiddleware)(createStore);

ReactDOM.render(
    <Provider store={createStoreMiddleware(reducers)}>
        <Router>
            <Route path="/" component={App}/>
        </Router>
    </Provider>
    , document.getElementById('root')
);
registerServiceWorker();
