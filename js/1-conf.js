// load global data
var g={}; // all global variables
loadJSON("data/global.json", function(response) { 
	let f = JSON.parse(response);
	g = f;
	console.log(f);
});

// if (Object.keys(g).length === 0 && g.constructor === Object)
// {
// 	console.log("global object is empty");

// } else {
// 	console.log(g);
// }

var contactMessage = [
	"Send me an email at "+g["email"]+" and I will get in touch with you\
	 (as fast as nonhumanly possible :)",
	"Mandáme una correa electrónica a "+g["email"]+" así me pongo en contacto\
	 lo más rápido que pueda (dentro de lo nohumánamente posible ;)",
	 "Follow me on social media :)"
]
var personal = [
	"Full Name: "+g["fullname"],
	"Date of Birth : <a href=\'"+g["may8th"]+"\' target=\'_blank\''>"+new Date(g["bday"])+"</a>",
	"Country of Birth : " +g["nationality"],
	"Mailing Address : "  +g["address"],
	"Phone Number : "     +g["phone"],
	"E-mail : "           +g["email"],
	"Website : <a href=\'"+g["url"]+"\'>"+g["url"]+"</a>",
	"Graduate Education : <ul><li>"+g["grad"][0]+"</li><li>"+g["grad"][1]+"</li></ul>",
	"Undergraduate :"+g["undergrad"],
];


var mitem = [
"init", "bio", "unwork", "papers", 
"events", "people", "touch", "cv", "games",  // "audio", // "video"
];
var currpage    = 0;
var loaded      = 0;
var loading     = 0;
var notified    = 0;
var tday = new Date();
var w, h;
var t           = 4333;
var maxWidth    = 800;
var maxHeight   = 600;
var widthFactor = 1.1;
var hAlpha      = 1.0;
var minHHeight  = 55;
var mypad       = 15;
var bRad        = 20;
var cv 			=  g["url"]+ "/cv/";
var contactGif 	=  g["raw"]+g["imgpath"] + "zissou.gif";
var loadingUrl 	=  g["raw"]+g["imgpath"] + "fdch.gif";
var color_preset = {
	"mid"  : [55,200,100,20],
	"high" : [30,200,50,100],
	"rand" : [255,0,255,0]
};

var latest_bio_pic = "fdchmac.png";
var latest_bkg_pic = ["orkna", "orkna-1.png"];
