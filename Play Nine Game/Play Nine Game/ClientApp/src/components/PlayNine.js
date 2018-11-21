import React from 'react';


const Stars = (props) => {
    const NumOfStars = 1+ Math.floor(Math.random() * 9); 
    let stars = [] 
    for (let i = 0; i < NumOfStars; i++)
    {
        stars.push(<span key={i} className="stars">+</span>)
    }
        return (
            <div>
                <span className="col-5">
                    {stars}
                </span>
            </div>    
        )
}

const NumbersList = (props) => {
    const numberList = []

    //Functional components such as these CANNOT have methods 

    for (let i = 1; i < 10; i++)
    {
        numberList.push(<span className="numbersStyle">{i}</span>); 
    }

        return (
            <div className="card text-center">
                <div>
                    {numberList}
                </div>
            </div>
        )
}

export class Answer extends React.Component {
    render() {
        return (
            <div className="col-5"><span>Answer component</span></div>
        )
    }
}

const Checker = (props) => {

        return (
            <div className="col-2 center">
                <center><button> = </button></center>
            </div>
        )
}

export class Redraw extends React.Component {
    state = {}
    render() {
        return (
            <div></div>
        )
    }
}

export class GameBoard extends React.Component {
    state = { selectedNumbers: [] };
    //TASK 1: Figure out how to push a number to this array on click 
    //TASK 2: Figure out what the UI will do based on the numbers stored in this array
    //

    ShowAlert = () => {
        console.log('alert')
    }

    render() {
        return (
            <div className="container">
                <h1>Play Nine: </h1>
                <hr />
                <div className="row">
                    <Stars />
                    <Checker />
                    <Answer />
                </div>
                <br />
                <NumbersList />
            </div>
        )
    }
}

export class PlayNine extends React.Component {
    state = { list: [] }

    render() {
        return (
            <div>
                <GameBoard />
            </div>
        )
    }
}