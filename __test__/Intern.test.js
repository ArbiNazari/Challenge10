const Intern = require("../lib/Intern.js");

describe("Intern", () => {
  const name = "Arbi Nazari";
  const id = "";
  const email = "Arbinazari@homtial.com";
  const school = "University of Mars";
  const role = "Intern";
  const testIntern = new Intern(name, id, email, school);

  it("this must return the correct school", () => {
    expect(testIntern.getSchool()).toBe(school);
  });

  it("this must return the Intern name when requested", () => {
    expect(testIntern.getName()).toBe(name);
  });

  it("this must return the Intern id when requested", () => {
    expect(testIntern.getId()).toBe(id);
  });

  it("this must return the Intern email when requested", () => {
    expect(testIntern.getEmail()).toBe(email);
  });

  it("this must return the Intern role when requested", () => {
    expect(testIntern.getRole()).toBe(role);
  });
});