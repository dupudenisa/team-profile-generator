const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
​
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
​
const render = require("./lib/htmlRenderer");
​
const inquirer = require("inquirer");

inquirer.prompt([
    {
        message: "What role are you trying to assign?",
        name: "role"
    },


]).then(function (response) {
    //let template

    if(response.role == "Manager")
    {
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


        ]).then(function (response){

            const manager = new Manager(response.name, response.id,response.email,response.officeNumber); 

        })
    }

    else if(response.role == "Intern")
    {
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


    ]).then(function(response){
        
        const intern = new Intern(response.name, response.id, response.email, response.school);
    
    })
 }
    else if (response.role == "Engineer") {
    
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
               name:"email"
           },
           {
               message: "What is the engineer's GitHub username?",
               name: "Github"
           }

       ]).then(function(response){

        const Engineer = new Engineer(response.name, response.id, response.email, response.Github);
       })
    }

})


​
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
​
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
​
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
​
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.
​
// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
