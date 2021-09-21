const Employee = require('./Employee')

// pass in the name, id, and email to easily retrieve
class Manager extends Employee {
    constructor(name, id, email) {
        super(name, id, email)
    }
    getRole() {
        return "manager"
    }
}

// export manager so that we can pull it from employee class
module.exports = Manager;