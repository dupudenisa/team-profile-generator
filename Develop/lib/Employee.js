// TODO: Write code to define and export the Employee class


class Employee {

    constructor(name, id, email) {
        name = name;
        id = id;
        email = email;
    }

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
        return Employee;
    }

}


module.exports = employee;


