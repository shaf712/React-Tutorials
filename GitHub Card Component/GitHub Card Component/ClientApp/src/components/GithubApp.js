import React from 'react';
import axios from 'axios'; 


const marginStyle = {
    marginTop: '20px'
}

const Card = (props) => {
        return (
            <div style={marginStyle}>
                <img style={{ width: '80px', height: '80px' }} src={props.img_url} />
                <div style={{ display: 'inline-block', marginLeft: 10 }}>
                    <div style={{ fontSize: '1.25em', fontWeight: 'bold' }}>
                        {props.name}
                    </div>
                    <div>
                        {props.company}
                    </div>
                </div>
            </div>
        );
}

const CardList = (props) => {

    return (
        <div>
            {props.cards.map(x => <Card name={x.name} img_url={x.img_url} company={x.company} />)}
        </div>
    ); 

}

export class Form extends React.Component {
    state = { userName: '' }
    handleSubmit = (e) => { //e = event 
        e.preventDefault(); //prevents the 'submit' button from refreshing the page 
        let Name = this.state.userName; 
        //'Ajax' call to an API to grab data 
        axios.get('https://api.github.com/users/' + Name).then(
            response => {

                this.props.onSubmit(response.data); 

                this.setState(previousState => ({
                    userName: ''
                }))
                //We CANNOT do this because of the one-way flow of data in React 
                //Also, props are READ ONLY
                //this.props.cards.push({ name: response.data.name, company: response.data.html_url, img_url: response.data.avatar_url })
            })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" id="inputId" value={this.state.userName} onChange={ (event) => this.setState({ userName: event.target.value }) } placeholder="Github Username" />
                <button type="submit">Add card</button>
            </form>
        )
    }
}

export class GithubApp extends React.Component {
    //we need to put the card array inside of a component so that when we append to the list, it will re-render the list in the UI
    state = {
        cards:
            [
                //{ name: 'Bob', company: 'Bob Inc.', img_url: 'https://avatars1.githubusercontent.com/u/2427602?v=4' },
                //{ name: 'John', company: 'John Inc.', img_url: 'https://avatars2.githubusercontent.com/u/1436?v=4' },
                //{ name: 'Rick', company: 'Rick Inc.', img_url: 'https://avatars0.githubusercontent.com/u/34117865?v=4' },
                //{ name: 'Tom', company: 'Tom Inc.', img_url: 'https://avatars3.githubusercontent.com/u/3335997?v=4' }
            ]

    }; 
    render() {
        //Since we want to render multiple cards, we need another component to hold those different card -> a "list" type component 

        return (
            <div>
                <div style={{ marginTop: '50px' }}><Form onSubmit={this.addNewCard} /></div>
                <CardList cards={this.state.cards} />
            </div>
        );
    }

    addNewCard = (cardInfo) => {
        console.log(cardInfo)
        this.setState(previousState => ({
            //use .concat instead of .push 
            //.concat returns a NEW array
            //.push returns the new length of the array
            cards: previousState.cards.concat(cardInfo)
        }))
    }
}

