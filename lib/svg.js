// required classes are imported
const Triangle = require('./triangle');
const Square = require('./square');
const Circle = require('./circle');

// returns the svg file's code based on user input
function svg (logoText, textColour, logoShape, logoColour) {
    this.logoText = logoText;
    this.textColour = textColour;
    this.logoShape = logoShape;
    this.logoColour = logoColour;

    let shape = '';

    // checks the logo shape that user chose in the terminal
    switch (this.logoShape) {
        case 'triangle':
            shape = new Triangle(this.logoText, this.textColour, this.logoColour);
            break;
        case 'square':
            shape = new Square(this.logoText, this.textColour, this.logoColour);
            break;
        case 'circle':
            shape = new Circle(this.logoText, this.textColour, this.logoColour);
            break;
    }

    // returns the svg file's code 
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${shape.render()}</svg>`;
}

module.exports = { svg };