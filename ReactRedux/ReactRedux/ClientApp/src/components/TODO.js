import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; 
import { createTask } from '../components/actions/todoActions';
import courseList from './courseList';
import CourseList from './courseList';


class TODO extends Component {
    constructor(props) {
        super(props); 

        //this.state = {
        //    task: { name: '', body: '' }
        //}; 
    }

    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }

    render() {

        return (
            <div>
                <h1>Courses List: </h1>
                <hr />
                <CourseList courses={this.props.courses} />
            </div>
            )
    }

}


TODO.propTypes = {
    createTask: PropTypes.func.isRequired
};


function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    }
}

 function mapDispatchToProps(dispatch) {
     console.log('DISPATCHING'); 
     return {
         createTask: (task) => {
             dispatch(createTask(task)); 
         }
     }; 
 }

export default connect(mapStateToProps, mapDispatchToProps)(TODO); 