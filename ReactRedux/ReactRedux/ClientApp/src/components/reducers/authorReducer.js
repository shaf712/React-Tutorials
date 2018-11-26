import * as types from '../actions/actionTypes'; 


export default function (state = [], action) {
    switch (action.type) {
        case types.LOAD_AUTHORS_SUCCESS:
            console.log('AUTHOR REDUCER!'); 
            return action.authors;
        default:
            console.log('AUTHOR reducer state')
            return state;
    }
}