const Shapes = require('./shapes');

class Triangle extends Shapes {
    constructor(logoText, textColour, logoColour) {
        super(logoText, textColour, logoColour);
    }

    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.logoColour}" />

        <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColour}">${this.logoText}</text>`
    }
}

module.exports = Triangle;