function redirect(url) {
  window.open(url, "_top");
}

async function display(x) {

  if (typeof x == 'string' || x instanceof String) {
    x = x;
  } else {
    x = x.value;
  }

  htmlTag.style.fontFamily = fonts[0];
  // htmlTag.style.fontFamily = fonts[pdRandom(fonts.length)];

  switch (x) {
    case "games":
      article = resetDisplay(x);
      tuneUp(await displayGames(article));
      break;
    case "touch":
      article = resetDisplay(x);
      tuneUp(await displayTouch(article));
      break;
    case "bio":
      article = resetDisplay(x);
      tuneUp(await displayBiogra(article));
      tuneUp(await displayTouch(article));
      break;

    case "work":
      //extra stuff for the category selectbox
      article = resetDisplay(x);
      if (!catDivTag) {
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

      displayUnwork(article, allUnwork);
      break;
    case "research":
      article = resetDisplay(x);
      displayPapers(article, allPapers);
      break;
    case "news":
      article = resetDisplay(x);
      displayEvents(article, allEvents);
      break;
    case "people":
      article = resetDisplay(x);
      displayPeople(article, allPeople);
      break;
    case "cv":
      window.open(cv, "_top");
      break;
    case "video":
      article = resetDisplay(x);
      displayMedia(article, allVideos, 'video');
      break;
    case "audio":
      article = resetDisplay(x);
      displayMedia(article, allAudios, 'audio');
      break;
    case "projects":
      article = resetDisplay(x);
      displayProjects(article, allProjects);
      // window.open("https://fdch.github.io/projects","_top");
      break;
    case "releases":
      article = resetDisplay(x);
      displayReleases(article, allReleases);
      // window.open("./releases","_top");
      break;
    case "code":
      article = resetDisplay(x);
      displayCode(article, allRepos);
      // tuneUp(displayGames(article));
      // redirect("https://github.com/fdch");
      break;
    case "toros":
      redirect("https://fdch.github.io/toros");
      break;
    case "blog":
      redirect("https://fdch.github.io/blog");
      break;
    default:
      article = resetDisplay(x);
      main();
  }
}

function resetDisplay(x) {
  //remove previous stuff
  // var c;
  if (removeChilds(mainTag)) {
    if (!x.localeCompare('init')) {
      mainTag.style.marginLeft = "0px";
      navSelTag.selectedIndex = 0;
      if (catDivTag) catDivTag.style.display = "none";
      return void 0; // we are on init page
    } else {
      //remove backvid
      if (iframeTag) {
        iframeTag.style.display = 'none';
        iframeTag.src = '';
      }
      if (catDivTag) catDivTag.style.display = "none";
      //the header
      var headTag = element('header');
      let htitleTag = element("h2", x, '', "display(\'" + x + "\')");
      headTag.appendChild(htitleTag);
      mainTag.appendChild(headTag);
      //the article
      var articlTag = element('article', '', x);
      mainTag.appendChild(articlTag);
      articlTag.style.width = articleWidth(maxWidth) + "px";
      return articlTag;
    }
  } else {
    console.log("could not remove elements and create article");
    return void 0; //there was an error
  }
}

function displayTouch(target) {
  let sectTag = element('section');
  target.appendChild(sectTag);

  let headTag = element('header');
  let artiTag = element('article');
  sectTag.appendChild(headTag);
  sectTag.appendChild(artiTag);

  headTag.appendChild(element('h2', 'Contact'));

  let alltags = new Array();

  if (!userLang.localeCompare("es")) {
    alltags.push(element('p', contactMessage[0]));
    alltags.push(element('p', contactMessage[1]));
  } else {
    alltags.push(element('p', contactMessage[2]));
    alltags.push(element('p', contactMessage[3]));
  }
  var lk = Object.keys(mylinks);

  let divTag = element('div');

  for (let k in lk) {
    divTag.append(element(
      "button",
      lk[k],
      '',
      "window.open(\'" + mylinks[lk[k]] + "\', '_top');",
      ""
    ));
    divTag.append(element('span', " | "));
  }
  alltags.push(divTag);
  // alltags.push(img(contactGif, articleWidth(maxWidth),"touch..."));

  for (let i in alltags)
    artiTag.appendChild(alltags[i]);

  return sectTag;
}

function displayBiogra(target) {
  let sectTag = element('section');
  target.appendChild(sectTag);

  let headTag = element('header');
  let artiTag = element('article');
  sectTag.appendChild(headTag);
  sectTag.appendChild(artiTag);

  let alltags = new Array();

  if (!userLang.localeCompare("es")) {
    alltags.push(element('p', bio_es));
    alltags.push(element('p', epigrafe));
  } else {
    alltags.push(element('p', bio_en));
    alltags.push(element('p', epigraph));
  }
  alltags.push(niceButton(
    "Curriculum Vitae",
    cvpdf,
    "Download my CV"));
  alltags.push(niceButton(
    "Online CV",
    cv,
    "Read my CV"));

  alltags.push(img(bioImage, articleWidth(maxWidth), shortname));

  if (!userLang.localeCompare("es")) {
    for (let i in long_descripcion)
      alltags.push(element('p', long_descripcion[i]))
  } else {
    for (let i in long_description)
      alltags.push(element('p', long_description[i]))
  }
  // alltags.push(element("button","HQ photo",'', "window.open(\'"+bioImage+"\', '_top');"));
  for (let i in alltags) artiTag.appendChild(alltags[i]);

  return sectTag;
}

function displayGames(target) {
  let sectTag = element('section');
  target.appendChild(sectTag);

  let headTag = element('header');
  let artiTag = element('article');
  sectTag.appendChild(headTag);
  sectTag.appendChild(artiTag);

  artiTag.appendChild(element('h3', 'Games'));
  artiTag.appendChild(element('p', 'Below are some computer games I made when I was learning code. I leave them here because some are still fun!'));

  for (var i = 0; i < allGames.length; i++) {
    let subArticle = element("section");
    artiTag.appendChild(subArticle);

    subArticle.appendChild(element(
      "h4",
      allGames[i]["name"],
      "",
      allGames[i]["url"]));
    subArticle.appendChild(img(
      allGames[i]['image'],
      articleWidth(maxWidth),
      allGames[i]["name"]));
    subArticle.appendChild(element('p', allGames[i]["description"]));
    subArticle.appendChild(niceButton(
      allGames[i]["name"],
      allGames[i]['url'],
      "Click here to play"));

  }
  return sectTag;
}

async function displayUnwork(target, source) {
  let sectTag = element('section');
  target.appendChild(sectTag);
  let keys = Object.keys(source);
  for (var i in keys) {
    let x = keys[i];
    // let time = source[x]["awTime"];
    // let dura = source[x]["awDura"];
    let titl = await source[x]["awTitl"];
    let date = await source[x]["awDate"];
    let perf = await source[x]["awPerf"];
    let cate = await source[x]["awCate"];
    let desc = await source[x]["awDesc"];
    let prog = await source[x]["awProg"];
    let iurl = await source[x]["awIurl"];
    let vurl = await source[x]["awVurl"];
    let aurl = await source[x]["awAurl"];
    let surl = await source[x]["awSurl"];
    let loca = await source[x]["awLoca"];

    let divTag = element("div", '', x);
    divTag.setAttribute('class', cate.join(" ") + " unworks");
    sectTag.appendChild(divTag);
    let headTag = element('header');
    divTag.appendChild(headTag);
    let artiTag = element('article');
    divTag.appendChild(artiTag);
    let footTag = element('footer');
    divTag.appendChild(footTag);

    applyTune(divTag);

    let htitle = element("h3", titl);
    let hstitl = element("h4", desc);
    headTag.appendChild(htitle);
    headTag.appendChild(hstitl);

    var perfMessage = "Premiered by " + perf + " on " + date.toDateString() + ", at " + loca;

    var aaa = new Array();

    if (iurl) aaa.push(img(iurl, articleWidth(maxWidth) - mypad * 2, titl));

    if (aurl) {
      aaa.push(niceButton(
        "Sound",
        aurl,
        "Click here to listen"));
    }
    if (vurl) {
      aaa.push(niceButton(
        "Video",
        vurl,
        "Click here to watch"));
    }
    if (surl) {
      aaa.push(niceButton(
        "Score / Code",
        surl,
        "Click here to open the score (or code) "));
    }

    if (prog) aaa.push(element('p', prog));

    for (let i in aaa) artiTag.appendChild(aaa[i]);

    if (perf) footTag.appendChild(element("h5", perfMessage));

  }
  centering(sectTag);
  tuneUp(sectTag);
}

function displayPapers(target, source) {
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

    let sectTag = element('section', '', x);
    target.appendChild(sectTag);

    let headTag = element('header');
    sectTag.appendChild(headTag);
    let artiTag = element('article');
    sectTag.appendChild(artiTag);
    let footTag = element('footer');
    sectTag.appendChild(footTag);

    let htitle = element("h3", titl + " (" + date + ")", '', "window.open(\'" + link + "\',\'_top\');");
    headTag.appendChild(htitle);

    if (iurl) {
      let imagen = img(iurl, articleWidth(maxWidth), titl);
      artiTag.appendChild(imagen);
    }

    let descrip = element('p', desc);
    artiTag.appendChild(descrip);

    var aaa = [];

    if (publ) aaa.push(element('p', publ));

    if (down) {
      aaa.push(niceButton(
        "Download",
        down,
        "Click here to get the full text"));
    }

    // aaa.push(element('h6',time));
    for (let j in aaa) {
      footTag.appendChild(aaa[j]);
    }
    tuneUp(sectTag);
  }
}

