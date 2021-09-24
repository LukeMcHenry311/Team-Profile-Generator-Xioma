const Intern = require("../lib/Intern")

test("getRole() should return 'intern' ",() => {
    const test = "intern"
    const intern = new Intern("neo", 1, "mranderson@gmail.com",)
    expect(intern.getRole()).toBe(test)
});