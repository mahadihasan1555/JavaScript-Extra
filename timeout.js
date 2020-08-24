//Asynchronous Javascript setTimeout, setInterval

function doSomething(){
    console.log(3333);
}
console.log(2222);

doSomething();
//set timeout
setTimeout(doSomething);
setTimeout(doSomething, 10000);
setTimeout(function(){
    console.log("i am waiting");
}, 4000)
setTimeout(() => {
    console.log("see you later", 0);
})
//set interval
setInterval(() => {
    console.log("doing it");
}, 1000);
console.log(4444);
console.log(4444);
console.log(6666);
console.log(7777);
console.log(8888);