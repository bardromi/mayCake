import {LOGIN_SUCCESS, LOGIN_FAILED, LOGIN_LOADING} from '../constants';
import UserAPI from '../api';

export function login(email, password) {
    return dispatch => {
        dispatch(loginLoading(true));

        setTimeout(() => {
            UserAPI.login(email, password)
                .then(user => {
                    dispatch(loginSuccess(user));
                    dispatch(loginError(null));
                })
                .then(() => dispatch(loginLoading(false)))
                .catch((err) => {
                    dispatch(loginError(err.message));
                    dispatch(loginLoading(false));
                });
        }, 1000);
    }
}

export function loginSuccess(user) {
    return {
        type: LOGIN_SUCCESS,
        payload: user
    };
}

export function loginError(err) {
    return {
        type: LOGIN_FAILED,
        payload: err
    };
}

export function loginLoading(bool) {
    return {
        type: LOGIN_LOADING,
        payload: bool
    };
}