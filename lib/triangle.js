const Shapes = require('./shapes');

// triangle class's render function returns the properties to generate a triangle
class Triangle extends Shapes {
    constructor(logoText, textColour, logoColour) {
        super(logoText, textColour, logoColour);
    }

    render() {
        return `<polygon points="150, 20 250,160 50,160" fill="${this.logoColour}" /><text x="150" y="130" font-size="50" text-anchor="middle" fill="${this.textColour}">${this.logoText}</text>`
    }
}

module.exports = Triangle;