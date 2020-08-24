//object method property review

const person = {
    firstName: "Mahadi",
    lastName: "hasan",
    salary: 1200,
    //anonymus fucntion
    getFulName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount){   
        this.salary = this.salary - amount;
        return this.salary;
    }
}
// console.log(person.lastName);

// person.chargeBill(100);
// console.log(person.salary);


//object use bind to borrow method from another object

//important for interview

const heroPerson ={
    firstName: "Hero",
    lastName : "Balam",
    salary : 20000
}

const friendlyPerson ={
    firstName: "Hero",
    lastName : "kalam",
    salary : 25000
}
person.chargeBill();
const heroBillCharge = person.chargeBill.bind(heroPerson);
heroBillCharge(200);
console.log(heroPerson.salary);
console.log(person);


const friendlyChargeBill = person.chargeBill.bind(friendlyPerson);
friendlyChargeBill(1500);


