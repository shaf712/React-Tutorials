import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export class CoursesPage extends React.Component<RouteComponentProps<{}>, {}> {
    state = { course: { title: "" } } 


    onTitleChange = (e) => {
        console.log('this is the event, ', e.target.value) 
        const course = this.state.course; 
        course.title = e.target.value; 
        this.setState(prevState => ({
            course: course 
        }))
    }

    onClickSave = () => {
        console.log('saving ', this.state.course);  
    }

    render() {
        return (
            <div>
                <h1>Courses </h1>
                <h4>Add course: </h4>
                <input type="text" onChange={this.onTitleChange} value={this.state.course.title}></input>
                <input type="submit" onClick={this.onClickSave} value="Save" />
            </div>
        )
    }

}

export default CoursesPage;

