const Engineer = require("../lib/Engineer")

test("getRole() should return 'engineer' ",() => {
    const test = "engineer"
    const engineer = new Engineer("neo", 1, "mranderson@gmail.com",)
    expect(engineer.getRole()).toBe(test)
});