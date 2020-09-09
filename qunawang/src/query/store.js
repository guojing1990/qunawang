import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';

import reducers from './reducers';
import thunk from '../order/node_modules/redux-thunk';

export default createStore(
    combineReducers(reducers),
    {},
    applyMiddleware(thunk)
)