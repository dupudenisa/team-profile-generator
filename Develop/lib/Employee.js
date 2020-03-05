// TODO: Write code to define and export the Employee class


class Employee {

    constructor(name, id, email) {
        this.name = name;
        this.id = id; 
        this.email = email; 

    }

    /* 
        Sets variables to be used in all the child classes of the super class "Employees"
    */

    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        //sets role
        return "Employee";
    }

}

//exports class
module.exports = Employee;


