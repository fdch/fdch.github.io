
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
    
  loadJSON(globals, function(response) { 
    
    g = JSON.parse(response);

    loadGlobals(g);
    let i;
    loaded = await loadAll(allGS);

    for (i=0; i<allCVsections.length; i++) {
      let load= await displayCV(allCVsections[i]);
      if (load) continue;
    }

    if (load && loaded) tuner(mainTag.getElementsByTagName('h2'),"#4C77BA");



    // if (!loaded) {
    
    //   loadAll(allGS);

    //   let i=0;
      
    //   setTimeout(function(){
    //     displayCV(allCVsections[i]);
    //   }, 100);
    
    //   setTimeout(function(){ 
        // for (i=1; i<allCVsections.length; i++)
        //   displayCV(allCVsections[i]);

    //     tuner(mainTag.getElementsByTagName('h2'),"#4C77BA");
    //     loaded = 1;
    //   }, 3000);
    
    // };

  });
}