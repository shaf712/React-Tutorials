import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; 
import { createTask } from '../components/actions/todoActions';

class TODO extends Component {
    constructor(props) {
        super(props); 

        this.state = {
            task: { name: '', body: '' }
        }; 

        this.onNameChange = this.onNameChange.bind(this);
        this.onBodyChange = this.onBodyChange.bind(this); 
        this.onClickSave = this.onClickSave.bind(this); 
    }

    onNameChange(e) {
        console.log('name change')
        let task = this.state.task;
        task.name = e.target.value;
        this.setState({ task: task });
    }

    onBodyChange(e) {
        console.log('body change')
        let task = this.state.task; 
        task.body = e.target.value; 
        this.setState({ task: task });
    }

    onClickSave = (e) => {
        this.props.createTask(this.state.task); 
    }; 

    todoRow(task, index) {
        return <div key={index}>{task.name}, {task.body}</div>;
    }

    render() {
        return (
            <div>
                <h1>TODO List: </h1>
                <hr /> 
                <h4>Add TODO</h4>
                <input type="text" onChange={this.onNameChange} placeholder="Name" name="name" value={this.state.task.name} />
                <input type="text" onChange={this.onBodyChange} placeholder="Description" name="body" value={this.state.task.body} />
                <input type="submit" value="Add task" onClick={this.onClickSave} />
                <hr />
                {this.props.tasks.map(this.todoRow)}
            </div>
            )
    }

}

function mapStateToProps(state, ownProps) {
    console.log('this is the STATE: ', state); 
    console.log('MAPPING STATE TO PROPS!'); 
    return {
        tasks: state.todos
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

TODO.propTypes = {
    createTask: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(TODO); 