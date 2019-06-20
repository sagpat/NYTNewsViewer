import { combineReducers } from 'redux';
import NewsDataReducer from './NewsDataReducer';

const Reducer = combineReducers({
    newsData: NewsDataReducer
});

export default Reducer;
