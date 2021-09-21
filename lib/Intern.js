const Employee = require('./Employee');

// pass in the name, id, and email to easily retrieve
class Intern extends Employee {
    constructor(name, id, email) {
        super(name, id, email);
    }
    getRole() {
        return "intern"
    }
}

// export intern so we can pull it from employee class
module.exports = Intern;