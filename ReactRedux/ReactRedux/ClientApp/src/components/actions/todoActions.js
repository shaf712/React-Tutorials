import * as types from './actionTypes'; 
import courseApi from '../../api/mockCourseApi';

export function createTask(task) {
     console.log('here is the task: ', task); 
     return { type: types.CREATE_COURSE, task }
 }

//this is a THUNK 
export function loadCourses() {
    return function (dispatch) {
        return courseApi.getAllCourses().then(courses => { dispatch(loadCoursesSuccess(courses)) }).catch(error => { throw(error) }); 
    }
}

export function loadCoursesSuccess(courses) {
    console.log('list of courses: ', courses); 
    return { type: types.LOAD_COURSES_SUCCESS, courses }
}

export function updateCourseSuccess(course) {
    return { type: types.UPDATE_COURSE_SUCCESS, course }
}

export function createCourseSuccess(course) {
    return { type: types.CREATE_COURSE_SUCCESS, course }
}

export function SaveCourse(course) {
    console.log('save action called: ', course);
    return function (dispatch, getState) {
        return courseApi.saveCourse(course).then(savedCourse => {
            course.id ? dispatch(updateCourseSuccess(savedCourse)) : dispatch(createCourseSuccess(savedCourse));
        })
    }
}
//export const createTask = taskData => dispatch => {
//   debugger; 
//   console.log('creating task!') 
//   taskData => dispatch({
//       type: 'CREATE_TASK', 
//       payload: taskData
//   })
//}