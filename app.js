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

// const calculator = {
//     add: function(a, b){
//         console.log(a+b);
//     },
//     minus: function(a, b){
//         console.log(a-b);
//     },
//     mul: function(a, b){
//         console.log(a*b);
//     },
//     div: function(a, b){
//         console.log(a/b);
//     },
//     pow: function(a, b){
//         console.log(a**b);
//     },
// }
// calculator.add(2,6);
// calculator.minus(3,5);
// calculator.mul(3,10);
// calculator.div(9, 2);
// calculator.pow(2, 10);

// age = 29;
// function calculateKrAge(ageOfForeigner){
//     return ageOfForeigner+2;
// }
// console.log(calculateKrAge(age));
// alert("your age is " + age + "years old. but korea age is " + calculateKrAge(age) + "years old.");

// const age = prompt("How old are you??");
// console.log(typeof age + age);
// console.log(isNaN(age));

// if (condition) {
//     // condition === true;
// } else {
//     // condition === false;
// }
// if (isNaN(age) === false){
//     console.log("숫자 입니다!");
// } else if (age === "exit") {
//     console.log("Exit");
// } else {
//     console.log("숫자가 아닙니다!");
// }

// const age = parseInt(prompt("How old are you???"));

// if (isNaN(age) || age <= 0) {
//     console.log("Please write a real positive number.");
// } else if (age < 18) {
//     console.log("You are too young.");
// } else if (age >= 18 && age <= 80) {
//     console.log("You can drink!");
// } else if (age > 80 && age <= 100) { 
//     console.log("You should exercise.");
// } else {
//     console.log("You cannot drink!");
// }

// const title = document.getElementById("title");
// console.log(title);
// title.innerText = "PSLeon";

// const hellos = document.getElementsByClassName("hello");
// console.log(hellos);

// const title = document.getElementsByTagName("h1");
// console.log(title);

// const title = document.querySelector(".hello h1");
// console.log(title);

// const title = document.querySelectorAll(".hello h1");
// title[1].innerText = "Hello!";

// const h1 = document.querySelector(".hello h1");

// function handleTitleClick() {
//     h1.style.color = "blue";
//     h1.innerText = "Mouse was clicked!"
// }
// function handleTitleMouseEnter() {
//     h1.style.color = "red";
//     h1.innerText = "Mouse is here!";
// }
// function handleTitleMouseLeave() {
//     h1.style.color = "black";
//     h1.innerText = "Mouse is gone!";
// }

// function handleWindowResize() {
//     document.body.style.backgroundColor = "tomato";
//     h1.innerText = "Window was resized!";
// }

// function handleWindowCopy() {
//     alert("Don't copy my web site!");
// }

// function handleWindowOffline() {
//     h1.innerText = "Your wifi is offline";
// }

// function handleWindowOnline() {
//     h1.innerText = "Your wifi is online";
// }

// h1.addEventListener("click", handleTitleClick);
// h1.addEventListener("mouseenter", handleTitleMouseEnter);
// h1.addEventListener("mouseleave", handleTitleMouseLeave);

// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);

// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);

// const h1 = document.querySelector(".hello h1");
// function handleTitleClick() {
//     const currentColor = h1.style.color;
//     let newColor;
//     if (currentColor === "blue"){
//         newColor = "tomato";
//     } else {
//         newColor = "blue";
//     }
//     h1.style.color = newColor;
//     h1.innerText = "Mouse was clicked!"
//     console.log(h1.style.color);
// }

// h1.addEventListener("click", handleTitleClick);

const h1 = document.querySelector(".hello h1");
function handleTitleClick() {
    // const currentClass = h1.classList;
    const activeClass = "active";
    h1.classList.toggle(activeClass);
    // if (currentClass.contains(activeClass)){
    //     currentClass.remove(activeClass);
    // } else {
    //     currentClass.add(activeClass);
    // }
}

h1.addEventListener("click", handleTitleClick);