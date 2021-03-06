import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';
import actionReducers from '../reducers/actions';

const reducer = combineReducers({
   actions: actionReducers,

});

const store = createStore(reducer, applyMiddleware(reduxThunk));

export default store;