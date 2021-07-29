class Employee {
    constructor(name, email, id){
        this.name = name;
        this.email = email;
        this.id = id;
    }
   getName() {
       return this.name;
   }

}


module.exports = Employee;