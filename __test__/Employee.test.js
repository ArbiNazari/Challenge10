const Employee = require("../lib/Employee.js");

describe("Getters", () => {
  const name = "Arbi Nazari";
  const id = "";
  const email = "arbinazari@hotmail.com";
  const role = "Employee";

  const testEmployee = new Employee(name, id, email);

  it("this must return the Employee name when requested", () => {
    expect(testEmployee.getName()).toBe(name);
  });

  it("this must return the Employee id when requested", () => {
    expect(testEmployee.getId()).toBe(id);
  });

  it("this must return the Employee email when requested", () => {
    expect(testEmployee.getEmail()).toBe(email);
  });

  it("this must return the Employee role when requested", () => {
    expect(testEmployee.getRole()).toBe(role);
  });
});