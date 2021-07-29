const inquirer = require("inquirer")
const fs = require("fs");


let employeeRoster = [];

const managerQuestion = [
    {
        type: "input",
        name: "managername",
        message: "What is the manager's name?",
    }, {
        type: "input",
        name: "managerid",
        message: "What is the manager's id number?"
    }, {
        type: "input",
        name: "manageremail",
        message: "What is the manager's email?"
    }, {
        type: "input",
        name: "officenumber",
        message: "What is the manager's office number?"
    }
];

const engineerQuestion = [
    {
        type: "input",
        name: "engineername",
        message: "What is the engineer's name?",
    }, {
        type: "input",
        name: "engineerid",
        message: "What is the engineer's id number?"
    }, {
        type: "input",
        name: "engineeremail",
        message: "What is the engineer's email?"
    }, {
        type: "input",
        name: "githubname",
        message: "What is the engineer's GitHub username?"
    }
]

const internQuestion = [
    {
        type: "input",
        name: "internname",
        message: "What is the intern's name?",
    }, {
        type: "input",
        name: "internid",
        message: "What is the intern's id number?"
    }, {
        type: "input",
        name: "internemail",
        message: "What is the intern's email?"
    }, {
        type: "input",
        name: "schoolname",
        message: "What school does the intern's attend?"
    }
]

const list = [{
    type: "list",
    name: "EmployeeType",
    choices: [
        "Manager",
        "Engineer",
        "Intern",
        "Exit"
    ],
    message: "Hello, Please select a new employee."
}]

const promptSelection = () => {
    inquirer.prompt(list).then(answer => {
        switch (answer.EmployeeType) {
            case "Manager": promptManager(); break;
            case "Engineer": promptEngineer(); break;
            case "Intern": promptIntern(); break;
            default: generateHtml();
        }
    })
}

const promptManager = () => {
    inquirer.prompt(managerQuestion).then(answer => {
        employeeRoster.push(new Manager(answer.managername, answer.managerid, answer.manageremail, answer.officenumber));
        promptSelection();
    })
}

const promptEngineer = () => {
    inquirer.prompt(engineerQuestion).then(answer => {
        employeeRoster.push(new Engineer(answer.engineername, answer.engineerid, answer.engineeremail, answer.githubname));
        promptSelection();
    })
}

const promptIntern = () => {
    inquirer.prompt(internQuestion).then(answer => {
        employeeRoster.push(new Intern(answer.internname, answer.internid, answer.internemail, answer.schoolname));
        promptSelection();
    })
}

const generateHtml = () => {
    fs.writeFile(outputPath, render(employeeRoster), (err) => {
        if (err) throw err;
        console.log('File saved at ' + outputPath);
    })
}

promptSelection();