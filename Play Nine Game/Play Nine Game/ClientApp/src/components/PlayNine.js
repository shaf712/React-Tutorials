import React from 'react';


const Stars = (props) => {
    let stars = [] 
    for (let i = 0; i < props.randomNumberOfStars; i++)
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

    const numberClassName = (number) =>
    {
        if (props.selectedNumbers.indexOf(number) >= 0) {
            return 'numbersStyle selected';
        }

        else if (props.usedNumbers.indexOf(number) >= 0) {
            return 'numbersStyle used';
        }

        else {
            return 'numbersStyle';
        }
    }

    for (let i = 1; i < 10; i++)
    {
        numberList.push(<span className={numberClassName(i)} onClick={() => props.appendToList(i)} >{i}</span>); 
    }

        return (
            <div className="card text-center">
                <div>
                    {numberList}
                </div>
            </div>
        )
}

const Answer = (props) => {

        return (
            <div className="col-5">
                {props.passValues.map((num, i) => <span onClick={() => props.putBackNumber(num)} className="numbersStyle" key={i}>{num}</span>)}
            </div>
        )
}

const Checker = (props) => {

        return (
            <div className="col-2 center">
                <center><button onClick={props.checker}> = </button></center>
            </div>
        )
}


const Restart = (props) => {

    return (
        <div className="col-2 center">
            <center><button onClick={props.restartGame} className="redraw"> RESTART GAME </button></center>
        </div>
    )
}

const Redraw = (props) => {

    const redrawClassName = (limit) => {
        if (limit != 0) {
            return 'redraw'; 
        }
        else {
            return 'redraw limit'; 
        }
    }
        return (
            <div><center className={redrawClassName(props.refreshLimit)}><button onClick={props.redrawStars}>Redraw ({props.refreshLimit})</button></center></div>
        )
}

export class GameBoard extends React.Component {
    //if you have many state components, you can wrap  them in a function and assign the function to "state" 

    static InitialState = () => ({
        selectedNumbers: [], usedNumbers: [], randomNumberOfStars: 1 + Math.floor(Math.random() * 9), refreshLimit: 5
    })

    state = GameBoard.InitialState();

    redraw = () => {
        console.log('redrawing!')
        this.setState(previousState => ({
            randomNumberOfStars: 1 + Math.floor(Math.random() * 9), 
            refreshLimit: previousState.refreshLimit - 1
        }))
    }

    appendToList = (num) => {
        console.log('heres the num TO ADD AS SELECTED', num)
        this.setState(previousState => ({
            selectedNumbers: previousState.selectedNumbers.concat(num)
        }))
    }

    putBackNumber = (num) => {
        console.log('heres the num TO PUT BACK', num)
        this.setState(previousState => ({
            selectedNumbers: previousState.selectedNumbers.filter(function (v, index) { return v != num })
        }))
    }

    checker = () => {
        let sum = 0; 

        for (let i = 0; i < this.state.selectedNumbers.length; i++) {
                sum = sum + this.state.selectedNumbers[i]
        }

        if (sum == this.state.randomNumberOfStars) {
            this.setState(previousState => ({
                randomNumberOfStars: 1 + Math.floor(Math.random() * 9)
            }))
            this.setState(previousState => ({
                usedNumbers: previousState.usedNumbers.concat(previousState.selectedNumbers), 
                selectedNumbers: [] 
            }))
        }
        else {
            console.log('INCORRECT');
        }
    }

    restartGame = () => {
        this.setState(GameBoard.InitialState())
    }

    render() {
        return (
            <div className="container">
                <h1>Play Nine: </h1>
                <hr />
                <div className="row">
                    <Stars randomNumberOfStars={this.state.randomNumberOfStars} />
                    <Checker checker={this.checker} />
                    <Redraw refreshLimit={this.state.refreshLimit} redrawStars={this.redraw} />
                    <Answer indicator={this.state.indicator} putBackNumber={this.putBackNumber} passValues={this.state.selectedNumbers} />
                </div>
                <br />
                <NumbersList usedNumbers={this.state.usedNumbers} selectedNumbers={this.state.selectedNumbers} appendToList={this.appendToList} />
                <Restart restartGame={this.restartGame} />
            </div>
        )
    }
}

export class PlayNine extends React.Component {
    //state = { list: [] }

    render() {
        return (
            <div>
                <GameBoard />
            </div>
        )
    }
}