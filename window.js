//window, global variable, global scope

//global
var name = "mahadi";
function add (num1, num2){
    //if var is not declared then it's turn global unless local
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