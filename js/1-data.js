/*
 * Menu Items
 * 
 */
const mitem = [
  "init",
  "blog",
  "bio",
  "work",
  "writings",
  "code",
  "releases",
  "news",
  "toros",
  // "cv",
  // "people",
  // "touch",
  // "projects",
  // "audio",
  // "video"
];
const allCVsections = [
  "Personal",
  "Teaching",
  "Awards",
  "Works",
  "Collaborations",
  "Performances"
];

const webSections = [
  "People",
  "Events",
  "Writings"
]
const fonts = [
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

const color_preset = { // for randomColor()
  "mid": [55, 200, 100, 20],
  "high": [30, 200, 50, 100],
  "rand": [255, 0, 255, 0]
};

const globals = "https://fdch.github.io/data/global.json"
const games = "https://fdch.github.io/data/games.json"

const tday = new Date(); // today's date
const maxWidth = 600; // maximum Width
const maxHeight = 600; // maximum Height
let w = width(); // width 
let h = height(); // height
let loaded = 0; // flag for loaded/unloaded in loadAll()
const notified = 0; // flag for console logging in main()
const widthFactor = 1.0; // articleWidth()
const hAlpha = 1.0; // randomColor()
const minHHeight = 55; // min header height used in resizeHeader()
const mypad = 12; // padding used in element()
const bRad = 0; // border radius used in tuner() and img()
const tilde = " ~ "; // tilde separator used in displayCVTeachi()
let ee = blob;
// const currpage    = 0;          // current page used in imgClicker()
// const t           = 4333;    // delay time

// latest biography pic
const latest_bio_pic = "camarahalac_biopic-original.png";
// latest background pic
const latest_bkg_pic = ['fdch.github.io', "imgone.png"];

/*
 * Spreadsheets
 * 
 */
const hom = `y=AIzaSyC4k3KyQQ${ee}`
const spreadsheets = "https://sheets.googleapis.com/v4/spreadsheets";
const sheetID = "1e5dh1sZX1QuFFioC-1ofcPIPhwU9i-lvUzOzn4_3SLQ";
const cvID = "1vViMWDsMRnbGUgP44XNDlQrLQ3MsdgO9W91mM4MxJtw";

const websheets = [
  "works",
  "papers",
  "events",
  "people",
  "projects",
  "releases"
]
const cvsheets = [
  "work",
  "education",
  "papers",
  "teaching",
  "awards",
  "presentations",
  "colabs",
  "perform",
  "adminis",
]

function getSheetURL(sheetName, sheetID, ending) {
  const alt = `ke${hom}1${randomSeed[0]}`;
  return `${spreadsheets}/${sheetID}/values/${sheetName}${ending}/?${alt}`;
}

const allGS = websheets.map(v => getSheetURL(v, sheetID, "Ordered")).concat(cvsheets.map(v => getSheetURL(v, cvID, "Final")))

/*
 * Videos
 * 
 */

const vimeo = [
  "https://player.vimeo.com/video/",
  "?title=0&byline=0&portrait=0&likes=0&watchlater=0&share=0"
];

const youtube = [
  "https://www.youtube.com/embed/",
  "?rel=0&amp;controls=0&amp;showinfo=0"
];

const featURL = [
  youtube[0] + "vnEYecQjJH4" + youtube[1],
  youtube[0] + "74wdsiK_jUU" + youtube[1],
  youtube[0] + "hXONutQ_vYc" + youtube[1],
  youtube[0] + "GA0_ieFjpuM" + youtube[1],
  youtube[0] + "gErNVvwsOdI" + youtube[1],
  youtube[0] + "HpPNVJsn3XQ" + youtube[1],
  vimeo[0] + "168692629" + vimeo[1],
  vimeo[0] + "189384117" + vimeo[1],
  vimeo[0] + "137084409" + vimeo[1],
  vimeo[0] + "135750747" + vimeo[1],
  vimeo[0] + "189537568" + vimeo[1],
  vimeo[0] + "189548950" + vimeo[1],
  vimeo[0] + "128082938" + vimeo[1],
  vimeo[0] + "128763368" + vimeo[1],
  vimeo[0] + "103288412" + vimeo[1],
  vimeo[0] + "93202065" + vimeo[1],
  vimeo[0] + "300566098" + vimeo[1],
  vimeo[0] + "531445988" + vimeo[1],
  // vimeo[0]   + "477326096"   + vimeo[1]   
];


/*
 * Forms
 * 
 */

const formD = [articleWidth(maxWidth), height()];

const formL = [
  "https://docs.google.com/forms/d/e/1FAIpQLS",
  "/viewform"
];

const formE = [
  "<iframe src=\"https://docs.google.com/forms/d/e/1FAIpQLS",
  "/viewform?embedded=true\" width=\"" + formD[0] + "\" height=\"" + formD[1] + "\" \
	frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\">Loading...</iframe>"
];

const somestring = 'kontakte';
const disableEnter = [
  "<script>",
  "$(document).keypress(",
  "    function(event){",
  "    if (event.which == '13') {",
  "       event.preventDefault();",
  "     }",
  "});",
  "</s" + "cript>",
];

const forms = {
  [allCVsections[1]]: "els-Lj6MXZOFfUvyxLHp8uhdkNzADgh3KGjWV0-CJPUiGnkA", //
  [allCVsections[2]]: "cCNndRyaJTIqOI4KDnDxu3OSdLeVAMAAYI1p_D-ymTLi9Y7g", //
  [allCVsections[3]]: "fVU3VMgZvkY3kGnG-OezP02MgqOvhwS6Z6APOflTE-ShvQVg", //
  [allCVsections[4]]: "d51ZlszfuGuvMA9WXpY56mlottnn-26JZ_whsfaG-hX_uZFw", //
  [allCVsections[5]]: "cr_d39dnsctc4jfCZ-Tn9g6MyUsXZB0wzOPssV80KITISLfA", //
  [webSections[0]]: "cnzdRLIMTy2arVYeIYOIJS_SPdedxngAhs8qbp8gnoJpIOhw", //
  [webSections[1]]: "cYgPrlbPXm3B9FDQghaaey8d5X6DpZhsOqMLP36DfrpRsOJA", //
  [webSections[2]]: "ftCkAv9TzkzlgAi8dcJNofLYYWc_k8WtSet3SQTf2ObOuyMA", //
};

const formLinks = {
  [allCVsections[1]]: formL[0] + forms[allCVsections[1]] + formL[1],
  [allCVsections[2]]: formL[0] + forms[allCVsections[2]] + formL[1],
  [mitem[1]]: formL[0] + forms[allCVsections[3]] + formL[1],
  [allCVsections[4]]: formL[0] + forms[allCVsections[4]] + formL[1],
  [allCVsections[5]]: formL[0] + forms[allCVsections[5]] + formL[1],
  [mitem[4]]: formL[0] + forms[webSections[0]] + formL[1],
  [mitem[3]]: formL[0] + forms[webSections[1]] + formL[1],
  [mitem[2]]: formL[0] + forms[webSections[2]] + formL[1],
  "games": "",
  [mitem[5]]: "",
  [mitem[0]]: ""
};

// const rotImgStyle= [
// 	"float:left",
// 	"margin:5px 0 0 5px",
// 	"clip-path:circle(30% at 50% 50%)",
// 	"-webkit-clip-path:circle(50% at 50% 50%)"
// ];
