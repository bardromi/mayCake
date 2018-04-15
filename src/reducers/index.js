import {combineReducers} from 'redux';
import auth from './AuthenticationReducer';
import cakepage from './CakePageReducer';
import home from './HomeReducer';

const rootReducer = combineReducers({
    auth,
    cakepage,
    home
});

export default rootReducer;