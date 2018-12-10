import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router';

import auth from './authReducer';
import events from './eventsReducer'

export default (history) => combineReducers({   
    router: connectRouter(history),
    auth,
    events
})