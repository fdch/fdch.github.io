function display(x) {
  let section;

  if (typeof x == 'string' || x instanceof String) {
    x = x;
  } else {
    x = x.value;
  }

  htmlTag.style.fontFamily = fonts[pdRandom(fonts.length)];
  
  
  // currpage = mitem.findIndex(item => item === x);
  // console.log("Display \'"+x+"\', currpage: "+currpage);
  // console.log(currpage);

  
  article = resetDisplay(x);
  
  if(article) {
    switch (x) {
      case "games" :
        tuneUp(displayGames(article));
        break;
      case "touch" :
        tuneUp(displayTouch(article));
        break;
      case "bio"   :
        tuneUp(displayBiogra(article));
        break;
      case "unwork":
        //extra stuff for the category selectbox
        
        if(!catDivTag)
        {
          catDivTag = document.createElement('nav');
          catSelTag = makeDropdowns('category', catDivTag, uCategories, 'getValue(this)');
          //makeDropdowns('title', formTag, allTitles);
          catSelTag.autofocus = true;
          catDivTag.className = "headtitle";
          catDivTag.style.display = "inline";
          navigaTag.appendChild(catDivTag)
        } else {
          catDivTag.style.display = 'inline';
        }

        displayUnwork(article,allUnwork);
        break;
      case "papers":
        displayPapers(article,allPapers);
        break;
      case "events":
        displayEvents(article,allEvents);
        break;
      case "people":
        displayPeople(article,allPeople);
        break;
      case "cv"    :
        window.open(cv,"_top");
        break;
      case "video" :
        displayMedia(article,allVideos, 'video');
        break;
      case "audio" :
        displayMedia(article,allAudios, 'audio');
        break;
      default:
      break;
      }
    } else {
      myurl = featURL[pdRandom(featURL.length)];
      console.log("running main("+featURL[pdRandom(featURL.length)]+")");
      main(myurl);
    }
}
function resetDisplay(x){ 
  //remove previous stuff
  var c;
  if (removeChilds(mainTag)) {
    if( !x.localeCompare('init') ) {
        mainTag.style.marginLeft = "0px";
        return void 0; // we are on init page
      } else {
        //remove backvid
        if (iframeTag) {
          iframeTag.style.display = 'none';
          iframeTag.src = '';
        }
        if(catDivTag) catDivTag.style.display = "none";
        //the header
        var headTag = element('header');
        let htitleTag = element("h2", x, '', "display(\'"+x+"\')");
        headTag.appendChild(htitleTag);
        mainTag.appendChild(headTag);
        //the article
        var articlTag = element('article','', x);
        mainTag.appendChild(articlTag);
        articlTag.style.width = articleWidth(maxWidth)+"px";
        return articlTag;
      }
  } else {
    console.log("could not remove elements and create article");
    return void 0; //there was an error
  }
}

function tuner(pars)
{
  if (pars)
  {
    for (let i=0;i<pars.length;i++)
    {
      pars[i].style.backgroundColor = "#000000";
      pars[i].style.padding         = mypad + "px";
      pars[i].style.borderRadius    = bRad;
    }
  }
}

function tuneUp(section)
{
  section.style.marginBottom = "100px";
  let secRect = section.getBoundingClientRect();
  // centering
  if(w > secRect.width && w > maxWidth)
  {
    mainTag.style.marginLeft = (w - secRect.width) / 2 + "px";
  }
  tuner(section.getElementsByTagName('p'));
  tuner(section.getElementsByTagName('h3'));
  tuner(section.getElementsByTagName('h4'));
  tuner(section.getElementsByTagName('h5'));
  tuner(section.getElementsByTagName('h6'));
  // let lnk = section.getElementsByTagName("a");
  // if (lnk)
  // {
  //   for (let i=0;i<lnk.length;i++)
  //   {
  //     lnk[i].style.backgroundColor = "#000000";
  //     lnk[i].style.borderRadius    = bRad + "px";
  //     lnk[i].style.color           = "lightblue";
  //   }
  // }
}

