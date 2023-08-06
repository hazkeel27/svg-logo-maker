class Shapes {
    constructor(logoText, textColour, logoColour) {

        let regEx = /\d+/;

        if (logoText && logoText.length > 3) {
            throw new Error('Logo length must be 3 characters or less');
        }
        else if (logoText && logoText.length <= 3) {
            this.logoText = logoText;
        }

        this.textColour = regEx.test(logoColour) ? `#${textColour.toUpperCase()}` : textColour;

        this.logoColour = regEx.test(logoColour) ? `#${logoColour.toUpperCase()}` : logoColour;
    }

    render() {
        throw new Error(`Shapes class's children must implement render method.`);
    }
}

module.exports = Shapes;