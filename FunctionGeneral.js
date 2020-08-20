//Global vs local variable IIFE function expression vs declaration

function addTodo(task){
    //local variable
    const newTaskElement = document.createElement("li");
}

//global variable

var name = "Mahadi";

function addUser(){
    var friendsName = "Hasan" 
    console.log(name);
}


addUser();
// console.log(friendsName);

// immediately invoked function expressions  function
 // IIFE
(() => {})()

(function (){
     friendsNames = "Hasan" 
    console.log(friendsNames);
})();

//function expression vs declaration

function doStuff() {}; //Function declaration
const doStuff = function() {}; //Function expression