function displayTouch(target)
{
  let sectTag = element('section');
  target.appendChild(sectTag);

  let headTag = element('header');
  let artiTag = element('article');
  sectTag.appendChild(headTag);
  sectTag.appendChild(artiTag);

  let alltags = new Array();
  
  if(!userLang.localeCompare("es"))
  {
    alltags.push(element('p',contactMessage[0]));
    alltags.push(element('p',contactMessage[1]));
  } else
  {
    alltags.push(element('p',contactMessage[2]));
    alltags.push(element('p',contactMessage[3]));
  }
  var lk = Object.keys(mylinks);
  for (let k in lk)
  { 
    alltags.push(element(
        "button",
        lk[k],
        '',
        "window.open(\'"+mylinks[lk[k]]+"\', '_top');",
        ""
    ));
  }
  alltags.push(img(contactGif, articleWidth(maxWidth),"touch..."));
  
  for (let i in alltags) 
    artiTag.appendChild(alltags[i]);
  
  return sectTag;
}

function displayBiogra(target)
{
  let sectTag = element('section');
  target.appendChild(sectTag);

  let headTag = element('header');
  let artiTag = element('article');
  sectTag.appendChild(headTag);
  sectTag.appendChild(artiTag);

  let alltags = new Array();
  if(!userLang.localeCompare("es"))
  {
    alltags.push(element('p',bio_es,'bio-spa'));
  } else 
  {
    alltags.push(element('p',bio_en,'bio-eng'));
  }
  alltags.push(element("button","curriculum vitae",'', "window.open(\'"+cv+"\', '_top');")); 
  alltags.push(img(bioImage, articleWidth(maxWidth),shortname));
  for (let i in alltags) artiTag.appendChild(alltags[i]);

  return sectTag;
}

function displayGames(target)
{
  let sectTag = element('section');
  target.appendChild(sectTag);

  let headTag = element('header');
  let artiTag = element('article');
  sectTag.appendChild(headTag);
  sectTag.appendChild(artiTag);

  let alltags = new Array();
  alltags.push(img(gameDraw[7], articleWidth(maxWidth),'drop','',gameDraw[6]));
  alltags.push(element('p',gameDraw[8]));

  alltags.push(img(gameDraw[1], articleWidth(maxWidth),'draw','',gameDraw[0]));
  alltags.push(element('p',gameDraw[2]));

  alltags.push(img(gameDraw[4], articleWidth(maxWidth),'pong','',gameDraw[3]));
  alltags.push(element('p',gameDraw[5]));

  for (let i in alltags) artiTag.appendChild(alltags[i]);

  return sectTag;
}

