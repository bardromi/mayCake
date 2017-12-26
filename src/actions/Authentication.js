import {
    AUTH_SUCCESS,
    AUTH_LOADING,
    LOGIN_FAILED,
    REGISTER_FAILED,
} from '../constants';
import UserAPI from '../api';

export function login(email, password) {
    return dispatch => {
        dispatch(authLoading(true));

        setTimeout(() => {
            UserAPI.login(email, password)
                .then(user => {
                    dispatch(authSuccess(user));
                })
                .then(() => {
                    dispatch(loginFailed(null));
                    dispatch(authLoading(false))
                })
                .catch(err => {
                    dispatch(loginFailed(err.message));
                    dispatch(authLoading(false));
                });
        }, 1000);
    }
}

export function authSuccess(user) {
    return {
        type: AUTH_SUCCESS,
        payload: user
    };
}

export function loginFailed(err) {
    return {
        type: LOGIN_FAILED,
        payload: err
    };
}

export function authLoading(bool) {
    return {
        type: AUTH_LOADING,
        payload: bool
    };
}

export function register(email, password) {
    return dispatch => {
        dispatch(authLoading(true));
        UserAPI.register(email, password)
            .then(user => {
                dispatch(authSuccess((user)));
            })
            .then(() => {
                dispatch(registerFailed(null));
                dispatch(authLoading((false)))
            })
            .catch(err => {
                dispatch(registerFailed(err.message));
                dispatch(authLoading((false)));
            })
    }
}

export function registerFailed(bool) {
    return {
        type: REGISTER_FAILED,
        payload: bool
    };
}