function displayEvents(target, source) {
  var keys = Object.keys(source);
  for (var i in keys) {
    // console.log(i);
    var x = keys[i];
    var titl = source[x]["aeWhat"];
    var desc = source[x]["aeDesc"];
    var when = source[x]["aeWhen"];
    var wher = source[x]["aeWher"];
    var time = source[x]["aeTime"];
    var eurl = source[x]["aeEURL"];
    var iurl = source[x]["aeIURL"];
    //console.log(x + ": "+ titl + " "+ desc + " "+ when + " "+ wher + " "+ time);

    let sectTag = element('section', '', x);
    target.appendChild(sectTag);

    let headTag = element('header');
    sectTag.appendChild(headTag);
    let artiTag = element('article');
    sectTag.appendChild(artiTag);
    // let footTag = element('footer');
    // sectTag.appendChild(footTag);


    headTag.appendChild(element("h3", titl));
    artiTag.appendChild(img(iurl, articleWidth(maxWidth), titl));
    artiTag.appendChild(element("h4", when.getFullYear() + " " + when.toLocaleString('default', {
      month: 'long'
    }) + " " + when.getDate() + " - " + wher));
    artiTag.appendChild(element('blockquote', desc));
    artiTag.appendChild(niceButton(
      "Info",
      eurl,
      "Click here for more"
    ));

    // let footer = element('h6',time);
    // footTag.appendChild(footer);
    tuneUp(sectTag);
  }
}

