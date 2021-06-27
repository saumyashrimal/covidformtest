import {combineReducers} from 'redux';
import inputReducer from './inputReducer';
import dependentReducer from './dependentReducer';

const mainReducer = combineReducers({
    inputstate:inputReducer,
    dependentState:dependentReducer
});

export default mainReducer;