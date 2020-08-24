//window, global variable, global scope

var name = "mahadi";
function add (num1, num2){
    var result = num1 + num2;
    console.log("result inside" , name);
    function double (num){
        return num * 2;
    }
    var total = double(result);
    return name;
}
var sum = add(12, 14);
console.log(sum);