function displayPeople(target, source) {
  var keys = Object.keys(source);
  for (var i in keys) {
    let x = keys[i];
    let titl = source[x]["aPName"];
    let last = source[x]["aPSurn"];
    let time = source[x]["aPTime"];
    let webs = source[x]["aPWebs"];

    let sectTag = element('section', '', x);
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

    let htitle = element("button", name, '', "window.open(\'" + webs + "\', \'_top\');");
    headTag.appendChild(htitle);
  }
}

function displayProjects(target, source) {
  var keys = Object.keys(source);
  for (var i in keys) {
    var x = keys[i];
    var time = source[x]["aPTime"];
    var part = source[x]["aPPart"];
    var desc = source[x]["aPDesc"];
    var ppl1 = source[x]["aPPpl1"];
    var img1 = source[x]["aPimg1"];
    var ppl2 = source[x]["aPPpl2"];
    var img2 = source[x]["aPimg2"];
    var ppl3 = source[x]["aPPpl3"];
    var img3 = source[x]["aPimg3"];
    var ppl4 = source[x]["aPPpl4"];
    var img4 = source[x]["aPimg4"];
    var url1 = source[x]["aPUrl1"];
    var url2 = source[x]["aPUrl2"];
    var ur11 = source[x]["aP1UR1"];
    var ur12 = source[x]["aP1UR2"];
    var ur13 = source[x]["aP1UR3"];
    var ur21 = source[x]["aP2UR1"];
    var ur22 = source[x]["aP2UR2"];
    var ur23 = source[x]["aP2UR3"];
    var ur31 = source[x]["aP3UR1"];
    var ur32 = source[x]["aP3UR2"];
    var ur33 = source[x]["aP3UR3"];
    var ur41 = source[x]["aP4UR1"];
    var ur42 = source[x]["aP4UR2"];
    var ur43 = source[x]["aP4UR3"];


    let sectTag = element('section', '', x);
    target.appendChild(sectTag);

    let headTag = element('header');
    sectTag.appendChild(headTag);
    let artiTag = element('article');
    sectTag.appendChild(artiTag);
    let footTag = element('footer');
    sectTag.appendChild(footTag);

    let aaa = new Array();
    aaa.push(element("h3", titl));
    aaa.push(element("h4", wher));
    aaa.push(element("h5", when.toDateString()));
    aaa.push(element("button", 'more', '', "window.open(\'" + eurl + "\', \'_top\');"));
    for (let j in aaa) headTag.appendChild(aaa[j]);


    let imagen = img(iurl, articleWidth(maxWidth), titl);
    artiTag.appendChild(imagen);

    let descrip = element('p', desc);
    artiTag.appendChild(descrip);

    let footer = element('h6', time);
    footTag.appendChild(footer);
    tuneUp(sectTag);
  }
}

