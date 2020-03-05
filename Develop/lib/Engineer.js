// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");


class Engineer extends Employee{

    constructor(name, id, email, github) {

        //super imports the variables created in the employee class
        super(name, id, email);
        this.github = github; 

    }

    getGithub(){
        return this.github; 
    }

    getRole(){
        //sets role
        return "Engineer"; 
    }


}

//exports class
module.exports = Engineer;