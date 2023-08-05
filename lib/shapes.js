class Shapes {
    constructor(logoText, textColour, logoColour) {

        if (logoText.length > 3) {
            throw new Error('Logo length must be 3 characters or less');
        }

        this.logoText = logoText;
        this.textColour = textColour;

        if (/^\d+$/.test(logoColour)) {
            this.logoColour = `#${logoColour}`
        }
        else {
            this.logoColour = logoColour;
        }
    }

    render() {
        throw new Error(`Shapes class's children must implement render() method.`);
    }
}

module.exports = Shapes;