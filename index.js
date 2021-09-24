// packages
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const path = require('path');
const fs = require('fs');
const inquirer = require("inquirer");

// push employee info into sayori
const sayori = []

// path to go from index to src/hive.html
const sendit = path.resolve(__dirname, "src");
const shipit = path.join(sendit, "hive.html");

const build = require("./src/page-template.js");

function questions() {
        createManager();
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
                console.log(sayori);
                createTeam();
            });
        };

        function createTeam() {
            inquirer.prompt([
                {
                    type: 'list',
                    name: 'code',
                    message: 'engineer, intern, or done?',
                    choices: ['Engineer', 'Intern', 'done'],
                },
            ]).then(response => {
                switch (response.code) {
                    case 'Engineer':
                        createEngineer();
                        break;
                    case 'Intern':
                        createIntern();
                        break;
                    default:
                        buildTeam();
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
                console.log(sayori);
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
                console.log(sayori);
                createTeam();
            })
        }

    function buildTeam() {
        console.log(sayori);
        fs.writeFileSync(shipit, build(sayori));
    }
    
};
questions();