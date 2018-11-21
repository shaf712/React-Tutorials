import React from 'react';


const Stars = (props) => {
    const NumOfStars = 5; 
    let stars = [] 
    for (let i = 0; i < NumOfStars; i++) {
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
        return (
            <div className="card text-center">
                <div>
                    <span className="numbersStyle">1</span>
                    <span className="numbersStyle">2</span>
                    <span className="numbersStyle">3</span>
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