const Triangle = require('./triangle');
const Square = require('./triangle');
const Circle = require('./circle');

function Svg (logoText, textColour, logoShape, logoColour) {
    this.logoText = logoText;
    this.textColour = textColour;
    this.logoShape = logoShape;
    this.logoColour = logoColour;

    let shape = '';

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

    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${shape.render()}</svg>`;
}

module.exports = { Svg };