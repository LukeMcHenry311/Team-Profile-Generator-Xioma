// packages
const fs = require('fs');
const path = require('path');
const inquirer = require("inquirer");
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

// push employee info into sayori
const sayori = []

const render = require("./page-template.js");

function questions() {
    
        function createManager() {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'Mname',
                    message: 'what is the managers name?'
                },
                {
                    type: 'input',
                    name: 'Mid',
                    message: 'what is the managers id?'
                },
                {
                    type: 'input',
                    name: 'Memail',
                    message: 'what is the managers email?'
                },
            ]).then(answers => {
                const manager = new Manager(answers.Mname, answers.Mid, answers.Memail);
                sayori.push(manager);
                createTeam();
            });
        };

        function createTeam() {
            inquirer.prompt([
                {
                    type: 'list',
                    name: 'natsuki',
                    message: 'engineer, intern, or done?',
                    choices: ['engineer', 'intern', 'done'],
                },
            ]).then(response => {
                switch (response.natsuki) {
                    case 'engineer':
                        createEngineer();
                        break;
                    case 'intern':
                        createIntern();
                        break;
                    default:
                        createTeam();
                }
            })
        }

        function createEngineer() {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'Ename',
                    message: 'what is th engineers name?'
                },
                {
                    type: 'input',
                    name: 'Eid',
                    message: 'what is the engineers id?'
                },
                {
                    type: 'input',
                    name: 'Eemail',
                    message: 'what is the engineers email?'
                },
            ]).then(answers => {
                const engineer = new Engineer(answers.Ename, answers.Eid, answers.Eemail);
                sayori.push(engineer);
                createTeam();
            })
        }

        function createIntern() {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'Iname',
                    message: 'what is the interns name?'
                },
                {
                    type: 'input',
                    name: 'Iid',
                    message: 'what is the interns id?'
                },
                {
                    type: 'input',
                    name: 'Iemail',
                    message: 'what is the interns email?'
                },
            ]).then(answers => {
                const intern = new Intern(answers.Iname, answers.Iid, answers.Iemail);
                sayori.push(intern);
                createTeam();
            })
        }

    function buildTeam() {}
    createManager();
};
questions();