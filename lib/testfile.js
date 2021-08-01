const inquirer = require("inquirer");

let promtQuestions= [
inquirer.prompt()
    {
      type: "input",
      name: "managername",
      message: "What is the manager's name?",
      validate: (managernameInput) => {
        if (managernameInput) {
          return true;
        } else {
          console.log("(Requierd) Please enter A Manager!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "managerid",
      message: "What is the manager's id number?",
      validate: (manageridInput) => {
        if (manageridInput) {
          return true;
        } else {
          console.log("(Requierd) Please enter an ID number!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "manageremail",
      message: "What is the manager's email?",
      validate: (manageremailInput) => {
        if (manageremailInput) {
          return true;
        } else {
          console.log("(Requierd) Please enter an email!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "officenumber",
      message: "What is the manager's office number?",
      validate: (officenumberInput) => {
        if (officenumberInput) {
          return true;
        } else {
          console.log("(Requierd) Please enter an office number!");
          return false;
        }
      },
    },
  
]