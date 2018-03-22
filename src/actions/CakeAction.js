import {CAKES_SUCCESS, CAKES_FAILED, CAKES_LOADING,CAKE_SUCCESS, CAKE_FAILED, CAKE_LOADING} from '../constants';
import {CakesAPI} from "../api";

export function getAllCakes() {
    return dispatch => {
        dispatch(cakesLoading(true));

        CakesAPI.all()
            // .then(cakes => {
            //     setTimeout(() => {
            //         dispatch(cakeSuccess(cakes));
            //     }, 0);
            // })
            .then(cakes => {
                dispatch(cakesSuccess(cakes));
            })
            .then(() => {
                dispatch(cakesFailed(null));
                dispatch(cakesLoading(false));
            })
            .catch(err => {
                dispatch(cakesFailed(err.message));
                dispatch(cakesLoading(false));
            })
    }
}

export function getCakeById(id) {
    return dispatch => {
        dispatch(cakeLoading(true));

        CakesAPI.get(id)
            .then(cake => {
                dispatch(cakeSuccess(cake));
                console.log("c",cake);
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

function cakesLoading(bool) {
    return {
        type: CAKES_LOADING,
        payload: bool
    };
}

function cakesSuccess(cakes) {
    return {
        type: CAKES_SUCCESS,
        payload: cakes
    };
}

function cakesFailed(err) {
    return {
        type: CAKES_FAILED,
        payload: err
    };
}

function cakeLoading(bool) {
    return {
        type: CAKE_LOADING,
        payload: bool
    };
}

function cakeSuccess(cake) {
    return {
        type: CAKE_SUCCESS,
        payload: cake
    };
}

function cakeFailed(err) {
    return {
        type: CAKE_FAILED,
        payload: err
    };
}