// html tags
var htmlTag, bodyTag, headerTag, mainTag, footerTag;
var h1titlTag, navigaTag, iframeTag; 
var navSelTag, imgDivTag, catDivTag, catSelTag;

// data objects
var g={}, mylinks={};
var allUnwork={}, allPapers={}, allEvents={}, allPeople={};
var allPerfor={}, allAwards={}, allCollab={}, allTeachi={};
var allProjects={};

// data arrays
var allCategories=[], allTitles=[], allWorkId=[], uCategories=[];
var allVideos=[], allAudios=[];
var submit=[], contactMessage=[], gameDraw=[];

var bioImage, bkgImage, cv, contactGif, loadingUrl, userLang, mobile, cvpdf;

// var rotImg=[], backImg, imgArray=[], rotImgTag;

userLang = navigator.language || navigator.userLanguage; 
mobile   = mobileCheck();

if(!notified)
{
	console.log("Your browser language is: " + userLang);
	console.log("You are on a "+(mobile?"mobile":"desktop")+" device");
	console.log(navigator.vendor)
	console.log(navigator.userAgent);
	notified=1;
}





// this function below loads up all the globals above
// it is fired from 4-load.js

function loadGlobals(g)
{
	contactMessage = [
	"Mandáme una correa electrónica a "+g["email"]+" así me pongo en contacto\
	 lo más rápido que pueda (dentro de lo nohumánamente posible ;)",
	"Seguime en las medias sociales",
	"Send me an email at "+g["email"]+" and I will get in touch with you\
	 (as fast as nonhumanly possible :)",
	 "Follow me on social media :)"
	]
	cv 			=  g["url"]+ "/cv/";
	cvpdf 		=  g["raw"]+ "/fdch.github.io/master/cv/cv.pdf";
	contactGif 	=  g["raw"]+g["imgpath"] + "zissou.gif";
	loadingUrl 	=  g["raw"]+g["imgpath"] + "fdch.gif";
	submit = [
	"\"No, what is important is neither linearity or non-linearity, \
	but the change, the degree of change from something that doesn't move \
	to other events with different tempos in particular.\"",
	"\"I no longer limit myself.\"",
	"<head><meta name=\"viewport\" \
	content=\"width=device-width, initial-scale=1\">\
	<link rel=stylesheet href=\""+g["repo"]+"/css/style.css\"></style>"+disableEnter.join("")+"\
	<link rel='shortcut icon' href=\""+g["raw"]+g["imgpath"]+"imgone.png\"></link>\
	<title>Submit Form</title></head><body><h2>Submit Form</h2><div id=maindiv>\
	<form><h3>Enter password:</h3>\
	<input type=password id=krl size=12/><p>Click Submit when done</p>\
	<input type=button value=Submit id=authOK /></form></div></body>",somestring,
	"width=200, height=200, location=0, toolbar=0, resizable=0, scrollbars=0"
	];

	imgArray = [
		g["raw"]+g["imgpath"]+"imgone.png",
		g["raw"]+g["imgpath"]+"imgtwo.png"
	];
	mylinks = {
		"Instagram"	:g["instagram"],
		"SoundCloud":g["scloud"],
		"Github"	:g["repo"],
		"Vimeo"		:g["video"],
		"Youtube"	:g["yt"],
		"Tumblr"	:g["blog"],
		"Facebook"	:g["facebookUrl"],
		"Twitter"	:g["twitter"],
		"Flickr"	:g["flickr"],
		"LinkedIn"	:g["linkedin"],
	};
	// rotImg = [
	// 	g["raw"]+g["imgpath"]+"imgone-76.png",
	// 	g["raw"]+g["imgpath"]+"imgone-76-i.png",
	// 	rotImgStyle.join(";"),
	// 	"rotImgId",
	// 	g["name"],
	// 	"imgClicker(this);"
	// ];
	backImg  = "url(\'"+loadingUrl+"\') center no-repeat;";
	bioImage = g["raw"]+g["imgpath"]+latest_bio_pic;
	bkgImage = g["raw"]+latest_bkg_pic[0]+"/master/img/"+latest_bkg_pic[1];
	
	gameDraw = [
		"draw/",
		g["raw"]+g["imgpath"]+"draw.png",
		"Draw concentrical polygons as they get smaller. Print page when you are done.",
		g["repo"] + "misc/tree/master/pong",
		g["raw"]  + "misc/master/pong/screen1.jpg",
		"A Pd Vanilla + Gem version of the pong game.",

		"droplets/",
		g["raw"]+g["imgpath"]+"droplets.png",
		"Touch the floating droplets and move them around.",
	];
	bio_en = g["description"];
	bio_es = g["descripcion"];
	long_description = g["long_description"];
	long_descripcion = g["long_descripcion"];
	epigrafe = g["epigrafe"];
	epigraph = g["epigraph"];
	shortname = g["shortname"];
	mydate = new Date(g["bday"]);

	if(bodyTag) bodyTag.style.background = "url('"+bkgImage+"')";
}