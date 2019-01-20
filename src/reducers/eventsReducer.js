import {
    TOGGLE_MODAL_NEW_EVENT, UPDATE_FIELD_NEW_EVENT, PAGE_NEXT_FORM, PAGE_PREV_FORM
} from '../constants/actionTypes';

export default (state = { isCreatingNewEvent: false, date: new Date(), hasJobs: true, currentPage: 0 }, action) => {
    switch (action.type) {
        case TOGGLE_MODAL_NEW_EVENT:
            return { ...state, isCreatingNewEvent: !state.isCreatingNewEvent }
        case UPDATE_FIELD_NEW_EVENT:
            return { ...state, [action.key]: action.value };
        case PAGE_NEXT_FORM:
            return { ...state, currentPage: ++state.currentPage }
        case PAGE_PREV_FORM:
            return { ...state, currentPage: Math.min(Math.abs(--state.currentPage), 0) }
        default:
            return state;
    }
};

