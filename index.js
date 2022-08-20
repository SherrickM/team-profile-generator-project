const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const render = require("./src/generateHtml");
const teamArray = [];

// Added



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
  fs.writeFileSync('./dist/index.html', render(teamArray), 'utf8')

}
start();


