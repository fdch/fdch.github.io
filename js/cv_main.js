
/////////////////////////////////           ///////////
//////////                       /         ///////////
//////////                        /       ///////////
//////////  this is the CV script  /     ///////////
//////////                          /   ///////////
//////////                           / ///////////
//////////////////////////////        ///////////

function mainCV() {

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
  
  // randomColor(color_preset["mid"], [bodyTag, headerTag[0]] );
    
  loadJSON(globals, function(response) { 
    
    g = JSON.parse(response);

    loadGlobals(g);
  
    if(!loaded) loaded = loadAll(allGS);
  
    setTimeout(function(){
      displayCV(allCVsections[0]);
    }, 100);
  
    setTimeout(function(){ 
      displayAllCV(allCVsections.slice(1));
      tuner(mainTag.getElementsByTagName('h2'),"#4C77BA");
      // loaded = 1;
    }, 3000);

  });
}