function displayCV(x) {
  var headerTag = element('header');
  let htitleTag = element("h2", x, '', "toggle('" + x + "');");
  headerTag.appendChild(htitleTag);
  mainTag.appendChild(headerTag);
  //the article
  var articlTag = element('article', '', x);
  mainTag.appendChild(articlTag);

  articlTag.style.width = articleWidth(maxWidth) + "px";

  switch (x) {
    case "Personal":
      tuneUp(displayCVPerson(articlTag, g, x.toLowerCase()));
      break;
    case "Teachings":
      displayCVTeachi(articlTag, allTeachi, x.toLowerCase());
      break;
    case "Awards":
      displayCVAwards(articlTag, allAwards, x.toLowerCase());
      break;
    case "Unworks":
      displayCVUnwork(articlTag, allUnwork, x.toLowerCase());
      break;
    case "Collaborations":
      displayCVCollab(articlTag, allCollab, x.toLowerCase());
      break;
    case "Performances":
      displayCVPerfor(articlTag, allPerfor, x.toLowerCase());
      break
    default:
      // removeChilds(mainTag);
      // mainCV();
      break;
  }
  console.log(x);
  return 1;
}

function displayCVPerson(target, source, id) {
  let sectTag = element('section', '', id);
  target.appendChild(sectTag);

  let headTag = element('header');
  sectTag.appendChild(headTag);

  let artiTag = element('article');
  sectTag.appendChild(artiTag);

  let tableTag = element('table');
  artiTag.appendChild(tableTag);

  let row = [];
  for (let i = 0; i < 10; i++) {
    row.push(element('tr'));
    tableTag.appendChild(row[i]);
  }

  row[0].appendChild(element("td", "Full Name"));
  row[1].appendChild(element("td", "Date of Birth"));
  row[2].appendChild(element("td", "Nationality"));
  row[3].appendChild(element("td", "Mailing Address"));
  row[4].appendChild(element("td", "Phone Number"));
  row[5].appendChild(element("td", "E-mail"));
  row[6].appendChild(element("td", "Website"));
  row[7].appendChild(element("td", "Job Experience"));
  row[8].appendChild(element("td", "Graduate Education"));
  row[9].appendChild(element("td", "Undergraduate Education"));


  if (!userLang.localeCompare("es")) {
    row[0].appendChild(element("td", "Nombre Completo"));
    row[1].appendChild(element("td", "Fecha de Nacimiento"));
    row[2].appendChild(element("td", "Nacionalidad"));
    row[3].appendChild(element("td", "Dirección Postal"));
    row[4].appendChild(element("td", "Número de Teléfono"));
    row[5].appendChild(element("td", "Correo electrónico"));
    row[6].appendChild(element("td", "Sitio Web"));
    row[7].appendChild(element("td", "Trabajo"));
    row[8].appendChild(element("td", "Educación de Posgrado"));
    row[9].appendChild(element("td", "Educación de Grado"));
  }

  // let mydate = new Date(g["bday"]);
  let linkdate = element("span", mydate, '', "window.open(\'" + g["may8th"] + "\')");
  linkdate.style.cursor = "pointer";
  let website = anchor(g["url"], g["url"]);
  website.style.color = "lightblue";
  let job = element("ul");
  let grad = element("ul");
  let under = element("ul");
  job.appendChild(element("li", g["grad"][0]));
  grad.appendChild(element("li", g["grad"][1]));
  under.appendChild(element("li", g["undergrad"]));



  row[0].appendChild(element("td", g["fullname"]));
  row[1].appendChild(element("td").appendChild(linkdate));
  row[2].appendChild(element("td", g["nationality"]));
  row[3].appendChild(element("td", g["address"]));
  row[4].appendChild(element("td", g["phone"]));
  row[5].appendChild(element("td", g["email"]));
  row[6].appendChild(element("td").appendChild(website));
  row[7].appendChild(element("td").appendChild(job));
  row[8].appendChild(element("td").appendChild(grad));
  row[9].appendChild(element("td").appendChild(under));

  return artiTag;
}


