class Shapes {
    constructor(logoText, textColour, logoColour) {

        let regEx = /\d+/;

        // confirms the logo text is less than or equal to 3 characters
        if (logoText && logoText.length > 3) {
            throw new Error('Logo length must be 3 characters or less');
        }
        else if (logoText && logoText.length <= 3) {
            this.logoText = logoText;
        }

        // checks for hexadecimal number
        this.textColour = regEx.test(textColour) ? `#${textColour.toUpperCase()}` : textColour;

        // checks for hexadecimal number
        this.logoColour = regEx.test(logoColour) ? `#${logoColour.toUpperCase()}` : logoColour;
    }

    render() {
        throw new Error(`Shapes class's children must implement render method.`);
    }
}

module.exports = Shapes;