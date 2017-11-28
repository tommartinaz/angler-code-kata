import { createStore, applyMiddleware } from 'react-redux';
import { logger } from 'redux-logger';
import { promises } from 'redux-promise-middleware';
import rootReducer from './reducers';
import { combineReducers } from './node_modules/redux/index';

export default (InitialState) => {
    return combineReducers(
        rootReducer, applyMiddleware(logger, promises())
    )
}