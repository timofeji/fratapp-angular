import { setToken } from "../services/rootService";
import { LOGIN, LOGOUT } from "../constants/actionTypes";


import { push } from 'connected-react-router'

const authMiddleware = store => next => action => {
    if (action.type === LOGIN) {
        if (!action.error) {
            let token = action.payload;
            if(token){
                window.localStorage.setItem('jwt', action.payload);
                setToken(action.payload);
                store.dispatch(push('/'));
            }
        }
    } else if (action.type === LOGOUT) {
        window.localStorage.setItem('jwt', '');
        setToken(null);
    }

    next(action);
};

export default authMiddleware;