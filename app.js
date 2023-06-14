const fs = require('fs');
const inquirer = require('inquirer');
const questions = require('./questions');
const utils = require('./utils');
const open = require('open');

const prompt = inquirer.createPromptModule();

prompt(questions).then((answers) => {
    const html = utils.generateHTML(answers);
    // console.log(html);
    try {
        fs.writeFileSync('index.html', html);
        open('index.html');
    } catch (err) {
        console.log(err);
    }
})