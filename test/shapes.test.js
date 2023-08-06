const Shapes = require('../lib/shapes');

describe('Shapes', () => {
    describe('wrong logoText length', () => {
        it('throw error if logo text length > 3', ()=> {
            const shapes = () => new Shapes('SVGG', 'white', 'green');
            const error = new Error('Logo length must be 3 characters or less');
            expect(shapes).toThrowError(error);
        });
    });

    describe('correct logoText length', () => {
        it('return logo text if length <= 3', ()=> {
            const shapes = new Shapes('SVG', 'white', 'green');
            const result = 'SVG'
            expect(shapes.logoText).toEqual(result);
        });
    });

    describe('textColour', () => {
        it('return hexadecimal text colour', ()=> {
            const shapes = new Shapes('SVG', 'F0F0F0', '0F0F0F');
            const result = '#F0F0F0'
            expect(shapes.textColour).toEqual(result);
        });
    });

    describe('logoColour', () => {
        it('return hexadecimal logo colour', ()=> {
            const shapes = new Shapes('SVG', 'F0F0F0', '0F0F0F');
            const result = '#0F0F0F'
            expect(shapes.logoColour).toEqual(result);
        });
    });

    describe('render method', () => {
        it('method should throw an error', ()=> {
            const shapes = new Shapes('SVG', 'white', 'green');
            const error = new Error(`Shapes class's children must implement render method.`);
            expect(shapes.render).toThrowError(error);
        });
    });
});