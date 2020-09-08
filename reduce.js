//Explain reduce of an array with example

const nums = [ 23, 32, 42, 52, 32];
// nums.map(num => num*2);
// nums.filter(num => num > 20);
// nums.find(num => num > 23);

// const total = nums.reduce((sum, num) => {
//     console.log(sum, num);
//     return sum + num
// }
//     , 0);
// console.log(total);


const friends = [
    {name: 'mahadi', money: 122},
    {name: 'sahid', money: 122},
    {name: 'nahid', money: 122},
    {name: 'jahid', money: 122}
];

const total = friends.reduce((sum, friend) => {
    console.log(sum, friend);
    return sum + friend.money
}
    , 0);
console.log(total);
