const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { svg } = require('./svg');

class CLI {
    constructor() {}

    // run method is called by index.js file
    run() {
        // array for inquirer questions
        const logoCriteria = [
            {
                type: 'input',
                message: 'Enter logo text: ',
                name: 'logoText',
            },
            {
                type: 'input',
                message: 'Enter text colour (OR a hexadecimal number, ex:F0F0F0): ',
                name: 'textColour',
            },
            {
                type: 'list',
                message: 'Choose logo shape: ',
                name: 'logoShape',
                choices: ['triangle', 'circle', 'square'],
            },
            {
                type: 'input',
                message: 'Enter logo colour (OR a hexadecimal number, ex:F0F0F0): ',
                name: 'logoColour',
            },
        ];

        // return the user questions and the code to generate the logo.svg file
        return inquirer
            .prompt(logoCriteria)
            .then((data) => {
                return writeFile(
                    join(__dirname, '..', 'logo.svg'),
                    svg(data.logoText, data.textColour, data.logoShape, data.logoColour)
                );
            })
            // text printed in console after file is generated
            .then(() => {console.log(`Generated logo.svg`)})
            .catch((error) => {
                console.log(`Caught Error: ${error}`);
            });
    }
}

module.exports = CLI;
