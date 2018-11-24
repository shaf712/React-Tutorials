export default function courseReducer(state = [], action) {
    switch (action.type) {

        case 'CREATE_COURSE':
            return [...state, Object.assign({}, action.course)]; 
        //"..." Basically returns a NEW INSTANCE of the object

        //this returns a brand new instance of a state with the new course that someone just passed in 

        default:
            return state;  
    }
}