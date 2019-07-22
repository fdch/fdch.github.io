/*
 * Menu Items
 * 
*/

var mitem = [
	"init", 
	"bio", 
	"unwork", 
	"papers", 
	"events",
	"people",
	"touch",
	"games", 
	"cv" // ,
	// "audio",
	// "video"
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

var fonts = [
	"Courier",
	"Arial",
	"Helvetica",
	"Times New Roman",
	"Courier New",
	"Times",
	"Verdana",
	"Georgia",
	"Palatino"
];

var color_preset = {  // for randomColor()
	"mid"  : [55,200,100,20],
	"high" : [30,200,50,100],
	"rand" : [255,0,255,0]
};

var tday        = new Date(); // today's date
var maxWidth    = 600;        // maximum Width
var maxHeight   = 600;        // maximum Height
var w           = width();    // width 
var h           = height();   // height
var loaded      = 0;          // flag for loaded/unloaded in loadAll()
var notified    = 0;          // flag for console logging in main()
var widthFactor = 1.0;        // articleWidth()
var hAlpha      = 1.0;        // randomColor()
var minHHeight  = 55;         // min header height used in resizeHeader()
var mypad       = 15;         // padding used in element()
var bRad        = 20;         // border radius used in tuner() and img()
var tilde 		= " ~ ";      // tilde separator used in displayCVTeachi()
// var currpage    = 0;          // current page used in imgClicker()
// var t           = 4333;    // delay time
var latest_bio_pic = "fdch_pic-lq.jpeg";            // latest biography pic
var latest_bkg_pic = ["orkna", "orkna-1.png"]; // latest background pic

/*
 * Spreadsheets
 * 
*/

var spreadsheets= "https://spreadsheets.google.com/feeds/list/";
var sheetID     = "1e5dh1sZX1QuFFioC-1ofcPIPhwU9i-lvUzOzn4_3SLQ/";
var cvID        = "1vViMWDsMRnbGUgP44XNDlQrLQ3MsdgO9W91mM4MxJtw/";
var altjson     = "/public/values?alt=json";
var allGS       = [
	spreadsheets+sheetID+"1"+altjson,
	spreadsheets+sheetID+"2"+altjson,
	spreadsheets+sheetID+"3"+altjson,
	spreadsheets+sheetID+"4"+altjson,
	spreadsheets+cvID   +"1"+altjson,
	spreadsheets+cvID   +"2"+altjson,
	spreadsheets+cvID   +"3"+altjson,
	spreadsheets+cvID   +"4"+altjson
];

/*
 * Videos
 * 
*/

var vimeo       = [
	"https://player.vimeo.com/video/",
	"?title=0&byline=0&portrait=0&likes=0&watchlater=0&share=0"
];

var youtube     = [
	"https://www.youtube.com/embed/",
	"?rel=0&amp;controls=0&amp;showinfo=0"
];

var featURL     = [
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


/*
 * Forms
 * 
*/

var formD = [articleWidth(maxWidth),height()];

var formL = [
	"https://docs.google.com/forms/d/e/1FAIpQLS",
	"/viewform"
];

var formE = [
	"<iframe src=\"https://docs.google.com/forms/d/e/1FAIpQLS",
	"/viewform?embedded=true\" width=\""+formD[0]+"\" height=\""+formD[1]+"\" \
	frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\">Loading...</iframe>"
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

var forms = {
	[allCVsections[1]]:"els-Lj6MXZOFfUvyxLHp8uhdkNzADgh3KGjWV0-CJPUiGnkA",//
	[allCVsections[2]]:"cCNndRyaJTIqOI4KDnDxu3OSdLeVAMAAYI1p_D-ymTLi9Y7g",//
	[allCVsections[3]]:"fVU3VMgZvkY3kGnG-OezP02MgqOvhwS6Z6APOflTE-ShvQVg",//
	[allCVsections[4]]:"d51ZlszfuGuvMA9WXpY56mlottnn-26JZ_whsfaG-hX_uZFw",//
	[allCVsections[5]]:"cr_d39dnsctc4jfCZ-Tn9g6MyUsXZB0wzOPssV80KITISLfA",//
	[webSections[0]]  :"cnzdRLIMTy2arVYeIYOIJS_SPdedxngAhs8qbp8gnoJpIOhw",//
	[webSections[1]]  :"cYgPrlbPXm3B9FDQghaaey8d5X6DpZhsOqMLP36DfrpRsOJA",//
	[webSections[2]]  :"ftCkAv9TzkzlgAi8dcJNofLYYWc_k8WtSet3SQTf2ObOuyMA",//
};

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

// var rotImgStyle= [
// 	"float:left",
// 	"margin:5px 0 0 5px",
// 	"clip-path:circle(30% at 50% 50%)",
// 	"-webkit-clip-path:circle(50% at 50% 50%)"
// ];
