//object method property review

const person = {
    firstName: "Mahadi",
    lastName: "hasan",
    salary: 1200,
    //anonymus fucntion
    getFulName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount, tips, tax){   I
        this.salary = this.salary - amount - tips - tax;
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


//difference between bind, call and apply

person.chargeBill.call(heroPerson, 900);
person.chargeBill.call(heroPerson, 9900 , 200, 100);
console.log(heroPerson.salary);

person.chargeBill.call(friendlyPerson, 900, 200, 100);
console.log(friendlyPerson.salary);
console.log(person.salary);

person.chargeBill.apply(heroPerson, [300, 300, 30]);
person.chargeBill.apply(heroPerson, [400, 300, 30]);
console.log(heroPerson.salary);
