import {CAKE_SUCCESS, CAKE_LOADING, CAKE_FAILED, FLUSH_ERRORS} from '../constants';

export default function (state = {}, action) {
    switch (action.type) {
        case CAKE_SUCCESS:
            return {...state, cakes: action.payload};
        case CAKE_LOADING:
            return {...state, isLoading: action.payload};
        case CAKE_FAILED:
            return {...state, failed: action.payload};
        case FLUSH_ERRORS:
            return {...state, failed: null};
        default:
            return state;
    }
}