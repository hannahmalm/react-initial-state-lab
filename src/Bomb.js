// your Bomb code here!
// your first task is to create a simple components for Bomb
//n the src/Bomb.js file, create a Bomb React component.
//components will need a valid render method to allow for our tests to properly import and use them.
import React from 'react';

//Same setup - this.state will start at 0
//Then it will return the slide number
//constructor method runs first when a component is made  -   THIS IS WHY THE INITIAL STATE COMES BEFORE RENDER
//setState() functioning asynchronously. 
class Bomb extends React.Component {
    constructor(props) { ////props that the component gets from its parent
        super()

        //The initial state of Bomb should have a property called secondsLeft.
        //The initial value of secondsLeft should be equal to the initialCount prop of our Bomb component.
        //define initial state with a key of 'someKey' set to the 'someValue' prop
        this.state = {
            secondsLeft: props.initialCount
        }
    }


    //It should render the text '<SECONDS_LEFT> seconds left before I go boom!', where <SECONDS_LEFT> is the value of secondsLeft.

    //If secondsLeft equals 0, it should render 'Boom!' instead
    //Insted of doing an if else, render a message
    //User terinary example for if else
    render() {
        const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;
        return(
            <div>{message}</div>
        )
    }
}

//Last step - Export default is used so we can import this file into other files
export default Bomb;