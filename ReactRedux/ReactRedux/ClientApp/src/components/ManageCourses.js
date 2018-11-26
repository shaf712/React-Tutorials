import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 
import * as courseActions from './actions/todoActions'; 
import * as authorActions from './actions/authorActions'; 
import CourseForm from './courseForm'; 
import TODO from './TODO';

class ManageCourses extends Component {
    constructor(props) {
        super(props);

        //this.state = {
        //    task: { name: '', body: '' }
        //}; 

        this.state = {
            course: Object.assign({}, this.props.course), errors: {}
        } 
    }

    courseRow(course, index) {
        return <div key={index}>{course.firstName}</div>;
    }

    render() {

        return (
            <div>
                <h1>Manage Courses: </h1>
                <hr />
                <CourseForm allAuthors={this.props.authors} errors={this.state.errors} course={this.state.course} /> 
            </div>
        )
    }

}


ManageCourses.propTypes = {
    //createTask: PropTypes.func.isRequired
};


function mapStateToProps(state, ownProps) {

    //let course = { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' }

    const authorsFormatted = state.authors.map(author => {
        return {
            value: author.id, 
            text: author.firstName + ' ' + author.lastName 
        }
    });

    return {
        course: state.courses, 
        authors: authorsFormatted 
    }
}

function mapDispatchToProps(dispatch) {
        
    return {
        actions: bindActionCreators(Object.assign({}, authorActions, courseActions), dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCourses); 