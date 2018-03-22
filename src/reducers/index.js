import {combineReducers} from 'redux';
import auth from './AuthenticationReducer';
import cake from './CakeReducer';
import cakes from './CakesReducer';

const rootReducer = combineReducers({
    auth,
    cake,
    cakes
});

export default rootReducer;