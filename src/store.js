import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import thunk from 'redux-thunk'

import rootReducer from './reducers/rootReducer'

import authMiddleware from './middleware/authMiddleware';
import commonMiddleware from './middleware/commonMiddleware';

export const history = createBrowserHistory();

const initialState = {}
const enhancers = []
const middleware = [
  thunk,
  routerMiddleware(history),
  commonMiddleware,
  authMiddleware,
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  rootReducer(history),
  initialState,
  composedEnhancers
)

export default store