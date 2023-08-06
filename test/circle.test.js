const Circle = require('../lib/circle');

describe('Circle', () => {
    describe('render method', () => {
        it('render should return circle', ()=> {
            const svg = new Circle('SVG', 'white', 'green');
            const svgCode = `<circle cx="150" cy="100" r="80" fill="green" /><text x="150" y="120" font-size="60" text-anchor="middle" fill="white">SVG</text>`;
            expect(svg.render()).toEqual(svgCode);
        });
    });
});