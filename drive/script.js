var ball   = document.querySelector('.ball');
var garden = document.querySelector('.garden');
var output = document.querySelector('.output');

var maxX = garden.clientWidth  - ball.clientWidth;
var maxY = garden.clientHeight - ball.clientHeight;



var canvas;

var TOT_NUM = 16;
let units = [];
var ptr=10;

var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var samplerate = audioCtx.sampleRate;

var channels = 2;
const pannerOptions = {pan: 0};

var tabs = Object.keys(tables);

// canvas = createCanvas(windowWidth, windowHeight);



  // for (i=0;i<TOT_NUM;i++)
  // {
    // drops.push(new aUnit(i)); // see drops.js
  // }


// function handleOrientation(event) {
//   var x = event.beta;  // In degree in the range [-180,180]
//   var y = event.gamma; // In degree in the range [-90,90]

//   // output.innerHTML  = "beta : " + x + "\n";
//   // output.innerHTML += "gamma: " + y + "\n";

//   // Because we don't want to have the device upside down
//   // We constrain the x value to the range [-90,90]
//   // if (x >  90) { x =  90};
//   // if (x < -90) { x = -90};

//   // To make computation easier we shift the range of 
//   // x and y to [0,180]
//   x += 90;
//   y += 90;

//   // x /= 180;
//   // y /= 180;

//   console.log(x,y);
//   // 10 is half the size of the ball
//   // It center the positioning point to the center of the ball
//   units[0].updateNode(x,y);

// }

units[0] = new aUnit(0);

document.addEventListener('click', function() {
  units[0].startNode();

});



window.addEventListener('deviceorientation', units[0].updateNode);