import {CAKE_SUCCESS, CAKE_FAILED, CAKE_LOADING} from '../constants';
import {CakesAPI} from "../api";

export function getAllCakes() {
    return dispatch => {
        dispatch(cakeLoading(true));

        CakesAPI.all()
            .then(cake => {
                setTimeout(() => {
                    dispatch(cakeSuccess(cake));
                }, 0);
            })
            .then(() => {
                dispatch(cakeFailed(null));
                dispatch(cakeLoading(false));
            })
            .catch(err => {
                dispatch(cakeFailed(err.message));
                dispatch(cakeLoading(false));
            })
    }
}

function cakeLoading(bool) {
    return {
        type: CAKE_LOADING,
        payload: bool
    };
}

function cakeSuccess(cakes) {
    return {
        type: CAKE_SUCCESS,
        payload: cakes
    };
}

function cakeFailed(err) {
    return {
        type: CAKE_FAILED,
        payload: err
    };
}