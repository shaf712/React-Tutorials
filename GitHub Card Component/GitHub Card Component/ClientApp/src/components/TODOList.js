import React from 'react';


//Think of all the components you might need 

const Margin = {

    marginTop: '20px'
}

const liMargin = {
    margin: '20px'
}

const MarginLeft = {
    marginLeft: '20px'
}

export class List extends React.Component {

    getItemForUpdate = (e, index) => {
        e.preventDefault()
        console.log('index for update: ', index)
        console.log('new value: ', document.getElementById(index).value)
        this.props.onUpdate(index, document.getElementById(index).value)
    }

    getItemForDelete = (e, index) => {
        e.preventDefault()
        console.log('item for delete: ', index) 
        this.props.onDelete(index)
    }


    render() {
        const self = this; 
        // Returning a list like this 
        return (
            <ul style={Margin}>
                {this.props.list.map(function (name, index) {
                    return <li style={liMargin} key={index}>{name}
                        <input style={MarginLeft} id={index} placeholder={name} type="text"></input>  
                        <button style={MarginLeft} onClick={(e) => { self.getItemForUpdate(e, index) }} >Update</button>
                        <button style={MarginLeft} onClick={(e) => { self.getItemForDelete(e, index) }} >Delete</button>
                        </li>
                })}
            </ul>
            
        )
    }
}

export class Input extends React.Component {
    state = { input: '' }

    handleClick = (e) => {
        e.preventDefault();
        let newTask = this.state.input  
        this.props.onClickSubmission(newTask)
        this.setState(previousState => ({
            input: ''
        }))

    }

    render() {
        return (
            <div>
                <input id="inputField" value={this.state.input} type="text" onChange={(event) => this.setState({ input: event.target.value })} placeholder="Add new TODO"></input>  
                <button type="submit" onClick={this.handleClick}>Add task</button>
             </div>
        )
    }
}

export class TODO extends React.Component {
    state = { list: [] }


    render() {
        return (
            <div>
                <h1>TODO List: </h1>
                <form>
                    <Input onClickSubmission={this.addTask} />
                    <List list={this.state.list} onDelete={this.onDelete} onUpdate={this.onUpdate} /> 
                </form>
            </div>
            )
    }

    onUpdate = (index, value) => {
        console.log('on update', index)

        this.state.list[index] = value

        console.log('updated list: ', this.state.list)

        this.setState(previousState => ({
            list: previousState.list
        }))
    }

    onDelete = (index) => {

        this.state.list.splice(index, 1)

        console.log('update list after DELETE: ', this.state.list)

        this.setState(previousState => ({
            list: previousState.list
        }))
    }

    addTask = (newTask) => {
        console.log('ADDING TASK', newTask)

        this.setState(previousState => ({
            list: previousState.list.concat(newTask)
        }))
    }

}