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
var cv 			=  url + "/cv/";
var contactGif 	=  raw + imgpath + "zissou.gif";
var loadingUrl 	=  raw + imgpath + "fdch.gif";
var color_preset = {
	"mid"  : [55,200,100,20],
	"high" : [30,200,50,100],
	"rand" : [255,0,255,0]
};
var contactMessage = [
 "Send me an email at fch226((at)) and I will get in touch with you\
  (as fast as nonhumanly possible :)",
 "Mandáme una correa electrónica a "+nyuid+" así me pongo en contacto\
  lo más rápido que pueda (dentro de lo nohumánamente posible ;)",
  "Follow me on social media :)"
]
var latest_bio_pic = "fdchmac.png";
var latest_bkg_pic = ["orkna", "orkna-1.png"];

