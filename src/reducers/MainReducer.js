import { combineReducers } from 'redux';
import handleFetchedNewsReducer from './HandleFetchedNewsReducer';

const Reducer = combineReducers({
    newsData: handleFetchedNewsReducer
});

export default Reducer;
