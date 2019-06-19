import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';

const Reducer = combineReducers({
    loginData: LoginReducer,
});

export default Reducer;
