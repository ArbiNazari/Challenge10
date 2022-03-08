const Manager = require("../lib/Manager.js");

describe("Manager", () => {
  const name = "Arbi Nazari";
  const id = "";
  const email = "arbinazari@hotmail.com";
  const officeNumber = "Mars Elon Station1";
  const role = "Manager";
  const testManager = new Manager(name, id, email, officeNumber);

  it("this must return correct office number", () => {
    expect(testManager.officeNumber).toBe(officeNumber);
  });

  it("this must return the Manager name when requested", () => {
    expect(testManager.getName()).toBe(name);
  });

  it("this must return the Manager id when requested", () => {
    expect(testManager.getId()).toBe(id);
  });

  it("this must return the Manager email when requested", () => {
    expect(testManager.getEmail()).toBe(email);
  });

  it("this must return the Manager role when requested", () => {
    expect(testManager.getRole()).toBe(role);
  });
});