var latest_bio_pic = "bio_vienna.jpg";
var latest_bkg_pic = ["orkna", "orkna-1.png"];

var htmlTag, bodyTag, headerTag, mainTag, footerTag;
var h1titlTag, navigaTag, iframeTag, rotImgTag, 
navSelTag, imgDivTag, catDivTag,catSelTag;
var mainBack;
var allUnwork={}, allPapers={}, allEvents={}, allPeople={};
var allPerfor={}, allAwards={}, allCollab={}, allTeachi={};
var allCategories=[], allTitles=[],allWorkId=[],uCategories=[];
var allVideos=[], allAudios=[];

var userLang;

var mitem = [
"init",
"bio",
"unwork",
"papers",
"events",
"people",
"touch",
"cv",
"games",
// "audio",
// "video"
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
var email 		= "fch226@nyu.edu";
var facebookUrl = "https://www.facebook.com/fedecamarahalac/";
var twitter 	= "http://www.twitter.com/ffddcchh";
var yt 			= "https://www.youtube.com/channel/UCzOx-iKaNx9ruddNI6ykTIA";
var flickr 		= "http://www.flickr.com/federicocamarahalac";
var linkedin 	= "http://linkedin.com/in/fedecamarahalac";
var instagram 	= "https://instagram.com/ffddcchh";

var contactGif 	=  raw + imgpath + "zissou.gif";
var loadingUrl 	=  raw + imgpath + "fdch.gif";

var backImg 	= "url(\'"+loadingUrl+"\') center no-repeat;";
var bioImage 	=  raw + imgpath + latest_bio_pic;
var bkgImage 	=  raw + latest_bkg_pic[0]+ "/master/img/" + latest_bkg_pic[1];

var rotImgStyle= [
	"float:left",
	"margin:2.5px 0 0 5px",
	"clip-path:circle(50% at 50% 50%)",
	"-webkit-clip-path:circle(40% at 50% 50%)"
];
var rotImg = [
	raw+imgpath+"imgone-76.png",
	raw+imgpath+"imgone-76-i.png",
	rotImgStyle.join(";"),
	"rotImgId",
	"fdch~",
	"imgClicker(this);"
];

var tilde = " ~ ";

var color_preset = {
	mid  : [55,200,100,20],
	high : [30,200,50,100],
	rand : [255,0,255,0]
};

var title 		= "fdch";
var subtitle 	= "Fede Cámara Halac";
var unclink 	= "http://artes.unc.edu.ar";
var nyulink 	= "http://gsas.nyu.edu";
var unc 		= "La Universidad Nacional de Córdoba";
var nyuTitle 	= "Music Composition & Theory";
var uncTitle 	= "Licenciatura en Composición Musical";
var nyu 		= "New York University";
var advisors 	= ["Jaime Oliver","Elizabeth Hoffman"];
var currently 	= ["PhD Candidate","Candidato de PhD"];
var tesis 		= [
					"Database Music",
					"Música con Base de Datos"
];
var bday = new Date(1988, 5, 8, 12, 1, 13, 128);

var bioEnglish = subtitle+" studied "+uncTitle+" at "+unc+".\
 He is a "+currently[0]+" in "+nyuTitle+" at "+nyu+" with "+advisors.join(" and ")+".\
 His research focuses on "+tesis[0]+".\
 His work is available at "+url;

var bioSpanish = subtitle+" estudió "+uncTitle+" en "+unc+".\
 Es "+currently[1]+" de "+nyuTitle+" en "+nyu+" con "+advisors.join(" y ")+".\
 Su investigación se centra en la "+tesis[1]+".\
 Su trabajo se encuentra disponible en "+url;

var personal = [
"Full Name: Federico Nicolás Cámara Halac",
"Date of Birth : "+ linkify(bday,"https://en.wikipedia.org/wiki/May_8",1),
"Country of Birth : Argentina",
"Mailing Address : 24 Waverly Place r.268. New York, NY 10003. USA",
"Phone Number : (1) 347-302-0982",
"E-mail : "+ email,
"Website : "+ linkify(url,url),
"Graduate Education : "+ currently[0] + " in "+nyuTitle+" at "+nyu+" (2013-2019)",
"Undergraduate : " +uncTitle + " at the " +unc+ " (2006-12)",
];

var mylinks = {
	"Instagram"	:instagram,
	"SoundCloud":scloud,
	"Github"	:repo,
	"Vimeo"		:video,
	"Youtube"	:yt,
	"Tumblr"	:blog,
	"Facebook"	:facebookUrl,
	"Twitter"	:twitter,
	"Flickr"	:flickr,
	"LinkedIn"	:linkedin,
}

var vimeo = [
"https://player.vimeo.com/video/",
"?title=0&byline=0&portrait=0&likes=0&watchlater=0&share=0"
];

var youtube = [
"https://www.youtube.com/embed/",
"?rel=0&amp;controls=0&amp;showinfo=0"
];

var featURL = [
youtube[0] + "hXONutQ_vYc" + youtube[1],
youtube[0] + "GA0_ieFjpuM" + youtube[1],
youtube[0] + "gErNVvwsOdI" + youtube[1],
youtube[0] + "HpPNVJsn3XQ" + youtube[1],
vimeo[0]   + "168692629"   + vimeo[1]  ,
vimeo[0]   + "189384117"   + vimeo[1]  ,
vimeo[0]   + "137084409"   + vimeo[1]  ,
vimeo[0]   + "135750747"   + vimeo[1]  ,
vimeo[0]   + "189537568"   + vimeo[1]  ,
vimeo[0]   + "189548950"   + vimeo[1]  ,
vimeo[0]   + "128082938"   + vimeo[1]  ,
vimeo[0]   + "128763368"   + vimeo[1]  ,
vimeo[0]   + "103288412"   + vimeo[1]  ,
vimeo[0]   + "93202065"    + vimeo[1]  ,
vimeo[0]   + "300566098"    + vimeo[1]   
];

var spreadsheets = "https://spreadsheets.google.com/feeds/list/";
var sheetID = "1e5dh1sZX1QuFFioC-1ofcPIPhwU9i-lvUzOzn4_3SLQ/";
var cvID = "1vViMWDsMRnbGUgP44XNDlQrLQ3MsdgO9W91mM4MxJtw/";
var altjson = "/public/values?alt=json";

var allGS = [
	spreadsheets+sheetID+"1"+altjson,
	spreadsheets+sheetID+"2"+altjson,
	spreadsheets+sheetID+"3"+altjson,
	spreadsheets+sheetID+"4"+altjson,
	spreadsheets+cvID   +"1"+altjson,
	spreadsheets+cvID   +"2"+altjson,
	spreadsheets+cvID   +"3"+altjson,
	spreadsheets+cvID   +"4"+altjson
];


var allCVsections = [
	"Personal",
	"Teachings",
	"Awards",
	"Unworks",
	"Collaborations",
	"Performances"
];

var webSections = [
	"People",
	"Events",
	"Papers"
]

var formD = [articleWidth(maxWidth),height()];

var formL = [
	"https://docs.google.com/forms/d/e/1FAIpQLS",
	"/viewform"
]
var formE = [
	"<iframe src=\"https://docs.google.com/forms/d/e/1FAIpQLS",
	"/viewform?embedded=true\" width=\""+formD[0]+"\" height=\""+formD[1]+"\" \
	frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\">Loading...</iframe>"
]
var fonts = [
"\'Courier\'",
"\'Arial\'",
"\'Helvetica\'",
"\'Times New Roman\'",
"\'Courier New\'",
"\'Times\'",
"\'Verdana\'",
"\'Georgia\'",
"\'Palatino\'"
];

var imgArray = [raw+imgpath+"imgone.png",raw+imgpath+"imgtwo.png"];
var somestring='kontakte';
var disableEnter = [
	"<script>",
	"$(document).keypress(",
	"    function(event){",
	"    if (event.which == '13') {",
	"       event.preventDefault();",
	"     }",
	"});",
	"</s" + "cript>",
];


var submit = [
	"\"No, what is important is neither linearity or non-linearity, \
	but the change, the degree of change from something that doesn't move \
	to other events with different tempos in particular.\"",
	"\"I no longer limit myself.\"",
	"<head><meta name=\"viewport\" \
	content=\"width=device-width, initial-scale=1\">\
	<link rel=stylesheet href=\""+repo+"/css/style.css\"></style>"+disableEnter.join("")+"\
	<link rel='shortcut icon' href=\""+raw+imgpath+"imgone.png\"></link>\
	<title>Submit Form</title></head><body><h2>Submit Form</h2><div id=maindiv>\
	<form><h3>Enter password:</h3>\
	<input type=password id=krl size=12/><p>Click Submit when done</p>\
	<input type=button value=Submit id=authOK /></form></div></body>",somestring,
	"width=200, height=200, location=0, toolbar=0, resizable=0, scrollbars=0"
];

var forms = {
	[allCVsections[1]]:"els-Lj6MXZOFfUvyxLHp8uhdkNzADgh3KGjWV0-CJPUiGnkA",//
	[allCVsections[2]]:"cCNndRyaJTIqOI4KDnDxu3OSdLeVAMAAYI1p_D-ymTLi9Y7g",//
	[allCVsections[3]]:"fVU3VMgZvkY3kGnG-OezP02MgqOvhwS6Z6APOflTE-ShvQVg",//
	[allCVsections[4]]:"d51ZlszfuGuvMA9WXpY56mlottnn-26JZ_whsfaG-hX_uZFw",//
	[allCVsections[5]]:"cr_d39dnsctc4jfCZ-Tn9g6MyUsXZB0wzOPssV80KITISLfA",//
	[webSections[0]]  :"cnzdRLIMTy2arVYeIYOIJS_SPdedxngAhs8qbp8gnoJpIOhw",//
	[webSections[1]]  :"cYgPrlbPXm3B9FDQghaaey8d5X6DpZhsOqMLP36DfrpRsOJA",//
	[webSections[2]]  :"ftCkAv9TzkzlgAi8dcJNofLYYWc_k8WtSet3SQTf2ObOuyMA",//
}
var formLinks = {
	[allCVsections[1]]: formL[0] + forms[allCVsections[1]] + formL[1],
	[allCVsections[2]]: formL[0] + forms[allCVsections[2]] + formL[1],
	[mitem[1]]        : formL[0] + forms[allCVsections[3]] + formL[1],
	[allCVsections[4]]: formL[0] + forms[allCVsections[4]] + formL[1],
	[allCVsections[5]]: formL[0] + forms[allCVsections[5]] + formL[1],
	[mitem[4]]        : formL[0] + forms[webSections[0]]   + formL[1],
	[mitem[3]]        : formL[0] + forms[webSections[1]]   + formL[1],
	[mitem[2]]        : formL[0] + forms[webSections[2]]   + formL[1],
	"games"           :"",
	[mitem[5]]        :"",
	[mitem[0]]        :""

};

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



