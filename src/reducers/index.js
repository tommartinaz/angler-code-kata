import { combineReducers } from 'redux';
import angler_reducers from './angler_reducers';

const rootReducer = combineReducers({
    anglers: angler_reducers
})

export default rootReducer;