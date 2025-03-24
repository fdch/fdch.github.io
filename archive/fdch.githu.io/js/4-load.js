async function loadAll(sheets) {
  // console.log("works", sheets);

  //works
  loadJSON(sheets[0], async function(response) {
    // console.log(sheets[0], responsf.values[i][0]);
    const f = JSON.parse(response);
    const keys = mapToObj( await f.values[0]);
    // console.log("WorkKeys", keys);
    for (let i in f.values) {
      if(i>0) {
        const title = await f.values[i][keys["title"]];
        const categ = makeCateg( await f.values[i][keys['category']]);
        const workIdx = String("id-"+makeID(title));
        const video = await f.values[i][keys["videourl"]];
        const audio = await f.values[i][keys["audiourl"]];

        allUnwork[workIdx] = {
          awTitl : title,
          awTime : await f.values[i][keys["timestamp"]],
          awDate : new Date( await f.values[i][keys["date"]]),
          awPerf : await f.values[i][keys["performers"]],
          awCate : categ,
          awDesc : await f.values[i][keys["description"]],
          awProg : await f.values[i][keys["programnotes"]],
          awIurl : await f.values[i][keys["imageurl"]],
          awVurl : video,
          awAurl : audio,
          awSurl : await f.values[i][keys["scoreurl"]],
          awLoca : await f.values[i][keys["location"]],
          awDura : await f.values[i][keys["duration"]],
        }

        categ.forEach(c => allCategories.push(c));

        allTitles.push(title);

        allWorkId.push(workIdx);

        if(video) {
          allVideos.push(
            title, video
          );
        }

        if(audio) {
          allVideos.push(
            title, audio
          );
        }

        // makeCateg(categ);
        // console.log("Works", nwid, works[nwid]);
      }
    }// end loop
    uCategories = getUniqueCategories(allCategories)
  });
  //papers
  loadJSON(sheets[1], async function(response) {

    const f = JSON.parse(response);
    const keys = mapToObj( await f.values[0]);

    allPapers={};
    for (let i in f.values) {
      if ( i > 0 ) {
        allPapers[String("id-"+makeID( await f.values[i][keys["title"]]))]={
          apTitl : await f.values[i][keys["title"]], 
          apTime : await f.values[i][keys["timestamp"]], 
          apDesc : await f.values[i][keys["description"]], 
          apLink : await f.values[i][keys["link"]], 
          apPubl : await f.values[i][keys["published"]], 
          apDown : await f.values[i][keys["download"]], 
          apDate : await f.values[i][keys["date"]], 
          apiURL : await f.values[i][keys["imageurl"]], 
        };
      }
    }//end loop
  });
  
  //events
  loadJSON(sheets[2], async function(response)
  {
    
    const f = JSON.parse(response);
    const keys = mapToObj( await f.values[0]);
    
    allEvents={};
    for (let i in f.values) {
      if ( i > 0 ) {
        allEvents[String("id-"+makeID( await f.values[i][keys["what"]]))] = {
          aeWhat : await f.values[i][keys["what"]],
          aeTime : await f.values[i][keys["timestamp"]],
          aeWhen : new Date( await f.values[i][keys["when"]]),
          aeWher : await f.values[i][keys["where"]],
          aeDesc : await f.values[i][keys["description"]],
          aeIURL : await f.values[i][keys["imgurl"]],
          aeEURL : await f.values[i][keys["eventurl"]],
        }
      }
    }
  });
  //people
  loadJSON(sheets[3], async function(response) {
    
    const f = JSON.parse( await response);
    const keys = mapToObj( await f.values[0]);

    allPeople={};
    for (let i in f.values) {
      if ( i > 0 ) {
        allPeople[String("id-"+makeID( await f.values[i][keys["name"]]))] = {
          aPName : await f.values[i][keys["name"]],
          aPTime : await f.values[i][keys["timestamp"]],
          aPSurn : await f.values[i][keys["surname"]],
          aPWebs : await f.values[i][keys["website"]],
        }
      }
    }
    // window.alert(Object.keys(allPeople));
  });
  //teaching
  loadJSON(sheets[9], async function(response) {

    const f = await JSON.parse(response);
    const keys = mapToObj(await f.values[0]);
    
    allTeachi={};
    for (let i in f.values) {
      if ( i > 0 ) {

        const idx = String("id-" + makeID(
            await f.values[i][keys["class"]] + await f.values[i][keys["year"]]
            )
          );
        
        allTeachi[idx] = {
          aTTime : await f.values[i][keys["timestamp"]],
          aTType : await f.values[i][keys["type"]],
          aTClas : await f.values[i][keys["class"]],
          aTInst : await f.values[i][keys["institution"]],
          aTDept : await f.values[i][keys["department"]],
          aTTerm : await f.values[i][keys["term"]],
          aTYear : await f.values[i][keys["year"]],
        };
      }
    }
    // window.alert(Object.keys(allTeachi));
  });
  //awards
  loadJSON(sheets[10], async function(response) {

    const f = JSON.parse(response);
    const keys = mapToObj( await f.values[0]);

    allAwards={};
    for (let i in f.values) {
      if ( i > 0 ) {
        allAwards[String("id-"+makeID( await f.values[i][keys["title"]]+f.values[i][keys["where"]]))] = {
          aATime : await f.values[i][keys["timestamp"]], 
          aAType : await f.values[i][keys["type"]], 
          aATitl : await f.values[i][keys["title"]], 
          aADura : await f.values[i][keys["duration"]], 
          aAWher : await f.values[i][keys["where"]], 
          aAWhoo : await f.values[i][keys["who"]], 
          aADesc : await f.values[i][keys["description"]], 
          aAUrll : await f.values[i][keys["url"]], 
        };
      }
    }
    //console.log(Object.keys(allAwards));
  });

  //collabs
  loadJSON(sheets[12], async function(response) {

    const f = JSON.parse(response);
    const keys = mapToObj( await f.values[0]);

    allCollab={};

    for (let i in f.values) {
      if ( i > 0 ) {
        allCollab[String("id-"+makeID( await f.values[i][keys["year"]]+f.values[i][keys["category"]]))] = {
          aCTime : await f.values[i][keys["timestamp"]],
          aCCate : await f.values[i][keys["category"]],
          aCYear : await f.values[i][keys["year"]],
          aCWher : await f.values[i][keys["where"]],
          aCDesc : await f.values[i][keys["description"]],
        };
      }
    }
  });
  //perfor
  loadJSON(sheets[13], async function(response) {

    const f = JSON.parse(response);
    const keys = mapToObj( await f.values[0]);

    allPerfor={};
    for (let i in f.values) {
      if ( i > 0 ) {

        const what =  await f.values[i][keys["title"]];
        const when =  await f.values[i][keys["dates"]];

        allPerfor[String("id-"+makeID(what+when))] = {
          aPTime : await f.values[i][keys["timestamp"]],
          aPWhat : what,
          aPWhen : new Date(when),
          aPHoww : await f.values[i][keys["description"]],
          aPWher : await f.values[i][keys["location"]],
          aPInst : await f.values[i][keys["instrument"]],
          aPWith : await f.values[i][keys["employer"]],
          month: await f.values[i][keys["month"]],
          year: await f.values[i][keys["year"]],
          narrative: await f.values[i][keys["narrative"]],
          header: await f.values[i][keys["header"]],
          category: await f.values[i][keys["category"]],
          url: await f.values[i][keys["url"]],
        };
      }
    }
    //console.log(Object.keys(allPerfor));
  });
  loadJSON(sheets[4], async function(response) {
    const f = JSON.parse(response);
    const keys = mapToObj( await f.values[0]);
    allPerfor={};
    for (let i in f.values) {
      if ( i > 0 ) {
        const timestamp = await f.values[i][keys["timestamp"]];
        allProjects[String("id-"+makeID(timestamp))]= {
          aPTime : timestamp,
          aPPart : await f.values[i][keys["participants"]],
          aPDesc : await f.values[i][keys["description"]],
          aPPpl1 : await f.values[i][keys["p1"]],
          aPimg1 : await f.values[i][keys["p1img"]],
          aPPpl2 : await f.values[i][keys["p2"]],
          aPimg2 : await f.values[i][keys["p2img"]],
          aPPpl3 : await f.values[i][keys["p3"]],
          aPimg3 : await f.values[i][keys["p3img"]],
          aPPpl4 : await f.values[i][keys["p4"]],
          aPimg4 : await f.values[i][keys["p4img"]],
          aPUrl1 : await f.values[i][keys["link1"]],
          aPUrl2 : await f.values[i][keys["link2"]],
          aP1UR1 : await f.values[i][keys["p1link1"]],
          aP1UR2 : await f.values[i][keys["p1link2"]],
          aP1UR3 : await f.values[i][keys["p1link3"]],
          aP2UR1 : await f.values[i][keys["p2link1"]],
          aP2UR2 : await f.values[i][keys["p2link2"]],
          aP2UR3 : await f.values[i][keys["p2link3"]],
          aP3UR1 : await f.values[i][keys["p3link1"]],
          aP3UR2 : await f.values[i][keys["p3link2"]],
          aP3UR3 : await f.values[i][keys["p3link3"]],
          aP4UR1 : await f.values[i][keys["p4link1"]],
          aP4UR2 : await f.values[i][keys["p4link2"]],
          aP4UR3 : await f.values[i][keys["p4link3"]]
        };
      }
    //console.log(Object.keys(allProjects));
    }
  });
  // releases
  loadJSON(sheets[5], async function(response) {
    // console.log(sheets[9]);

    const f = JSON.parse(response);
    const keys = mapToObj( await f.values[0]);
    
    allReleases={};   
    for (let i in f.values) {
      if ( i > 0 ) {
        allReleases[String("id-"+makeID( await f.values[i][keys["timestamp"]]))] = {
          aRTitl : await f.values[i][keys["title"]],
          aRIfra : await f.values[i][keys["iframe"]],
          aRDate : await f.values[i][keys["date"]],
          aRTime : await f.values[i][keys["timestamp"]],
        };
      }
    }
  });
  loadJSON("https://api.github.com/users/fdch/repos?per_page=200", async function(response) {

    const f = JSON.parse(response);
    console.log("Response", f);
    
    allRepos={};   
    for (let i in f) {
      if ( i > 0 ) {
        // skip forked repos
        if ( await f[i]['fork'] ) {
          continue 
        }
        const repo_name = await f[i]["name"];
        const web_url = await f[i]["homepage"];

        allRepos[String("id-"+makeID( await repo_name))] = {
          // >>> d = list(map(lambda x: {'url':x['html_url'], 'name':x['name'], 'description':x['description'], 'date':x['updated_at']}, data))

          aRTitl : repo_name,
          aRDesc : await f[i]["description"],
          aRDate : await f[i]["updated_at"],
          aRHref : await f[i]["html_url"],
          aRWebs : await web_url,
          // aRWebs : await is_real(web_url, s => {
            // console.log("Status for", web_url, s)
            // s !== "404" ? web_url : '';
          // }),
        };
      }
    }
  });
  return;
}
if(!loaded) {
  console.log("Loading...");
  loadAll(allGS).then(() => {
    console.log("Done with load function.");
    loaded = 1
  }); // load asynchronously
} else {
  console.log("Loaded");
}