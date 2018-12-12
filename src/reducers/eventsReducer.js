import {
    TOGGLE_MODAL_NEW_EVENT, UPDATE_FIELD_NEW_EVENT
} from '../constants/actionTypes';

export default (state = {isCreatingNewEvent: false}, action) => {
    switch (action.type) {
        case TOGGLE_MODAL_NEW_EVENT:
            return { ...state, isCreatingNewEvent: !state.isCreatingNewEvent}
        case UPDATE_FIELD_NEW_EVENT:
            return { ...state, [action.key]: action.value };
        default:
            return state;
    }
};

