///////////////////////////\\\\\\\\\  ////////////////////  \\\\\\\\\\    ///
//////           //////////        \\ //////////            //////////    ///
//////           //////////         \\//////////            //////////    ///
//////////////   //////////         ////////////            /////////////////
//////           //////////        // //////////            //////////    ///
//////           //////////       //  //////////            //////////    /// 
//////           //////////////////   ////////////////////  //////////    ///
let random_video = false;

function main()
{
  var v='';
  
  loadJSON(globals, async function(response) { 
      g = JSON.parse(response)
      await loadGlobals(g).then(()=>{
        if(!loaded) {
          console.log("Loading...");
          loadAll(allGS).then(() => {
            console.log("Done with load function.");
            loaded = 1
          }); // load asynchronously
        } else {
          console.log("Already loaded.");
        }
      });
  });

  if(!htmlTag) {
    htmlTag =document.getElementsByTagName('html')[0];
  }

  if(!headerTag) {
    headerTag = document.getElementsByTagName('header');
    headerTag[0].style.borderBottom = "10px solid black";
    headerTag[0].style.paddingBottom = "5px";
  }

  resized(); // needs to be after headerTag
  
  if(!mainTag) {
    mainTag = document.getElementsByTagName('main')[0];
  }
  
  if(!bodyTag) {
    bodyTag = document.getElementsByTagName('body')[0];
  }

  if(random_video) {
    v = featURL[pdRandom(featURL.length)];
  } else {
    v = featURL[0];
    random_video = true;
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

  

  // randomColor(color_preset["high"], [bodyTag, headerTag[0]] );

  htmlTag.style.fontFamily   = fonts[0];

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
  if (!mobile)
  { 
    iframeTag.style.minHeight    = "100%";
  } else
  {
    iframeTag.style.minHeight    = "40%";
  }
  iframeTag.style.border       = "none";
  if (!mobile) iframeTag.style.marginTop    = "10px";

  // setInterval( function(){ funImage(rotImg) }, t);

  loadJSON(games, async function(response) { 
      g = JSON.parse(response)
      await loadGames(g);
  });
}