function displayUnwork(target,source) {
  var keys = Object.keys(source);
  for (var i in keys) {
    let x = keys[i];
    let titl = source[x]["awTitl"];
    let time = source[x]["awTime"];
    let date = source[x]["awDate"];
    let perf = source[x]["awPerf"];
    let cate = source[x]["awCate"];
    let desc = source[x]["awDesc"];
    let prog = source[x]["awProg"];
    let iurl = source[x]["awIurl"];
    let vurl = source[x]["awVurl"];
    let aurl = source[x]["awAurl"];
    let surl = source[x]["awSurl"];
    let loca = source[x]["awLoca"];
    let dura = source[x]["awDura"];

    let sectTag = element('section','', x);
    target.appendChild(sectTag);

    sectTag.setAttribute('class', cate.join(" ")+" unworks");

    let headTag = element('header');
    sectTag.appendChild(headTag);
    let artiTag = element('article');
    sectTag.appendChild(artiTag);
    let footTag = element('footer');
    sectTag.appendChild(footTag);

    let htitle = element("h3",titl);
    let hstitl = element("h4",desc);
    headTag.appendChild(htitle);
    headTag.appendChild(hstitl);

    var perfMessage = "Premiered by "+perf+" on "+date.toDateString()+", at "+loca;

    var aaa = new Array();
    if (iurl) aaa.push(img(iurl, articleWidth(maxWidth),titl));
    if (aurl) aaa.push(element('button','Audio',x+'-aurl',"window.open(\'"+aurl+"\',\'_top\');"));
    if (vurl) aaa.push(element('button','Video',x+'-vurl',"window.open(\'"+vurl+"\',\'_top\');"));
    if (surl) aaa.push(element('button','Score',x+'-surl',"window.open(\'"+surl+"\',\'_top\');"));
    if (prog) aaa.push(element('p',prog));
    if (perf) aaa.push(element("h5",perfMessage));

    for (let i in aaa) artiTag.appendChild(aaa[i]);
     
    let timest = element('h6',time);
    footTag.appendChild(timest);
    sectTag.style.borderBottom = "10px dotted black";
    tuneUp(sectTag);
  }
}
function displayPapers(target,source) {
  var keys = Object.keys(source);
  for (var i in keys) {
    let x = keys[i];
    let titl = source[x]["apTitl"];
    let desc = source[x]["apDesc"];
    let publ = source[x]["apPubl"];
    let down = source[x]["apDown"];
    let time = source[x]["apTime"];
    let link = source[x]["apLink"];
    let date = source[x]["apDate"];
    var iurl = source[x]["apiURL"];

    let sectTag = element('section','', x);
    target.appendChild(sectTag);

    let headTag = element('header');
    sectTag.appendChild(headTag);
    let artiTag = element('article');
    sectTag.appendChild(artiTag);
    let footTag = element('footer');
    sectTag.appendChild(footTag);

    let htitle = element("h3",titl+" ("+date+")",'',"window.open(\'"+link+"\',\'_top\');");
    headTag.appendChild(htitle);

    if(iurl)
    {
      let imagen = img(iurl,articleWidth(maxWidth),titl);
      artiTag.appendChild(imagen); 
    }

    let descrip = element('p',desc);
    artiTag.appendChild(descrip);

    var aaa = [];
    
    if(publ) aaa.push(element('p',publ));
    if(down) aaa.push(element('button','download','',"window.open(\'"+down+"\',\'_top\');"));
    aaa.push(element('h6',time));
             
    for (let j in aaa) {footTag.appendChild(aaa[j]);}
    tuneUp(sectTag);
  }
}
function displayEvents(target,source) {
  var keys = Object.keys(source);
  for (var i in keys) {
    var x = keys[i];
    var titl = source[x]["aeWhat"];
    var desc = source[x]["aeDesc"];
    var when = source[x]["aeWhen"];
    var wher = source[x]["aeWher"];
    var time = source[x]["aeTime"];
    var eurl = source[x]["aeEURL"];
    var iurl = source[x]["aeIURL"];
    //console.log(x + ": "+ titl + " "+ desc + " "+ when + " "+ wher + " "+ time);

    let sectTag = element('section','', x);
    target.appendChild(sectTag);

    let headTag = element('header');
    sectTag.appendChild(headTag);
    let artiTag = element('article');
    sectTag.appendChild(artiTag);
    let footTag = element('footer');
    sectTag.appendChild(footTag);

    let aaa = new Array();
    aaa.push(element("h3",titl));
    aaa.push(element("h4",wher));
    aaa.push(element("h5",when.toDateString()));
    aaa.push(element("button",'more','',"window.open(\'"+eurl+"\', \'_top\');"));
    for (let j in aaa) headTag.appendChild(aaa[j]);
    

    let imagen = img(iurl,articleWidth(maxWidth),titl);
    artiTag.appendChild(imagen); 

    let descrip = element('p',desc);
    artiTag.appendChild(descrip);

    let footer = element('h6',time);
    footTag.appendChild(footer);
    tuneUp(sectTag);
  }
}
function displayPeople(target,source) {
  var keys = Object.keys(source);
  for (var i in keys) {
    let x = keys[i];
    let titl = source[x]["aPName"];
    let last = source[x]["aPSurn"];
    let time = source[x]["aPTime"];
    let webs = source[x]["aPWebs"];

    let sectTag = element('section','', x);
    target.appendChild(sectTag);

    let headTag = element('header');
    sectTag.appendChild(headTag);
    let artiTag = element('article');
    sectTag.appendChild(artiTag);

    switch (last) {
      case "Ensemble":
      case "Organization":
        var name = titl;
        break
      default:
        var name = last + ", " + titl;
        break;
    }

    let htitle = element("button",name,'',"window.open(\'"+webs+"\', \'_top\');");
    headTag.appendChild(htitle);
   }
}
function displayCV(x) {
  var headerTag = element('header');
  let htitleTag = element("h2", x, '', "toggle('"+x+"');");
  headerTag.appendChild(htitleTag);
  mainTag.appendChild(headerTag);
  //the article
  var articlTag = element('article','', x);
  mainTag.appendChild(articlTag);
  articlTag.setAttribute('style', "width:"+articleWidth(maxWidth)+"px;");
  switch (x) {
    case "Personal" :
      articlTag.innerHTML = "<ul>"+tag("li",personal.join("</li><li>"))+"</li></ul>";
      break;
    case "Teachings" :
      displayCVTeachi(articlTag,allTeachi,x.toLowerCase());
      break;
    case "Awards"   :
      displayCVAwards(articlTag,allAwards,x.toLowerCase());
      break;
    case "Unworks":
      displayCVUnwork(articlTag,allUnwork,x.toLowerCase());
      break;
    case "Collaborations":
      displayCVCollab(articlTag,allCollab,x.toLowerCase());
      break;
    case "Performances":
      displayCVPerfor(articlTag,allPerfor,x.toLowerCase());
      break
    default:
      removeChilds(mainTag);
      mainCV();
    break;
  }
}
function displayCVTeachi(target,source,id){
  var sectTag = element('section','',id);
  target.appendChild(sectTag);

  var keys = Object.keys(source);
  // console.log(keys);
  for (var i in keys) {
    var x = keys[i];
    var time = source[x]["aTTime"];
    var type = source[x]["aTType"];
    var clas = source[x]["aTClas"];
    var inst = source[x]["aTInst"];
    var dept = source[x]["aTDept"];
    var term = source[x]["aTTerm"];
    var year = source[x]["aTYear"];
    
    let headTag = element('header');
    sectTag.appendChild(headTag);
    let artiTag = element('article');
    sectTag.appendChild(artiTag);
    let footTag = element('footer');
    sectTag.appendChild(footTag);

    let titl = year+tilde+type + ". (" + term + ")";
    let htitle = element("h3",titl);
    headTag.appendChild(htitle);

    let job = clas + " at " + dept + " of " + inst;
    let descrip = element("p",job);

    artiTag.appendChild(descrip);

    let footer = element('h6',time);
    footTag.appendChild(footer);
    // window.alert(job);
  }
}
function displayCVAwards(target,source,id){
  var sectTag = element('section','',id);
  target.appendChild(sectTag);

  var keys = Object.keys(source);
  // console.log(keys);
  for (var i in keys) {
    var x = keys[i];
    var time = source[x]["aATime"];
    var type = source[x]["aAType"];
    var titl = source[x]["aATitl"];
    var dura = source[x]["aADura"];
    var wher = source[x]["aAWher"];
    var whoo = source[x]["aAWhoo"];
    var desc = source[x]["aADesc"];
    var urll = source[x]["aAUrll"];

    let headTag = element('header');
    sectTag.appendChild(headTag);
    let artiTag = element('article');
    sectTag.appendChild(artiTag);
    let footTag = element('footer');
    sectTag.appendChild(footTag);

    let awar = titl+" for "+dura+" in "+wher+" ("+type+")";
    let htitle = element("h3",awar);
    headTag.appendChild(htitle);

    let descrip = element("p",desc);
    let refer = element("i", whoo, "", "window.open("+urll+",\'_top\')");
    descrip.appendChild(refer);
    artiTag.appendChild(descrip);

    let footer = element('h6',time);
    footTag.appendChild(footer);
  }
}
function displayCVUnwork(target,source,id){
  var sectTag = element('section','',id);
  target.appendChild(sectTag);

  var keys = Object.keys(source);
  // console.log(keys);
  for (var i in keys) {
    let x = keys[i];
    let titl = source[x]["awTitl"];
    let time = source[x]["awTime"];
    let date = source[x]["awDate"];
    let perf = source[x]["awPerf"];
    let cate = source[x]["awCate"];
    let desc = source[x]["awDesc"];
    let prog = source[x]["awProg"];
    let iurl = source[x]["awIurl"];
    let vurl = source[x]["awVurl"];
    let aurl = source[x]["awAurl"];
    let surl = source[x]["awSurl"];
    let loca = source[x]["awLoca"];
    let dura = source[x]["awDura"]; 

    let headTag = element('header');
    sectTag.appendChild(headTag);
    let artiTag = element('article');
    sectTag.appendChild(artiTag);
    let footTag = element('footer');
    sectTag.appendChild(footTag);

    let htitle = element("h3",titl);
    let hstitl = element("h4",desc);
    headTag.appendChild(htitle);
    headTag.appendChild(hstitl);

    var lis = [
      "Duration: "+dura+" minutes.",
      "Premiered by: "+perf,
      "Date: "+date.toDateString(),
      "Place: "+loca,
      "Keywords: "+cate
    ];

    let ulTag = element("ul");
    for (let j in lis){
      let liTag = element("li", lis[j]);
      ulTag.appendChild(liTag);
    }

    artiTag.appendChild(ulTag);
     
    let timest = element('h6',time);
    footTag.appendChild(timest);
  }
}
function displayCVCollab(target,source,id){
  var sectTag = element('section','',id);
  target.appendChild(sectTag);

  var keys = Object.keys(source);
  // console.log(keys);
  for (var i in keys) {
    var x = keys[i];
    var time = source[x]["aCTime"];
    var cate = source[x]["aCCate"];
    var year = source[x]["aCYear"];
    var wher = source[x]["aCWher"];
    var desc = source[x]["aCDesc"];

    let headTag = element('header');
    sectTag.appendChild(headTag);
    let artiTag = element('article');
    sectTag.appendChild(artiTag);
    let footTag = element('footer');
    sectTag.appendChild(footTag);

    let colla = year+tilde+cate+" in "+wher;
    if(!userLang.localeCompare("es"))
    {
      colla = year+tilde+cate+" en "+wher;
    }

    let htitle = element("h3",colla);
    headTag.appendChild(htitle);

    let descrip = element("p",desc);
    artiTag.appendChild(descrip);

    let footer = element('h6',time);
    footTag.appendChild(footer);
  }
}
function displayCVPerfor(target,source,id){
  var sectTag = element('section','',id);
  target.appendChild(sectTag);

  var keys = Object.keys(source);
  // console.log(keys);
  for (var i in keys) {
    var x = keys[i];
    var time = source[x]["aPTime"];
    var what = source[x]["aPWhat"];
    var when = source[x]["aPWhen"];
    var howw = source[x]["aPHoww"];
    var wher = source[x]["aPWher"];
    var inst = source[x]["aPInst"];
    var witt = source[x]["aPWith"];

    let headTag = element('header');
    sectTag.appendChild(headTag);
    let artiTag = element('article');
    sectTag.appendChild(artiTag);
    let footTag = element('footer');
    sectTag.appendChild(footTag);

    let event = when.toDateString()+tilde+what +" at "+wher+", with "+witt;
    
    if(!userLang.localeCompare("es"))
    {
      event = when.toDateString()+tilde+what +" en "+wher+", con "+witt;
    }
    let htitle = element("h3",event);
    headTag.appendChild(htitle);

    let descrip = element("p",howw);
    let perfor = element("i", "Performed: "+inst+".");
    artiTag.appendChild(descrip);
    descrip.appendChild(perfor);

    let footer = element('h6',time);
    footTag.appendChild(footer);
  }
}
function displayMedia(target,source,type) {
  for (let i=0; i<=source.length-1 ; i=i+2) {
    //var elem = element('h4',source[i])
    let medi = element(type);
    medi.src = source[i+1];
    medi.width = target.clientWidth/2;
    medi.style.border   = "none";
    medi.style.padding  = "none";
    medi.style.margin   = "none";
    medi.style.position = "relative";
    medi.style.float    = "left";

    // video.overflow = false;
    // video.scrolling = "no";
    // video.frameborder = 'none';
    medi.controls = false;
    medi.title = source[i];
    target.appendChild(medi);
    //console.log(source[i]);
  }
}
function loadCV() {
  // mainBack.value='';
  for (var i in allCVsections)
    displayCV(allCVsections[i]);
}