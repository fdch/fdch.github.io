var canvas;

var TOT_NUM = 16;
let drops = [];
var ptr=10;

var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var samplerate = audioCtx.sampleRate;

var channels = 2;
const pannerOptions = {pan: 0};

var tabs = Object.keys(tables);

function setup()
{
	canvas = createCanvas(windowWidth, windowHeight);
	frameRate(30);

	for (i=0;i<TOT_NUM;i++)
	{
		drops.push(new aDrop(i)); // see drops.js
	}
}

function draw()
{
	background(255);
	
	stroke(128);
	noFill();

	for (let i=0,dx=0,dy=0; dx<windowWidth;i++)
	{
		dx=i*30+(i*i)+frameCount/20;
		dy=i*i+frameCount/10;
		ellipse(windowWidth/2,windowHeight/2,dx,dy);
	}
	
	stroke(0);
	fill(0);
	
	for (let i=0; i<drops.length;i++)
	{
		drops[i].move();
		drops[i].display();
		drops[i].paint(mouseX,mouseY);
	}
	
	// a small target on the mouse pointer
	stroke(237,34,93);
	line(mouseX - ptr, mouseY, mouseX + ptr, mouseY);
	line(mouseX, mouseY - ptr, mouseX, mouseY + ptr);
}
