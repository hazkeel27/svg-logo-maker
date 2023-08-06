const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const svg = require('./svg');

class CLI {
    constructor() {}

    run() {
        const logoCriteria = [
            {
                type: 'input',
                message: 'Enter logo text: ',
                name: 'logoText',
            },
            {
                type: 'input',
                message: 'Enter text colour: ',
                name: 'textColour',
            },
            {
                type: 'list',
                message: 'Enter logo shape: ',
                name: ['triangle', 'circle', 'sqaure'],
            },
            {
                type: 'input',
                message: 'Enter logo colour (OR a hexadecimal number): ',
                name: 'logoColour',
            },
        ];

        return inquirer
            .prompt(logoCriteria)
            .then((data) => {
                return writeFile(
                    join(__dirname, '..', 'logo.svg'),
                    svg(data.logoText, data.textColour, data.logoShape, data.logoColour)
                );
            })
            .then(() => {console.log(`Generated logo.svg`)})
            .catch((error) => {
                console.log(`Caught Error: ${error}`);
            });
    }
}

module.exports = CLI;
