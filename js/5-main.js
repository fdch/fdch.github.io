///////////////////////////\\\\\\\\\  ////////////////////  \\\\\\\\\\    ///
//////           //////////        \\ //////////            //////////    ///
//////           //////////         \\//////////            //////////    ///
//////////////   //////////         ////////////            /////////////////
//////           //////////        // //////////            //////////    ///
//////           //////////       //  //////////            //////////    /// 
//////           //////////////////   ////////////////////  //////////    ///
function main(vid)
{
  let v;
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

  if(!loaded) loadAll(allGS);

  if(!htmlTag) {
    htmlTag =document.getElementsByTagName('html')[0];
  } 
  if(!headerTag) {
    headerTag = document.getElementsByTagName('header');
    headerTag[0].style.borderBottom = "10px dotted black";
    headerTag[0].style.paddingBottom = "10px";
  }

  resized(); // needs to be after headerTag
  
  if(!mainTag) {
    mainTag = document.getElementsByTagName('main')[0];
  }
  
  if(!bodyTag) {
    bodyTag = document.getElementsByTagName('body')[0];
  }

  if(vid) {
    v = featURL[pdRandom(featURL.length)];
  } else {
    v = featURL[featURL.length-1];
  }

  if(!h1titlTag) {
    h1titlTag = document.getElementsByTagName('h1')[0];
    h1titlTag.style.display = "inline";
  }
  // if(!rotImgTag) { // rotating icon

    // imgDivTag = document.getElementById('imgdiv');
    // rotImgTag = makeRot(rotImg, imgDivTag);
  // }
  
  if(!navigaTag) {
    navigaTag = document.getElementById('navtag');
    navSelTag = makeDropdowns("navseltag", navigaTag, mitem, 'display(this)');
  }

  if(!footerTag) {
    footerTag=document.getElementsByTagName('footer')[0];
  }

  
  navSelTag.autofocus      = true;
  navigaTag.style.display  = "inline";
  navigaTag.style.position = "relative";
  navigaTag.style.bottom   = "5px";

  

  randomColor(color_preset["high"], [bodyTag, headerTag[0]] );

  htmlTag.style.fontFamily   = fonts[pdRandom(fonts.length)];

  h1titlTag.setAttribute('onclick',"display(\'init\');");


  footerTag.style.position     = "fixed";
  footerTag.style.padding      = "5px 10px 0px 10px";
  footerTag.style.borderRadius = "10px";
  footerTag.style.textAlign    = "center";
  footerTag.style.fontSize     = "0.8em";
  footerTag.style.height       = "20px";
  footerTag.style.background   = "black";
  footerTag.style.color        = "white";
  footerTag.style.bottom       = "0px";
  footerTag.innerHTML          = "Copyleft © "+tday.getFullYear()
  footerTag.style.left         = "50%";
  let pw                       = footerTag.getBoundingClientRect();
  let mw                       = w/2-pw.width/2+"px";
  footerTag.style.left         = mw;

  bodyTag.setAttribute('onresize', 'resized()');

  headerTag[0].style.background= "";
  
  iframeTag                    = makeBackVideo("",mainTag,v);
  iframeTag.style.display      = 'inline';
  iframeTag.style.position     = "absolute";
  iframeTag.style.minWidth     = "100%";
  iframeTag.style.minHeight    = "100%";
  iframeTag.style.border       = "none";
  if (!mobile) iframeTag.style.marginTop    = "10px";

  // setInterval( function(){ funImage(rotImg) }, t);

}