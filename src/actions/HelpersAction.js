import {FLUSH_ERRORS} from '../constants'

export function flushErrors(){
    return{
        type: FLUSH_ERRORS,
    };
}