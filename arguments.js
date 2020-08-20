//when and how to use arguments in a function

function getFullName(firstName, lastName){
    const fullName = firstName + " " +lastName;
    return fullName;
}

const name = getFullName("mahadi", "hasan", "nahid", "sahid", "jahid");
// console.log(name);

//arguments

function getFullName(firstName, lastName){
    console.log(arguments);
    const fullName = firstName + " " +lastName;
    return fullName;
}

const name = getFullName("mahadi", "hasan", "nahid", "sahid", "jahid");
console.log(name);


function getFullName(firstName, lastName){
    console.log(arguments);
    let fullName = "";
    for (let i = 0; i < arguments.length; i ++){
        const namePart = arguments[i];
        fullName = fullName + " " + namePart;
    }
    return fullName;
}

const name = getFullName("mahadi", "hasan", "nahid", "sahid", "jahid");
console.log(name);