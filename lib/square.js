const Shapes = require('./shapes');

class Square extends Shapes {
    constructor(logoText, textColour, logoColour) {
        super(logoText, textColour, logoColour);
    }

    render() {
        return `<rect x="50" y="50" width="100" height="100" fill="${this.logoColour}" />

        <text x="100" y="115" font-size="40" text-anchor="middle" fill="${this.textColour}">${this.logoText}</text>`
    }
}

module.exports = Square;