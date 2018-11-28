import * as types from '../actions/actionTypes'; 


export default function (state = [], action) {
    switch (action.type) {
        case types.CREATE_COURSE:
            //console.log('creating task') 
            //console.log('action task: ', action.task); 
            return [...state, Object.assign({}, action.task)];
        case types.LOAD_COURSES_SUCCESS:
            return action.courses; 
        case types.CREATE_COURSE_SUCCESS:
            //console.log('this is the state: ', state); 
            return [...state, Object.assign({}, action.course)];
        case types.UPDATE_COURSE_SUCCESS: 
            return [...state.filter(course => course.id !== action.course.id), Object.assign({}, action.course) ]
        default:
            //console.log('reducer state') 
            return state;
    }
}