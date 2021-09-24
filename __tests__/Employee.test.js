const Employee = require("../lib/Employee"); 

test("getName() should return a name", () => {
    const test = "Neo"
    const employee = new Employee("Neo", 1, "mranderson@gmail.com",)
    expect(employee.getName()).toBe(test)
});

test("getId() should return an id number", () => {
    const test = 1
    const employee = new Employee("Neo", 1, "mranderson@gmail.com",)
    expect(employee.getId()).toBe(test)
})

test("getEmail() should return an email address",() => {
    const test = "mranderson@gmail.com"
    const employee = new Employee("Neo", 1, "mranderson@gmail.com")
    expect(employee.getEmail()).toBe(test)
})

test("getRole() should return an employees role",() => {
    const test = "employee"
    const employee = new Employee("Neo", 1, "mranderson@gmail.com",)
    expect(employee.getRole()).toBe(test)
})