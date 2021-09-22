const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name,id,email) {
        super(name,id,email)
    }

    getRole() {
         return "manager"
    }
}

module.exports = Manager;