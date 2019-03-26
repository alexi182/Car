import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import actionReducers from '../reducers/actions';

const reducer = combineReducers({
   actions: actionReducers
});

const store = createStore(reducer, applyMiddleware(reduxThunk, logger));

export default store;