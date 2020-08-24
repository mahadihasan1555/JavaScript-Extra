//new keyword, class and object difference

class person {
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroPerson = new person("hero", "balam", 200);
console.log(heroPerson);

const friendsPerson = new person("mahadi", "hasan", 2000);
console.log(friendsPerson);
