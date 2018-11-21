import React from 'react';


export class Stars extends React.Component {
    state = {}
    render() {
        return (
            <div>
            <span className="col-5">
                <span className="stars">+</span>
                <span className="stars">+</span>
                <span className="stars">+</span>
                <span className="stars">+</span>
               </span>
            </div>    
        )
    }
}

export class NumbersList extends React.Component {
    state = { num_list : [1, 2, 3, 4, 5, 6, 7, 8, 9] }
    render() {
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
}

export class Answer extends React.Component {
    render() {
        return (
            <div className="col-5"><span>Answer component</span></div>
        )
    }
}

export class Checker extends React.Component {
    state = {}
    render() {
        return (
            <div className="col-2 center">
                <center><button> = </button></center>
            </div>
        )
    }
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