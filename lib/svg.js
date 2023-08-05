const Shapes = require('./shapes');
const Triangle = require('./triangle');
const Square = require('./triangle');
const Circle = require('./circle');

function Svg (logoText, textColour, logoShape, logoColour) {
    this.logoText - logoText;
    this.textColour = textColour;
    this.logoShape = logoShape;
    this.logoColour = logoColour;

    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    SHAPE AND COLOUR
    TEXT AND COLOUR
    </svg>`;
}