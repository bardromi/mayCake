import {CAKES_SUCCESS, CAKES_LOADING, CAKES_FAILED, FLUSH_ERRORS} from '../constants';

export default function (state = {}, action) {
    switch (action.type) {
        case CAKES_SUCCESS:
            return {...state, cakes: action.payload};
        case CAKES_LOADING:
            return {...state, isLoading: action.payload};
        case CAKES_FAILED:
            return {...state, failed: action.payload};
        case FLUSH_ERRORS:
            return {...state, failed: null};
        default:
            return state;
    }
}