function displayCVTeachi(target, source, id) {
  let sectTag = element('section', '', id);
  target.appendChild(sectTag);

  let keys = Object.keys(source);
  // console.log(keys);
  for (let i in keys) {
    let x = keys[i];
    let time = source[x]["aTTime"];
    let type = source[x]["aTType"];
    let clas = source[x]["aTClas"];
    let inst = source[x]["aTInst"];
    let dept = source[x]["aTDept"];
    let term = source[x]["aTTerm"];
    let year = source[x]["aTYear"];

    let divTag = element("div");
    sectTag.appendChild(divTag);
    let headTag = element('header');
    divTag.appendChild(headTag);
    let artiTag = element('article');
    divTag.appendChild(artiTag);

    applyTune(divTag);

    // let footTag = element('footer');
    // sectTag.appendChild(footTag);

    let titl = year + tilde + type + ". (" + term + ")";
    let htitle = element("h3", titl);
    headTag.appendChild(htitle);

    let job = clas + " at " + dept + " of " + inst;
    let descrip = element("p", job);

    artiTag.appendChild(descrip);

    // let footer = element('h6',time);
    // footTag.appendChild(footer);
    // window.alert(job);
    // tuneUp(sectTag);
  }
}

function displayCVAwards(target, source, id) {
  var sectTag = element('section', '', id);
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

    let divTag = element("div");
    sectTag.appendChild(divTag);
    let headTag = element('header');
    divTag.appendChild(headTag);
    let artiTag = element('article');
    divTag.appendChild(artiTag);

    applyTune(divTag);

    let awar = titl + " for " + dura + " in " + wher + " (" + type + ")";
    let htitle = element("h3", awar);
    headTag.appendChild(htitle);

    let descrip = element("p", desc);
    let refer = element("i", whoo, "", "window.open(" + urll + ",\'_top\')");
    descrip.appendChild(refer);
    artiTag.appendChild(descrip);
  }
}

function displayCVUnwork(target, source, id) {
  var sectTag = element('section', '', id);
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

    let divTag = element("div");
    applyTune(divTag);
    sectTag.appendChild(divTag);


    let headTag = element('header');
    divTag.appendChild(headTag);
    let artiTag = element('article');
    divTag.appendChild(artiTag);
    // let footTag = element('footer');
    // sectTag.appendChild(footTag);


    let htitle = element("h3", titl);
    let hstitl = element("h4", desc);
    headTag.appendChild(htitle);
    headTag.appendChild(hstitl);

    var lis = [
      "Duration: " + dura + " minutes.",
      "Premiered by: " + perf,
      "Date: " + date.toDateString(),
      "Place: " + loca,
      "Keywords: " + cate
    ];

    let ulTag = element("ul");
    ulTag.style.listStyle = "none";
    for (let j in lis) {
      let liTag = element("li", lis[j]);
      ulTag.appendChild(liTag);
    }

    artiTag.appendChild(ulTag);

    // let timest = element('h6',time);
    // footTag.appendChild(timest);
    // tuneUp(divTag);
  }
}

function displayCVCollab(target, source, id) {
  var sectTag = element('section', '', id);
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

    let divTag = element("div");
    sectTag.appendChild(divTag);
    let headTag = element('header');
    divTag.appendChild(headTag);
    let artiTag = element('article');
    divTag.appendChild(artiTag);

    applyTune(divTag);

    let colla = year + tilde + cate + " in " + wher;
    if (!userLang.localeCompare("es")) {
      colla = year + tilde + cate + " en " + wher;
    }

    let htitle = element("h3", colla);
    headTag.appendChild(htitle);

    let descrip = element("p", desc);
    artiTag.appendChild(descrip);



  }
}

