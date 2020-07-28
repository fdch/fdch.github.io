
/////////////////////////////////           ///////////
//////////                       /         ///////////
//////////                        /       ///////////
//////////  this is the CV script  /     ///////////
//////////                          /   ///////////
//////////                           / ///////////
//////////////////////////////        ///////////

function mainCV() {
  loaded=0;

  if (!htmlTag) htmlTag   = document.getElementsByTagName('html')[0];
  htmlTag.style.fontFamily = fonts[2];

  if (!bodyTag)   bodyTag   = document.getElementsByTagName('body')[0];
  if (!headerTag) headerTag = document.getElementsByTagName('header');
  if (!mainTag)   mainTag   = document.getElementsByTagName('main')[0];
  if (!footerTag) footerTag = document.getElementsByTagName('footer')[0];
  footerTag.style.display = 'none';  
  headerTag[0].setAttribute('onclick',"displayCV(\'reset\');");
  
  resized();

  headerTag[0].style.borderBottom = "3px solid black";    
  headerTag[0].style.marginBottom = "10px";    
  
  randomColor(color_preset["mid"], [bodyTag, headerTag[0]] );
  
  // console.log("load globals and cv");
  
  loadJSON(globals, function(response) { 
    
    g = JSON.parse(response);
    
    // console.log("loading Globals");
    
    loadGlobals(g);
    // console.log(contactMessage);

    // console.log("before: "+loaded);

    if (!loaded) {
      loadAll(allGS);
      // loadCV();
      setTimeout(function(){
        displayCV(allCVsections[0]);
      }, 100);
      setTimeout(function(){ 
        console.log('loadCV');
        loadCV();
        toggle(allCVsections[0].toLowerCase());
      }, 3000);
    };
    
    // console.log("after: "+loaded);
  });


}