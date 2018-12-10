import {
    LOGIN,
    UPDATE_FIELD_AUTH,
    ASYNC_ACTION_START,
    ASYNC_ACTION_END
} from '../constants/actionTypes';

export default (state = {isLoggedIn: false, inProgess: false}, action) => {
    switch (action.type) {
        case LOGIN:
            return { ...state, isLoggedIn: action.error ? false : true, inProgess: true}
        case UPDATE_FIELD_AUTH:
            return { ...state, [action.key]: action.value };
        case ASYNC_ACTION_START:
            return { ...state, inProgess: true}
        case ASYNC_ACTION_END:
            return { ...state, inProgess: false}
        default:
            return state;
    }
};

