import {combineReducers} from 'redux';
import user from './UserReducer';
import auth from './AuthenticationReducer';
import cake from './CakeReducer';

const rootReducer = combineReducers({
    auth,
    user,
    cake
});

export default rootReducer;