const Engineer = require("../lib/Engineer.js");

describe("Engineer", () => {
  const name = "arbi nazari";
  const id = "";
  const email = "arbinazari@hotmail.com";
  const gitHubUsername = "arbinazari";
  const role = "Engineer";
  const returnedGitHub = `<a href="https://github.com/${gitHubUsername}">https://github.com/${gitHubUsername}</a>`;

  const testEngineer = new Engineer(name, id, email, gitHubUsername);


  it("this must return the Engineer name when requested", () => {
    expect(testEngineer.getName()).toBe(name);
  });

  it("this must return the Engineer id when requested", () => {
    expect(testEngineer.getId()).toBe(id);
  });

  it("this must return the Engineer email when requested", () => {
    expect(testEngineer.getEmail()).toBe(email);
  });

  it("this must return the Engineer role when requested", () => {
    expect(testEngineer.getRole()).toBe(role);
  });
});