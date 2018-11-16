import React from 'react';


//Think of all the components you might need 

const Margin = {

    marginTop: '20px'
}

export class List extends React.Component {
    render() {
        return (
            <div style={Margin}>
                <ul>
                    <li style={Margin}>
                        Hello
                    </li>
                    <li style={Margin}>
                        World
                    </li>
                    <li style={Margin}>
                        ASP.Net
                    </li>
                </ul>
            </div>
        )
    }
}

export class Input extends React.Component {
    state = { input: '' }
    render() {
        return (
            <input type="text" onChange={(event) => this.setState({ input: event.target.value }) } placeholder="Add new TODO"></input>  
        )
    }
}

export class TODO extends React.Component {
    state =  { list: [ 'Homework', 'Laundry', 'Groceries' ] }
    render() {
        return (
            <div>
                <h1>TODO List: </h1>
                <form>
                    <Input />
                    <button type="submit">Add task</button>
                    <List appendInfo={this.state.list} /> 
                </form>
            </div>
            )
    }
}