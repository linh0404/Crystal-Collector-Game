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
var diamond = "";
var topaz = "";
var ruby = "";
var garnet = "";
var gems = [];

// calculate random target number between 19 - 120
target = Math.floor(Math.random() * 120) + 19;
console.log(target)

// calculate 4 random no.s between 1 - 12
for (var i = 0; i < 4 ; i++) {
    var a = Math.floor(Math.random() * 12) + 1;
    gems.push(a);
}

// assign a random number from the array to each crystal
diamond = gems[0];
topaz = gems[1];
ruby = gems[2];
garnet = gems[3];

//display target and scores on the html
document.getElementById("randomNumber").innerHTML= target;
document.getElementById("totalNumber").innerHTML= score;

//reset function 





// $(document).ready(function() {
//     $('#diamond').click(function() {
//         alert('clicked');
//         this.value = diamond;
//     });
// })

// $(document).ready(function() {
//     $('#topaz').click(function() {
//         alert('clicked');
//         this.value = topaz;
//     })
// })

// $(document).ready(function() {
//     $('#garnet').click(function() {
//         alert('clicked');
//         this.value = garnet;
//     })
// })

// $(document).ready(function() {
//     $('#ruby').click(function() {
//         alert('clicked');
//         this.value = ruby;
//     })
// })

})