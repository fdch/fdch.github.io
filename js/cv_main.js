
/////////////////////////////////           ///////////
//////////                       /         ///////////
//////////                        /       ///////////
//////////  this is the CV script  /     ///////////
//////////                          /   ///////////
//////////                           / ///////////
//////////////////////////////        ///////////

function mainCV() {

  console.log(loaded);
  
  if(!loaded)  {
    // globals
    loadJSON("https://fdch.github.io/data/global.json", function(response)
    { 
      g = JSON.parse(response)
      loadGlobals(g);
    });
    loadCV();
    loaded = 1;
  }

  htmlTag   = document.getElementsByTagName('html')[0];
  htmlTag.style.fontFamily = fonts[2];

  bodyTag   = document.getElementsByTagName('body')[0];
  headerTag = document.getElementsByTagName('header');
  mainTag   = document.getElementsByTagName('main')[0];
  footerTag = document.getElementsByTagName('footer')[0];
  footerTag.style.display = 'none';  
  headerTag[0].setAttribute('onclick',"displayCV(\'reset\');");
  resized();

  headerTag[0].style.borderBottom = "3px solid black";    
  headerTag[0].style.marginBottom = "10px";    
  randomColor(color_preset["mid"], [bodyTag, headerTag[0]] );

  setTimeout(function(){
    displayCV(allCVsections[0]);
  }, 100);

  setTimeout(function(){ 
    loadCV();
    toggle(allCVsections[0].toLowerCase());
  }, 3000);

}