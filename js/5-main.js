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
  if(!htmlTag) {
    htmlTag =document.getElementsByTagName('html')[0];
  } 
  if(!headerTag) {
    headerTag = document.getElementsByTagName('header');
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
  if(!iframeTag){
    iframeTag=makeBackVideo("bkvid",mainTag,v);
  }
  if(!h1titlTag) {
    h1titlTag = document.getElementsByTagName('h1')[0];
    h1titlTag.style.display = "inline";
  }
  if(!rotImgTag) { // rotating icon
    imgDivTag = document.getElementById('imgdiv');
    rotImgTag = makeRot(rotImg, imgDivTag);
  }
  
  if(!navigaTag) {
    navigaTag = document.getElementById('navtag');
    navSelTag = makeDropdowns("navseltag", navigaTag, mitem, 'display(this)');
  }

  if(!footerTag) {
    footerTag=document.getElementsByTagName('footer')[0];
  }

  userLang = navigator.language || navigator.userLanguage; 
  mobile = mobileCheck();
  navSelTag.autofocus = true;
  navigaTag.style.display = "inline";
  navSelTag.style.height = "40px";
  navSelTag.style.width = "100px";
  
  loadAll(allGS);

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
  footerTag.innerHTML          = "Copyright © "+tday.getFullYear()+" - "+ repo
  footerTag.style.left         = "50%";
  let pw                       = footerTag.getBoundingClientRect();
  let mw                       = w/2-pw.width/2+"px";
  footerTag.style.left         = mw;

  bodyTag.style.background     = "url('"+bkgImage+"')";
  bodyTag.setAttribute('onresize', 'resized()');

  headerTag[0].style.background= "";
  

  iframeTag.style.display      = 'inline';
  iframeTag.style.position     = "absolute";
  iframeTag.style.minWidth     = "100%";
  iframeTag.style.minHeight    = "50%";
  iframeTag.style.border       = "none";
  iframeTag.style.marginTop    = "50px";

  setInterval( function(){ funImage(rotImg) }, t);

  console.log("Your browser language is: " + userLang);
  console.log("You are on a "+(mobile?"mobile":"desktop")+" device");
  console.log(navigator.vendor)
  console.log(navigator.userAgent);

}