function displayCVPerfor(target, source, id) {
  var sectTag = element('section', '', id);
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

    let divTag = element("div");
    sectTag.appendChild(divTag);
    let headTag = element('header');
    divTag.appendChild(headTag);
    let artiTag = element('article');
    divTag.appendChild(artiTag);

    applyTune(divTag);

    let event = when.toDateString() + tilde + what + " at " + wher + ", with " + witt;

    if (!userLang.localeCompare("es")) {
      event = when.toDateString() + tilde + what + " en " + wher + ", con " + witt;
    }
    let htitle = element("h3", event);
    headTag.appendChild(htitle);

    let descrip = element("p", howw);
    let perfor = element("i", "Performed: " + inst + ".");
    artiTag.appendChild(descrip);
    descrip.appendChild(perfor);

  }
}

function displayMedia(target, source, type) {
  for (let i = 0; i <= source.length - 1; i = i + 2) {
    //var elem = element('h4',source[i])
    let medi = element(type);
    medi.src = source[i + 1];
    medi.width = target.clientWidth / 2;
    medi.style.border = "none";
    medi.style.padding = "none";
    medi.style.margin = "none";
    medi.style.position = "relative";
    medi.style.float = "left";

    // video.overflow = false;
    // video.scrolling = "no";
    // video.frameborder = 'none';
    medi.controls = false;
    medi.title = source[i];
    target.appendChild(medi);
    //console.log(source[i]);
  }
}

function displayAllCV(x) {
  // async function displayAllCV(x) {
  for (let i = 0; i < x.length; i++) {
    displayCV(x[i]);
    // const cont = await displayCV(x[i]);
    // if (cont) continue;
  }
}

function displayReleases(target, source) {
  var keys = Object.keys(source);
  for (var i in keys) {
    var x = keys[i];

    var time = source[x]["aRTime"];
    var titl = source[x]["aRTitl"];
    var ifra = source[x]["aRIfra"];
    var when = source[x]["aRDate"];

    let sectTag = element('section', '', x);
    target.appendChild(sectTag);

    let headTag = element('header');
    sectTag.appendChild(headTag);
    sectTag.setAttribute('class', 'release-section');

    let artiTag = element('article');
    sectTag.appendChild(artiTag);

    let footTag = element('footer');
    sectTag.appendChild(footTag);

    headTag.appendChild(element("h3", titl));

    artiTag.insertAdjacentHTML('beforeend', ifra);

    footTag.appendChild(element('h6', time));

    tuneUp(sectTag);
  }
}


function displayCode(target, source) {
  
  target.appendChild(niceButton("Github", repo, "Follow me on Github"))

  
  var keys = Object.keys(source);
  for (var i in keys) {
    var x = keys[i];

    var titl = source[x]["aRTitl"];
    var desc = source[x]["aRDesc"];
    var time = source[x]["aRDate"];
    var href = source[x]["aRHref"];
    var website = source[x]["aRWebs"];

    let sectTag = element('section', '', x);
    target.appendChild(sectTag);

    let headTag = element('header');
    sectTag.appendChild(headTag);
    sectTag.setAttribute('class', 'release-section');

    let artiTag = element('article');
    sectTag.appendChild(artiTag);

    let footTag = element('footer');
    sectTag.appendChild(footTag);

    artiTag.appendChild(element("p", desc));
    
    artiTag.appendChild(niceButton(titl, href, "Code"));
    
    if (website !== '' && website !== undefined && website !== null) {      
      // console.log("WEBSITE", website);
      iframe = document.createElement('iframe');
      // iframe.hidden = "hidden";
      iframe.src = website;
      iframe.id = titl;
      iframe.width  = maxWidth + "px";
      iframe.height  = maxHeight + "px";
      artiTag.appendChild(iframe);
      artiTag.appendChild(niceButton(titl, website, "Website"));
      
      // Leave this here for now
      // LATER try to check if iframe loaded correctly

      // iframe.onload = () => {
        // console.log("Loaded", this.id);
        // const content = iframe.contentDocument || iframe.contentWindow.document;
        // ititle = content.title;
        // if(ititle.indexOf("404")<0){
          // iframe.removeAttribute('hidden')
        // } 

      // }
    } else {
      website = href
    }

    headTag.appendChild(element("h3", titl, '', "window.open(\'" + website + "\')"));

    footTag.appendChild(element('h6', "Last Updated: " + time));

    tuneUp(sectTag);
  }
}

function niceButton(name, url, description) {
  let e = element('p');

  e.appendChild(element('span', description + " --> "));
  e.appendChild(element(
    "button",
    name,
    '',
    "window.open(\'" + url + "\', '_blank');",
    ""
  ));
  return e;
}