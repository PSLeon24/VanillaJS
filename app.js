// CONST || LET
// const a = 5;
// const b = 2;
// let myName = "YeongMin";

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log("My name is " + myName);

// CONST
// const amIFat = false;

// Arrays
// const arrayPractice = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// console.log(arrayPractice);
// console.log(arrayPractice[0]);

// Objects
// const player = {
//     name: "Yeongmin",
//     age: 22,
//     habit: "programming",
// };

// console.log(player);
// console.log(player.name)
// console.log("my name is " + player.name + " and I'm " + player.age + "years old. my habbit is " + player.habit);

// function sayHello(playerName) {
//     console.log(playerName + " Hello!")
// }
// sayHello("Yeongmin");
// sayHello("Minsu");
// sayHello("Yeongjin");

// const player = {
//     name: "Yeongmin",
//     sayHello: function(PersonName){
//         console.log(PersonName + " Hello");
//     }
// }
// console.log(player);
// player.sayHello("Lynn");
// player.sayHello(player.name);
// player.sayHello();

const calculator = {
    add: function(a, b){
        console.log(a+b);
    },
    minus: function(a, b){
        console.log(a-b);
    },
    mul: function(a, b){
        console.log(a*b);
    },
    div: function(a, b){
        console.log(a/b);
    },
    pow: function(a, b){
        console.log(a**b);
    },
}
calculator.add(2,6);
calculator.minus(3,5);
calculator.mul(3,10);
calculator.div(9, 2);
calculator.pow(2, 10);