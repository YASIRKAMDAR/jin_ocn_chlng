import { combineReducers } from 'redux';
import presStateReducer from './presStateReducer'

export default combineReducers({
    presState: presStateReducer
});
