const inquirer = require("inquirer");
const fs = require("fs");

function white() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'which',
            message: 'engineer or intern',
            choices: ['engineer', 'intern', 'neither']
        }
    ]).then(val => {
        if (val.which == 'engineer') {
            engineer();
        } else if (val.which == 'intern') {
            intern();
        } else {
            create();
        }
    })
}

function manager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'manager'
        },
        {
            type: 'input',
            name: 'id',
            message: 'manager id'
        },
        {
            type: 'input',
            name: 'email',
            message: 'manager email'
        },
        {
            type: 'input',
            name: 'github',
            message: 'manager github'
        }
    ]).then(val => {
        const mngr = new mngr(val.name, val.id, val.email, val.github);
        console.log(mngr);
    })
}

function engineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'engineer name'
        },
        {
            type: 'input',
            name: 'id',
            message: 'engineer id'
        },
        {
            type: 'input',
            name: 'email',
            message: 'engineer email'
        },
        {
            type: 'input',
            name: 'github',
            message: 'engineer github'
        }
    ]).then(val => {
        const eng = new eng(val.name, val.id, val.email, val.github);
        console.log(eng);
    })
};

function intern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'intern name'
        },
        {
            type: 'input',
            name: 'id',
            message: 'intern id'
        },
        {
            type: 'input',
            name: 'email',
            message: 'intern email'
        },
        {
            type: 'input',
            name: 'github',
            message: 'intern github'
        }
    ]).then(val => {
        const int = new int(val.name, val.id, val.email, val.github);
        console.log(int);
    })
};

