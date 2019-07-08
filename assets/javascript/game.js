// PSEUDOCODE

// 1. randomly generate a number between 19-120 and display on page
// 2. randomly generate 4 numbers between 1-12
// - push these numbers into an array
// - assign these numbers to each button
// 3. create a calculator so that each time each button is pressed, it adds to the total score
// 4. if else statement:
// if score > target, you lose
// if score < target, continue
// if score = target, you win
// create a reset function and call it at win/ lose scenarios

$(document).ready(function() {

var target = [];
var score = 0;
var gems = [];


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

$(document).ready(function() {
    $('#diamond').click(function() {
        alert('clicked');
        this.value = diamond;
    });
})

$(document).ready(function() {
    $('#topaz').click(function() {
        alert('clicked');
        this.value = topaz;
    })
})

$(document).ready(function() {
    $('#garnet').click(function() {
        alert('clicked');
        this.value = garnet;
    })
})

$(document).ready(function() {
    $('#ruby').click(function() {
        alert('clicked');
        this.value = ruby;
    })
})

})