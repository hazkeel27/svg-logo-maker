const Square = require('../lib/square');

describe('Square', () => {
    describe('render method', () => {
        it('render should return square', ()=> {
            const svg = new Square('SVG', 'white', 'green');
            const svgCode = `<rect x="50" y="50" width="100" height="100" fill="green" /><text x="100" y="115" font-size="40" text-anchor="middle" fill="white">SVG</text>`;
            expect(svg.render()).toEqual(svgCode);
        });
    });
});