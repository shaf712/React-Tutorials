import { combineReducers } from 'redux';
import courses from './todoReducer'; 
import authors from './authorReducer'; 


const rootReducer = combineReducers({
    courses, 
    authors
})

export default rootReducer; 