import React from 'react';

const pStyle = {
    marginTop: '20px'
};

const pSmallStyle = {
    marginTop: '30px'
}

//This is a CLASS component
export class Button extends React.Component {
    //We want to use a State object now. We need to initialize it with a constructor
    //state = { counter: 0, counter2: 0 } //create a new state within the new State object (can create multiple states)
        //create a 'counter' STATE

    //handleClick = () => { //Declare a function in React this way 
    //    //READ the value of the counter state (this.state.counter)
    //    //Increment the value of the counter
    //    //SET the state of the counter 
    //    //React's setState method is async, which just schedules an update - multiple setStates can cause a race condition 
    //    //if we want to setState without worrying about race condition, we can grab the previousState 

    //    this.setState((previousState) => {
    //        return {
    //            counter: previousState.counter + 1
    //        }
    //    })
    //};

    handleClick = () => {
        this.props.onClickFunction(this.props.incrementValue); 
    }

      //render() {
      //      return(
      //          <div style={pStyle}>
      //              <button onClick={this.props.onClickFunction}>
      //                  +{this.props.incrementValue}
      //              </button>                
      //          </div>
      //      );
      //  //'Counter' component reaches out to the parent 'App' component and tells it to fire the function related to onClickFunction using "this.props"
      //  }

    //render() {
    //    return (
    //        <div style={pStyle}>
    //            <button onClick={ () => this.props.onClickFunction(this.props.incrementValue) }>
    //                +{this.props.incrementValue}
    //            </button>
    //        </div>
    //    );
    //    //Put arguments inside of a function - doing it like this however creates a new function every time
    //}

    render() {
        return (
                <div style={pStyle}>
                <button onClick= { this.handleClick }>
                    +{this.props.incrementValue}
                </button>
            </div>
        ); 
    }

}

//This is a FUNCTION component 
const Result = (props) => {
    return(
        <div>{props.ShowCounter()}</div>
    );
    //The syntax for accessing properties on a CLASS component is DIFFERENT than the syntax for accessing them in a FUNCTION component  
}

export class FirstApp extends React.Component {
    state = { counter: 0, value: 5 }; 

    incrementCounter = (incrementValue) => {
        this.setState((previousState) => ({
            counter: previousState.counter + incrementValue //previousState = this.state from its previous state
        }));
    };

    displayCounter = () => {
        return this.state.counter; 
    }

    render() {
        return(
            <div>
                <Button incrementValue={1} onClickFunction={this.incrementCounter} />
                <Button incrementValue={5} onClickFunction={this.incrementCounter} />
                <Button incrementValue={10} onClickFunction={this.incrementCounter} />
                <Button incrementValue={100} onClickFunction={this.incrementCounter} />
                <div style={pSmallStyle}>
                    <Result ShowCounter={this.displayCounter} />
                </div>
            </div>
        );
    }
}