const Manager = require("../lib/Manager")

test("getRole() should return 'manager' ",() => {
    const test = "manager"
    const manager = new Manager("neo", 1, "mranderson@gmail.com",)
    expect(manager.getRole()).toBe(test)
});