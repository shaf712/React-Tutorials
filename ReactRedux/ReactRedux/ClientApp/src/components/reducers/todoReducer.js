
export default function (state = [], action) {
    switch (action.type) {
        case 'CREATE_TASK':
            console.log('creating task') 
            console.log('action task: ', action.task); 
            return [...state, Object.assign({}, action.task)];
        default:
            console.log('reducer state') 
            return state;
    }
}