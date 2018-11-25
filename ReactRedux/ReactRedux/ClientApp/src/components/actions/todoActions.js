import * as types from './actionTypes'; 

export function createTask(task) {
     console.log('here is the task: ', task); 
     return { type: types.CREATE_COURSE, task }
 }

//export const createTask = taskData => dispatch => {
//   debugger; 
//   console.log('creating task!') 
//   taskData => dispatch({
//       type: 'CREATE_TASK', 
//       payload: taskData
//   })
//}