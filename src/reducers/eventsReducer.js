import {
    TOGGLE_MODAL_NEW_EVENT
} from '../constants/actionTypes';

export default (state = {isCreatingNewEvent: false}, action) => {
    switch (action.type) {
        case TOGGLE_MODAL_NEW_EVENT:
            return { ...state, isCreatingNewEvent: !state.isCreatingNewEvent}
        default:
            return state;
    }
};

