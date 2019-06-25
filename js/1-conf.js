var latest_bio_pic = "fdchmac.jpg";
var latest_bkg_pic = ["orkna", "orkna-1.png"];

var mitem = [
"init", "bio", "unwork", "papers", 
"events", "people", "touch", "cv", "games",  // "audio", // "video"
];

var currpage=0, loaded=0, loading=0;

var w, h, t = 4333;
var maxWidth = 850;
var maxHeight = 600;
var widthFactor = 0.9;
var hAlpha = 1.0;
var minHHeight = 55;

var url 		= "https://fdch.github.io";
var repo 		= "https://github.com/fdch/";
var cv 			=  url + "/cv/";
var raw 		= "https://raw.githubusercontent.com/fdch/";
var imgpath 	= "fdch.github.io/master/img/";
var blog 		= "http://ffddcchh.tumblr.com/";
var scloud 		= "https://soundcloud.com/ffddcchh";
var video 		= "https://vimeo.com/fdch";
var nyuid 		= "fch226((at))nyu.edu";
var email 		= "fch226((at))nyu.edu";
var facebookUrl = "https://www.facebook.com/fedecamarahalac/";
var twitter 	= "http://www.twitter.com/ffddcchh";
var yt 			= "https://www.youtube.com/channel/UCzOx-iKaNx9ruddNI6ykTIA";
var flickr 		= "http://www.flickr.com/federicocamarahalac";
var linkedin 	= "http://linkedin.com/in/fedecamarahalac";
var instagram 	= "https://instagram.com/ffddcchh";

var contactGif 	=  raw + imgpath + "zissou.gif";
var loadingUrl 	=  raw + imgpath + "fdch.gif";

var color_preset = {
	mid  : [55,200,100,20],
	high : [30,200,50,100],
	rand : [255,0,255,0]
};

var title 		= "fdch";
var subtitle 	= "Fede Cámara Halac";
var unclink 	= "http://artes.unc.edu.ar";
var nyulink 	= "http://gsas.nyu.edu";
var unc 		= [
"National University of Córdoba",
"Universidad Nacional de Córdoba",
];
var nyuTitle 	= [
"Music Composition and Theory",
"Composición y Teoría Musical"
];
var uncTitle 	= [
"Licenciate in Music Composition",
"Licenciatura en Composición Musical",
];
var nyu 		= [
"New York University",
"Universidad de Nueva York"
];
var advisors 	= [
"Jaime Oliver",
"Elizabeth Hoffman",
// "Martin Daughtry",
// "Robert Rowe",
// "William Brent"
];
var currently 	= ["PhD","PhD"];
var tesis 		= [
"Database Music",
"Música con Base de Datos"
];
var bday = new Date(1988, 5, 8, 12, 1, 13, 128);

var bioSpanish = 
" Fede Cámara Halac investiga y hace sonidos, navega y diseña imágenes, y juega con bases de datos y multimedia. Obtuvo un PhD en Composición y Teoría Musical de la Universidad de Nueva York donde estudió con Jaime Oliver y Elizabeth Hoffman. Estudió Composición Musical en la Universidad Nacional de Córdoba. Su trabajo se encuentra disponible en https://fdch.github.io"

var bioEnglish = 
"Fede Cámara Halac researches and makes sounds, navigates and designs images, and plays with databases and multimedia. He earned a PhD in Composition and Music Theory from New York University where he studied with Jaime Oliver and Elizabeth Hoffman. He studied Music Composition at the National University of Córdoba. His work is available at https://fdch.github.io"

var personal = [
"Full Name: Federico Nicolás Cámara Halac",
"Date of Birth : "+ linkify(bday,"https://en.wikipedia.org/wiki/May_8",1),
"Country of Birth : Argentina",
"Mailing Address : 24 Waverly Place r.268. New York, NY 10003. USA",
"Phone Number : (1) 347-302-0982",
"E-mail : "+ email,
"Website : "+ linkify(url,url),
"Graduate Education : "+ currently[0] + " in "+nyuTitle[0]+" at "+nyu[0]+" (2013-2019)",
"Undergraduate : " +uncTitle[0] + " at the " +unc[0]+ " (2006-12)",
];

var contactMessage = [
 "Send me an email at "+nyuid+" and I will get in touch with you\
  (as fast as nonhumanly possible :)",
 "Mandáme una correa electrónica a "+nyuid+" así me pongo en contacto\
  lo más rápido que pueda (dentro de lo nohumánamente posible ;)",
  "Follow me on social media :)"
]

///make this better:

var gameDraw = [
"draw/",
raw+imgpath+"draw.png",
"Draw concentrical polygons as they get smaller. Print page when you are done.",
repo + "misc/tree/master/pong",
raw  + "misc/master/pong/screen1.jpg",
"A Pd Vanilla + Gem version of the pong game.",

"droplets/",
raw+imgpath+"droplets.png",
"Touch the floating droplets and move them around.",

];

var gameType = [
"<button onclick=\"window.open(\'"+gameDraw[6]+"\')\" >droplets</button>\
	<p>"+gameDraw[8]+"</p>\
	<img onclick=\"window.open(\'"+gameDraw[6]+"\')\" src=\""+gameDraw[7]+"\" width=200/>",

"<button onclick=\"window.open(\'"+gameDraw[0]+"\')\" >draw</button>\
	<p>"+gameDraw[2]+"</p>\
	<img onclick=\"window.open(\'"+gameDraw[0]+"\')\" src=\""+gameDraw[1]+"\" width=200/>",

"<button onclick=\"window.open(\'"+gameDraw[3]+"\')\" >PONG</button>\
	<p>"+gameDraw[5]+"</p>\
	<img onclick=\"window.open(\'"+gameDraw[3]+"\')\" src=\""+gameDraw[4]+"\" width=200/>",

];



