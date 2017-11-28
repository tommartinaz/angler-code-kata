import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import promises from 'redux-promise-middleware';
import rootReducer from './reducers';

export default (InitialState) => {
    return createStore(
        rootReducer, applyMiddleware(logger, promises())
    )
}