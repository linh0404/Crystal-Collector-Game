// PSEUDOCODE

// 1. randomly generate a number between 19-120 and display on page
// 2. randomly generate 4 numbers between 1-12 adn assign to the four buttons
// 3. create a calculator so that each time each button is pressed, it adds to the total score
// 4. if else statement:
// if score > target, you lose
// if score < target, continue
// if score = target, you win

var target = [];
var diamond = [];
var topaz = [];
var ruby = [];
var garnet = [];
var score = 0;

target = Math.floor(Math.random() * 120) + 19;
console.log(target)

diamond = Math.floor(Math.random() * 12) + 1;
console.log(diamond)

topaz = Math.floor(Math.random() * 12) + 1;
console.log(topaz)

ruby = Math.floor(Math.random() * 12) + 1;
console.log(ruby)

garnet = Math.floor(Math.random() * 12) + 1;
console.log(garnet)


document.getElementById("randomNumber").innerHTML= target;

document.getElementById("totalNumber").innerHTML= score;
