import {
    LOGIN,
    UPDATE_FIELD_AUTH
} from '../constants/actionTypes';

export default (state = {}, action) => {
    switch (action.type) {
        case LOGIN:
            return { ...state, authToken: action.value, isLoggedIn: true }
        case UPDATE_FIELD_AUTH:
            return { ...state, [action.key]: action.value };
        default:
            return state;
    }
};

