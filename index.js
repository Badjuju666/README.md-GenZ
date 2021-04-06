
const fs = require('fs');
const inquirer = require('inquirer');
const markdown = require('./utility/generateMarkdown');
const axios = require('axios');

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title?",
        validate: title => {
            if (title) {
                return true;

            } else {
                console.log('Your project requiers a title!')
                return false;
            };
        }

    },
    {
        type: "input",
        name: "description",
        message: "Please provide your project's description.",
        validate: description => {
            if (description) {
                return true;
            } else {
                console.log('Must leave a brief description of your work.')
                return false;
            };
        }
    },
    {
        type: 'list',
        name: 'badge',
        message: 'Please provide license information.',
        choices: ['Apache 2.0', 'Boost', 'GNU', 'ISC', 'MIT', 'Mozilla', 'The Artistic License 2.0', 'The Unlicense'],
        validate: badge => {
            if (badge) {
                return true;
            } else {
                console.log('Please choose a license.');
                return false;
            }
        }
    }, 
    {
        type: "input",
        name: "installation",
        message: "Please describe the installation process.",
        validate: installation => {
            if (installation) {
                return true;
            } else {
                console.log('We need to know how to operate your application.')
                return false;
            }
        }
    },
    {
        type: "input",
        name: "usage",
        message: "Explain each step for using the project."
    },
    {
        type: "input",
        name: "contribution",
        message: "Please provide the contributing parties' github username."
    },
    {
        type: "input",
        name: "test",
        message: "Please provide instructions on how the project is tested."
    },
    {
        type: "input",
        name: "username",
        message: "What is your Github username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your Email address?"
    },
    {
        type: "input",
        name: "repo",
        message: "What is your repo link?",
    },
    {
        type: "input",
        name: "screen",
        message: "If you'd like to show off a screenshot, do it here with a link."
    },
];

inquirer
.prompt(questions)
.then(function(data){
    const queryUrl = `https://api.github.com/users/${data.username}`;

    axios.get(queryUrl).then(function(res){
        const github = {
            githubImg: res.data.avatar_url,
            email: res.data.email,
            profile: res.data.html_url,
            name: res.data.name
        };

        fs.writeFile("README.md", markdown(data, github),function(err) {
            if(err){
                throw err;
            };
            console.log('New README.md has generated in directory')
        });
    });

});
function init() {}

init();