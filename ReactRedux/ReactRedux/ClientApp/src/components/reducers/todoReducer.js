import * as types from '../actions/actionTypes'; 


export default function (state = [], action) {
    switch (action.type) {
        case types.CREATE_COURSE:
            console.log('creating task') 
            console.log('action task: ', action.task); 
            return [...state, Object.assign({}, action.task)];
        default:
            console.log('reducer state') 
            return state;
    }
}