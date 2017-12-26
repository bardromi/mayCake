import {
    AUTH_SUCCESS,
    AUTH_LOADING,
    LOGIN_FAILED,
    REGISTER_FAILED,
    FLUSH_ERRORS
} from '../constants';

export default function (state = {}, action) {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {...state, user: action.payload};
        case AUTH_LOADING:
            return {...state, isLoading: action.payload};
        case LOGIN_FAILED:
            return {...state, loginHasFailed: action.payload};
        case REGISTER_FAILED:
            return {...state, registerHasFailed: action.payload};
        case FLUSH_ERRORS:
            return {...state, loginHasFailed: null, registerHasFailed: null};
        default:
            return state;
    }
}