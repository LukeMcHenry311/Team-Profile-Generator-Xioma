<<<<<<< HEAD
class Employee {
    constructor(name,id,email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
    getName() {
        return this.name
    }

    getId() {
        return this.id
    }
    
    getEmail() {
        return this.email
    }
    
=======
// class of employee that returns name, id, and email
// easily extended
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
>>>>>>> 9c00603038f8aa887f993dcc4da042c3f7659b53
    getRole() {
        return "employee"
    }
};

module.exports = Employee