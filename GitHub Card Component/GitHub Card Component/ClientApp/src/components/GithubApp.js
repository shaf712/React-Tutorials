import React from 'react';


const marginStyle = {
    marginTop: '100px'
}

const Card = (props) => {
        return (
            <div style={marginStyle}>
                <img style={{ width: '75px', height: '75px' }} src={props.img_url} />
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

//Since we want to render multiple cards, we need another component to hold those different card -> a "list" type component 

let data = 
    [
        { name: 'Bob', company: 'Bob Inc.', img_url: 'https://avatars1.githubusercontent.com/u/2427602?v=4' }, 
        { name: 'John', company: 'John Inc.', img_url: 'https://avatars2.githubusercontent.com/u/1436?v=4' },
        { name: 'Rick', company: 'Rick Inc.', img_url: 'https://avatars0.githubusercontent.com/u/34117865?v=4' },
        { name: 'Tom', company: 'Tom Inc.', img_url: 'https://avatars3.githubusercontent.com/u/3335997?v=4' }
    ]

const CardList = (props) => {

    return (
        <div>
            {props.cards.map(x => <Card name={x.name} img_url={x.img_url} company={x.company} />)}
        </div>
    ); 

}

export class Form extends React.Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Github Username" />
                <button>Add card</button>
            </form>
        )
    }
}

export class GithubApp extends React.Component {
    render() {
        return (
            <div>
                <div style={{ marginTop: '50px' }}><Form /></div>
                <CardList cards={data} />
            </div>
        );
    }
}

