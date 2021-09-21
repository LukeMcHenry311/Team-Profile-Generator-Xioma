const Employee = require('./Employee');

// pass in the name, id, and email to easily retrieve
class Engineer extends Employee {
    constructor(name, id, email) {
        super(name, id, email);
    }
    getRole() {
        return "engineer"
    }
}

// export engineer so we can pull it from employee class
module.exports = Engineer;