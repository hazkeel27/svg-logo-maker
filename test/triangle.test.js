const Triangle = require('../lib/triangle');

describe('Triangle', () => {
    describe('render method', () => {
        it('render should return triangle', ()=> {
            const svg = new Triangle('SVG', 'white', 'green');
            const svgCode = `<polygon points="150, 20 250,160 50,160" fill="green" /><text x="150" y="130" font-size="50" text-anchor="middle" fill="white">SVG</text>`;
            expect(svg.render()).toEqual(svgCode);
        });
    });
});