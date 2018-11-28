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

        this.updateCourseState = this.updateCourseState.bind(this); 
        //YOU NEED TO BIND FUNCTIONS LIKE THIS!!!! 

        this.SaveAuthor = this.SaveAuthor.bind(this); 

    }

    courseRow(course, index) {
        return <div key={index}>{course.firstName}</div>;
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.course.id != nextProps.course.id) {
            this.setState({ course: Object.assign({}, nextProps.course) })
        }
    }

    updateCourseState(event) {
        const field = event.target.name; 
        let course = this.state.course; 
        course[field] = event.target.value; 
        return this.setState({ course: course })
    }

    SaveAuthor = (e) => {
        e.preventDefault(); 
        console.log(this.state.course); 
        console.log('all the actions: ', this.props.actions); 
        this.props.actions.SaveCourse(this.state.course); 
        this.context.router.history.push('/'); 
    }

    render() {

        return (
            <div>
                <h1>Manage Courses: </h1>
                <hr />
                <CourseForm onSave={this.SaveAuthor} allAuthors={this.props.authors} onChange={this.updateCourseState} errors={this.state.errors} course={this.state.course} /> 
            </div>
        )
    }

}

ManageCourses.contextTypes = {
    router: PropTypes.object 
}

function getCourseByID(list, prop) {
    let courseId = prop.match.params.id;
    let course = list.courses.filter(c => c.id == courseId)
    if (course)
        return course[0]; 
    return null;
}

function mapStateToProps(state, ownProps) {

    let defaultCourse = { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' }
    if (ownProps.match.params.id && state.courses.length > 0) {
        defaultCourse = getCourseByID(state, ownProps);
    }

    const authorsFormatted = state.authors.map(author => {
        return {
            value: author.id, 
            text: author.firstName + ' ' + author.lastName 
        }
    });

    return {
        course: defaultCourse, 
        authors: authorsFormatted, 
    }
}

function mapDispatchToProps(dispatch) {
        
    return {
        actions: bindActionCreators(Object.assign({}, authorActions, courseActions), dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCourses); 