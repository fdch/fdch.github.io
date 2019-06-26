
var htmlTag, bodyTag, headerTag, mainTag, footerTag;
var h1titlTag, navigaTag, iframeTag, rotImgTag; 
var navSelTag, imgDivTag, catDivTag, catSelTag;
var mainBack;
var allUnwork={}, allPapers={}, allEvents={}, allPeople={};
var allPerfor={}, allAwards={}, allCollab={}, allTeachi={};
var allCategories=[], allTitles=[],allWorkId=[],uCategories=[];
var allVideos=[], allAudios=[];


var userLang;

var backImg  = "url(\'"+loadingUrl+"\') center no-repeat;";
var bioImage =  g.raw + g.imgpath + latest_bio_pic;
var bkgImage =  g.raw + latest_bkg_pic[0]+ "/master/img/" + latest_bkg_pic[1];

var rotImgStyle= [
	"float:left",
	"margin:5px 0 0 5px",
	"clip-path:circle(30% at 50% 50%)",
	"-webkit-clip-path:circle(50% at 50% 50%)"
];
var rotImg = [
	g["raw"]+g["imgpath"]+"imgone-76.png",
	g["raw"]+g["imgpath"]+"imgone-76-i.png",
	rotImgStyle.join(";"),
	"rotImgId",
	g["name"],
	"imgClicker(this);"
];

var tilde = " ~ ";

var mylinks = {
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
vimeo[0]   + "300566098"   + vimeo[1]   
];

var spreadsheets = "https://spreadsheets.google.com/feeds/list/";
var sheetID      = "1e5dh1sZX1QuFFioC-1ofcPIPhwU9i-lvUzOzn4_3SLQ/";
var cvID         = "1vViMWDsMRnbGUgP44XNDlQrLQ3MsdgO9W91mM4MxJtw/";
var altjson      = "/public/values?alt=json";

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

var imgArray = [
	g["raw"]+g["imgpath"]+"imgone.png",
	g["raw"]+g["imgpath"]+"imgtwo.png"
];
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
	<link rel=stylesheet href=\""+g["repo"]+"/css/style.css\"></style>"+disableEnter.join("")+"\
	<link rel='shortcut icon' href=\""+g["raw"]+g["imgpath"]+"imgone.png\"></link>\
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
