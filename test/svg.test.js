const svg = require('../lib/svg');

describe('Svg', () => {
    describe('Triangle', () => {
        it('return triangle svg code', ()=> {
            const triangle = svg.Svg('SVG', 'white', 'triangle', 'green');
            const triangleSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 20 250,160 50,160" fill="green" /><text x="150" y="130" font-size="50" text-anchor="middle" fill="white">SVG</text></svg>`;
            expect(triangle).toEqual(triangleSvg);
        });
    });

    describe('Square', () => {
        it('return square svg code', ()=> {
            const square = svg.Svg('SVG', 'white', 'square', 'green');
            const squareSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="50" width="100" height="100" fill="green" /><text x="100" y="115" font-size="40" text-anchor="middle" fill="white">SVG</text></svg>`;
            expect(square).toEqual(squareSvg);
        });
    });

    describe('Circle', () => {
        it('return circle svg code', ()=> {
            const circle = svg.Svg('SVG', 'white', 'circle', 'green');
            const circleSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="green" /><text x="150" y="120" font-size="60" text-anchor="middle" fill="white">SVG</text></svg>`;
            expect(circle).toEqual(circleSvg);
        });
    });
});