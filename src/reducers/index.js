import {combineReducers} from 'redux';
import user from './UserReducer';
import auth from './AuthenticationReducer'

const rootReducer = combineReducers({
    auth,
    user
});

export default rootReducer;