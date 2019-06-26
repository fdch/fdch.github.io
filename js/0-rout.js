function removeChilds(x)
{
  while (x.firstChild) {
      x.removeChild(x.firstChild);
  } 
  if(!x.firstChild) return 1
}

function toggle(id)
{
  x = document.getElementById(id);
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
}

function getFile(x)
{
  $.get(x, function(data){
  return data ;
  });
}

function makeID(x)
{
  return x.replace(/ /g,'_').toLowerCase().slice(0,7);
}

function onclickify(func,src,arg)
{
  if (arg) {
    return " onclick=\""+func+"(\'"+src+"\',\'"+arg+"\');\" ";
  } else {
    return " onclick=\""+func+"(\'"+src+"\');\" ";
  }   
}

function tag(tag,text)
{
  return "<"+tag+">"+text+"</"+tag+">";
}

function tagOpen(tag,text,target)
{
  return "<"+tag+onclickify("window.open",target,"_top")+">"+text+"</"+tag+">";
}

function imgify(src,width)
{
  return "<img src=\""+ src +"\" width=\""+ width +"\" "+ onclickify("window.open",src,"_top") + "/>";
}

function width()
{
   return window.innerWidth 
       || document.documentElement.clientWidth 
       || document.body.clientWidth 
       || 0;
}

function height()
{
   return window.innerHeight 
       || document.documentElement.clientHeight 
       || document.body.clientHeight 
       || 0;
}

function articleWidth(maxW)
{
  var winW = width();
  if (winW >= maxW)
  {
    return maxW * widthFactor;
  } else {
    return winW * widthFactor;
  }
}

function resizeHeader()
{  
  var hH = headerTag[0].clientHeight;

  if (h >= maxHeight) {
    headerTag[0].style.height = minHHeight+"px";
    hH = minHHeight;
  }

  // if(rotImgTag) rotImgTag.setAttribute('width', hH*0.9);
  if(h1titlTag) {
    h1titlTag.style.marginTop = (hH*0.5)-h1titlTag.clientHeight;
  }
  if(navSelTag) {
    navSelTag.style.marginTop = (hH*0.5)-navSelTag.clientHeight;
  }
  if(catDivTag) {
    catDivTag.style.marginTop = (hH*0.5)-catDivTag.clientHeight;
  }

  if(mainTag)   mainTag.style.marginTop = hH+"px";

}

function resized()
{
  w = width();
  h = height();
  resizeHeader();
}

function loadJSON(x,callback)
{
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', x, true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(xobj.responseText);
    }
  };
  xobj.send(null);  
}

function randomVideo()
{
  let len = featURL.length;
  iframeTag.setAttribute('src',featURL[Math.floor(Math.random()*len)]);
}

function pdRandom(range,offset)
{
  offset = offset || 0;
  return Math.floor(Math.random() * range) + offset;
}

function randomColor(preset, target)
{
  var lran = preset[0];
  var loff = preset[1];
  var dran = preset[2];
  var doff = preset[3];
  var light = "rgb("+pdRandom(lran,loff)+","+pdRandom(lran,loff)+","+pdRandom(lran,loff)+")";
  var darky = "rgb("+pdRandom(dran,doff)+","+pdRandom(dran,doff)+","+pdRandom(dran,doff)+")";
  var menuy = "rgba("+pdRandom(dran,doff)+","+pdRandom(dran,doff)+","+pdRandom(dran,doff)+","+hAlpha+")";
  target[0].style.backgroundColor = darky;
  target[0].style.color = light;
}

var whichone = 0;
// var flipped = 1;

function funImage(input)
{
  dur = Math.random()*5000;
  ang = Math.random()*360*2-360;
    
  $(String("#"+input[3])).rotate({animateTo: ang,duration: dur});
  
  if (whichone==0) {whichone=1} else {whichone=0};
  // flipped = flipped==1?(-1):1;
    
  // var flipper = [
  //   "-moz-transform: scaleX("+flipped+");",
  //   "-o-transform: scaleX("+flipped+");",
  //   "-webkit-transform: scaleX("+flipped+");",
  //   "transform: scaleX("+flipped+");",
  //   "filter: FlipH;",
  //   "-ms-filter: \'FlipH\';",
  // ];
       
  setTimeout(function(){
    rotImgTag.setAttribute('src', input[whichone]);
  },dur/4);

  // setTimeout(function(){
  //   rotImgTag.setAttribute('style',flipper.concat(rotImgStyle).join(""));
  // },dur/5);
}

function randomizeStuff()
{
  funImage(rotImg);
  let times = pdRandom(25,5);
  while (times) {
    setTimeout(function(){
    randomColor(color_preset['high'],[bodyTag,headerTag[0]]);
    },pdRandom(60*times,30));

    times--;
  }
}

