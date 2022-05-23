const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const generateHTML = require("./src/generateHtml");
const teamArray = [];

// You need a fucntion that will generate html

// - WHEN I start the application THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// - WHEN I enter the team manager’s name, employee ID, email address, and office number THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// - WHEN I select the engineer option THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// - WHEN I select the intern option THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// - WHEN I decide to finish building my team THEN I exit the application, and the HTML is generated

function start() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the team manager's name",
      },
      {
        type: "input",
        name: "id",
        message: "What is the team manager's employee ID",
      },
      {
        type: "input",
        name: "email",
        message: "What is the team manager's e-mail",
      },
      {
        type: "input",
        name: "officeNum",
        message: "What is the team manager's office number",
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNum
      );
      teamArray.push(manager);
      menu();
    });
}

function menu() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "menu",
        message: "Would you like to add a team member?",
        choices: ["Engineer", "Intern", "No"],
      },
    ])
    .then((res) => {
      switch (res.menu) {
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;
        default:
          writeHTML();
          break;
      }
    });
}

function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the  engineer's name",
      },
      {
        type: "input",
        name: "id",
        message: "What is the  engineer's employee ID",
      },
      {
        type: "input",
        name: "email",
        message: "What is the  engineer's e-mail",
      },
      {
        type: "input",
        name: "github",
        message: "What is the  engineer's git hub username? ",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      teamArray.push(engineer);
      menu();
    });
}
function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the  intern's name",
      },
      {
        type: "input",
        name: "id",
        message: "What is the  intern's employee ID",
      },
      {
        type: "input",
        name: "email",
        message: "What is the  intern's e-mail",
      },
      {
        type: "input",
        name: "school",
        message: "What school did your intern go to? ",
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      teamArray.push(intern);
      menu();
    });
}

function writeHTML() {
  console.log(teamArray);
}
start();

// - WHEN I am prompted for my team members and their information THEN an HTML file is generated that displays a nicely formatted team roster based on user input (Write a function that will allow you to generate html page)

// Answers Call back
// .then((answers) => {

//   const htmlPageContent = generateHTML(answers);

//   fs.writeFile('index.html',htmlPageContent,(err) => {
//    err ? console.log(err) : console.log('Sucessful')
// });

// Dynamic
