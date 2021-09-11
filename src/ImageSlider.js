// your ImageSlider code here!
// your first task is to create a simple components for both ImageSlider
//In the src/ImageSlider.js file, create an ImageSlider React component.
//components will need a valid render method to allow for our tests to properly import and use them.

//1. first step when creating any component
import React from 'react';

//Same setup - this.state will start at 0
//Then it will return the slide number
//constructor method runs first when a component is made  -   THIS IS WHY THE INITIAL STATE COMES BEFORE RENDER
//setState() functioning asynchronously. 
class ImageSlider extends React.Component {
    constructor() {
        super()

        this.state = {
            currentSlideIndex: 0
        }
    }

    render() {
        return (
            <h1>I am on slide {this.state.currentSlideIndex}</h1>
        )
    }
}

//Last step - Export default is used so we can import this file into other files
export default ImageSlider;