function navClicker()
{
  randomColor(color_preset['high'],[bodyTag,headerTag[0]]);
}

function imgClicker(x)
{
  if (!currpage) randomVideo();
  randomizeStuff();  
}

function makeCateg(x)
{
  var cats=new Array();
  var word=new String();
  for (let i in x){
    let letter = new String(x[i]);
    if(!(",".localeCompare(letter))){
      cats.push(word.replace(/\W/g," ").toLowerCase());
      word="";
      continue;
    }
    if(!(" ".localeCompare(letter))){ 
      //word+="_";
      continue;
    }
    word+=letter;
  }
  // console.log(cats.join(tilde));
  return cats;
}

function getUniqueCategories(x)
{
  var cats = new Array();
  for (var i in x){
    let st = new String(x[i]);
    cats.push(st.replace(/\W/g,' '));
  }
  return unique(unique(cats));
}

function getValue(x)
{
  var name = x.name;
  var valu = x.value;
  var onoff;
  for (let i in allWorkId) {
    let wid = document.getElementById(allWorkId[i]);
    switch(name) {
    case "title":
      if(valu === wid)
        wid.style.display = "initial";
      else
        wid.style.display = "none";
      break;
    case "category":
      let clist = wid.classList;
      // console.log(clist);
      if( clist.contains(valu || valu.replace(/W/g,'')) )
        wid.style.display = "initial";
      else
        wid.style.display = "none";
      break;
    default:
      break;
    }
  }
  //console.log(name + ": " + valu);
}

function unique(array)
{
  return array.filter(function(el, index)
  {
    return index == array.indexOf(el);                  
  });
}


// function unique(array) {
//     return $.grep(array, function(el, index) {
//         return index == $.inArray(el, array);
//     });
// }



//Randomize array element order in-place. Using Durstenfeld shuffle algorithm
function shuffleArray(array)
{
    for (var i = array.length - 1; i > 0; i--)
    {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function getSubmit(target)
{
  var exists;
  var page = formLinks[target];
  if (!exists) var n = window.open("", "asdfyj", submit[4]);
  else n.focus();
  if (n != null) exists = 1;
  else exists = 0;
  n.document.documentElement.innerHTML = submit[2];
  n.document.getElementById("authOK").onclick = function () {
    if ( n.document.getElementById("krl").value != submit[3] )
    {
      n.alert("\n"+submit[0]+"\n\n Try again.");
    } else {
      n.resizeTo(articleWidth(maxWidth), height());
      n.moveBy(articleWidth(maxWidth)*0.3, 0);
      open(page, "asdfyj");
    }
  }
}

function menuClick(x,e)
{
  let id = x.title;
  if (e.shiftKey) {
    getSubmit(id);
  } else {
    display(id);
  }
}
function menuTouchStart(x,e)
{
  let id = x.title;
  if (e.touches.length > 1) {
    getSubmit(id);
  } else {
    display(id);
  }
}

function randomFont(target)
{
  target.style.fontFamily = fonts[pdRandom(fonts.length)];
}

function anchor(link,text,target)
{
  let tag = document.createElement('a');

  tag.setAttribute('href',link);
  tag.setAttribute('alt' ,link.length>44?link.slice(0, 44)+ " ...":link);
  tag.setAttribute('rel', 'nofollow');
  tag.setAttribute('target', target?target:"_top");

  tag.appendChild(document.createTextNode(text?text:''));

  return tag;
}

function element(tag,text,id,onclick,width)
{
  let elem = document.createElement(tag);
  let node = document.createTextNode(text?text:'');
  elem.setAttribute('id',id?id:'');
  elem.setAttribute('onclick',onclick?onclick:'');
  
  if (width)
  {
    elem.setAttribute('width', width-mypad);
    elem.style.width = width-mypad + "px";
  } 
  else 
  {
    let mywidth = articleWidth(maxWidth);
    elem.setAttribute('width', mywidth);
    elem.style.width = mywidth;
  }
  
  elem.appendChild(node);
  return elem;
}

function img(src,width,titl,id,tURL)
{
  let tag = document.createElement('img');
  let div = document.createElement('div');
  tag.setAttribute('src', src);
  let anc = anchor(src);
  if (width)
  { 
    tag.setAttribute('width', width+bRad);
    div.style.width = width+"px";
  }
  if (titl)  tag.setAttribute('title', titl);
  if (id)    tag.setAttribute('id',id);
  if (tURL)  anc = anchor(tURL);
  div.style.overflow = "hidden";
  div.style.borderRadius = bRad+"px";
  anc.appendChild(tag);
  div.appendChild(anc);
  return div;      
}

function mobileCheck()
{
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};