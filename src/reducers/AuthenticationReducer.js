import {LOGIN_SUCCESS, LOGIN_LOADING, LOGIN_FAILED} from '../constants';

export default function (state = {}, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {...state, user: action.payload};
        case LOGIN_LOADING:
            return {...state, isLoading: action.payload};
        case LOGIN_FAILED:
            return {...state, hasFailed: action.payload};
        default:
            return state;
    }
}