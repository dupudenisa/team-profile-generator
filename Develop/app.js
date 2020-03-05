/*
    Since I cannot replay the menu prompt after a employee is added the fs action to write an emplyee to the html is after each selection; 
*/
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const menu = require("inquirer-menu");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");

const employees = [];

function teams() {
    inquirer.prompt([
        {
            type: 'list',
            message: "What role are you trying to assign?",
            name: "role",
            choices: ['Manager', 'Engineer', 'Intern', 'Done']
        }
    ]).then(function (response) {
        //let template

        const role = response.role;

        if (role == "Manager") {
            inquirer.prompt([
                {
                    message: "What is the manager's name?",
                    name: "name"
                },

                {
                    message: "What is the manager's id?",
                    name: "id"
                },

                {
                    message: "What is the manager's email?",
                    name: "email"
                },

                {
                    message: "What is the manager's office number?",
                    name: "officeNumber"
                }


            ]).then(function (response) {

                const manager = new Manager(response.name, response.id, response.email, response.officeNumber);

                employees.push(manager);

                fs.writeFile(outputPath, render(employees), function (err, result) {
                    if (err) console.log('error', err);
                });

            })
        }

        else if (role == "Intern") {
            inquirer.prompt([
                {
                    message: "What is your intern's name? ",
                    name: "name"
                },
                {
                    message: "What is the intern's id?",
                    name: "id"
                },
                {
                    message: "What is your intern's email?",
                    name: "email"
                },
                {
                    message: "What school is your intern from?",
                    name: "school"
                }


            ]).then(function (response) {


                const intern = new Intern(response.name, response.id, response.email, response.school);
                employees.push(intern);

                fs.writeFile(outputPath, render(employees), function (err, result) {
                    if (err) console.log('error', err);
                });
            })
        }
        else if (role == "Engineer") {
            inquirer.prompt([
                {
                    message: "What is your engineer's name?",
                    name: "name"
                },
                {
                    message: "What is the engineer's id?",
                    name: "id"
                },
                {
                    message: "What is the engineer's email?",
                    name: "email"
                },
                {
                    message: "What is the engineer's GitHub username?",
                    name: "Github"
                }

            ]).then(function (response) {
                const engineer = new Engineer(response.name, response.id, response.email, response.Github);
                employees.push(engineer);

                fs.writeFile(outputPath, render(employees), function (err, result) {
                    if (err) console.log('error', err);
                });
            })

        }
    })
}

function writeTeams() {

    fs.writeFile("team.html", render(employees), function (err) {
        if (err) throw error

    })
}

function renderHTML() {

    inquirer.prompt([
        {
            type: "list",
            message: "Do you want to add an employee?",
            name: "add",
            choices: ['Yes', 'No']
        }
    ]).then(function (response) {
        if (response.add == 'Yes') {
            teams();
        }
        else {
            console.log("Goodbye");
            //writeTeams();
            
        }

        //renderHTML();

        /*

            Supposed to be able to call function again after one entry, 
            instead creates a duplicate prompt, so it is commented out. 
        */
    })


}

renderHTML();


