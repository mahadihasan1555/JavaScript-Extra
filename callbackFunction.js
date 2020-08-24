//when and how to use javascript callback function

//A function passed to another function is often referred to as a “callback” in JavaScript.

function mapAction(item) {
    // do stuff to an item
  }
  array.map(mapAction)

  array.map(mapAction)



  function first(){
    console.log(1);
  }
  function second(){
    console.log(2);
  }
  first();
  second();

//Callback function

  function greeting(name) {
    alert('Hello ' + name);
  }
  
  function processUserInput(callback) {
    var name = prompt('Please enter your name.');
    callback(name);
  }
  
  processUserInput(greeting);



  //concept of event bubble and event delegation