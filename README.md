  ![badge](https://img.shields.io/badge/license-apache-blue)

# Object-Oriented Programming Challenge: Team Profile Generator 

  ## Table-of-Contents
  * [Description and Task](#description)
  * [License](#license)   
  * [Contributing](#contributing)
  * [Questions](#questions)


 ## [Description](#table-of-contents)
 
 Application Design and Function

 As a manager, I want to generate a webpage that displays my team's basic info
 so that I have quick access to their emails and GitHub profile.


 # My Task and Application Requirments

   - When Prompted in a command-line application, user is asaked for team members
     and their iformation.
   - Then a HTML file is that displays a nicely formatted team roster based on user input.
   - When user clicks on an email address in the HTML; default email program opens and populates 
     the to field of the email with the address. 
   - When GitHub usernamd is cliented, the profile opens in a _Blank tab,
   - When user stats the application, user is prompted to enter the team manager’s name, 
     employee ID, email address, and office number.
   - When user enters the team manager’s name, employee ID, email address, and office number; user
     presented with a menu with the option to add an engineer or an intern or to finish building their team.
   - If "engineer" option is selected, user is prompted to enter the engineer’s name, ID, email, and 
     GitHub username, and is taken back to the menu.
   - If intern option if selected, user is prompted to enter the intern’s name, ID, email, and school, 
     and taken back to the menu.
   - An HTML file is genereated when user decides to finish building their team. 

    The application must have these classes: Employee, Manager, Engineer, and Intern.

    Application Structuring:
    .
    ├── __tests__/             //jest tests
    │   ├── Employee.test.js
    │   ├── Engineer.test.js
    │   ├── Intern.test.js
    │   └── Manager.test.js
    ├── dist/                  // rendered output (HTML) and CSS style sheet      
    ├── lib/                   // classes
    ├── src/                   // template helper code 
    ├── .gitignore             // indicates which folders and files Git should ignore
    ├── index.js               // runs the application
    └── package.json           


After installing the required applications (Node.js) - run: node index.js
 
   Video Guide - [video guide](https://www.awesomescreenshot.com/video/7497518?key=39b1b50897de8d6ae47e34774bafb4f6)
  
  ## [License](#table-of-contents)
  The application is covered under the following license:
  
  [apache](https://choosealicense.com/licenses/apache)
    
    
  ## [Contributing](#table-of-contents)
  
    Feel free to contact me if there are any issues or ideas to implement.
    
  ## [Questions](#table-of-contents)
  Contact Information Below:
  [GitHub](https://github.com/arbinazari)

  [Email: arbinazari@hotmail.com](mailto:arbinazari@hotmail.com)
