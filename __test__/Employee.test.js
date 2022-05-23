const Employee = require("../lib/Employee");

test("Does this new class return an object", () => {
  const emp = new Employee();
  expect(typeof emp).toBe("object");
});

test("Does this class create a new employee wth name id and email", () => {
  const emp = new Employee(4, 5, 6);
  expect(emp.name).toBe(4);
  expect(emp.id).toBe(5);
  expect(emp.email).toBe(6);
  expect(emp.getName()).toBe(4);
  expect(emp.getId()).toBe(5);
  expect(emp.getEmail()).toBe(6);
  expect(emp.getRole()).toBe("Employee");
});
