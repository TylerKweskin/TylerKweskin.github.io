var listerine=["abruptly","absurd","abyss","affix","askew","avenue","awkward","axiom","azure","bagpipes","bandwagon","banjo","bayou","beekeeper","bikini","blitz",
"blizzard","boggle","bookworm","boxcar","boxful","buckaroo","buffalo","buffoon","buxom","buzzard","buzzing","buzzwords","caliph","cobweb","cockiness","croquet",
"crypt","curacao","cycle","daiquiri","dirndl","disavow","dizzying","duplex","dwarves","embezzle","equip","espionage","euouae","exodus","faking","fishhook",
"fixable","fjord","flapjack","flopping","fluffiness","flyby","foxglove","frazzled","frizzled","fuchsia","funny","gabby","galaxy","galvanize","gazebo","giaour",
"gizmo","glowworm","glyph","gnarly","gnostic","gossip","grogginess","haiku","haphazard","hyphen","iatrogenic","icebox","injury","ivory","ivy","jackpot","jaundice",
"jawbreaker","jaywalk","jazziest","jazzy","jelly","jigsaw","jinx","jiujitsu","jockey","jogging","joking","jovial","joyful","juicy","jukebox","jumbo","kayak",
"kazoo","keyhole","khaki","kilobyte","kiosk","kitsch","kiwifruit","klutz","knapsack","larynx","lengths","lucky","luxury","lymph","marquis","matrix","megahertz",
"microwave","mnemonic","mystify","naphtha","nightclub","nowadays","numbskull","nymph","onyx","ovary","oxidize","oxygen","pajama","peekaboo","phlegm","pixel",
"pizazz","pneumonia","polka","pshaw","psyche","puppy","puzzling","quartz","queue","quips","quixotic","quiz","quizzes","quorum","razzmatazz","rhubarb","rhythm",
"rickshaw","schnapps","scratch","shiv","snazzy","sphinx","spritz","squawk","staff","strength","strengths","stretch","stronghold","stymied","subway","swivel",
"syndrome","thriftless","thumbscrew","topaz","transcript","transgress","transplant","triphthong","twelfth","twelfths","unknown","unworthy","unzip","uptown",
"vaporize","vixen","vodka","voodoo","vortex","voyeurism","walkway","waltz","wave","wavy","waxy","wellspring","wheezy","whiskey","whizzing","whomever","wimpy",
"witchcraft","wizard","woozy","wristwatch","wyvern","xylophone","yachtsman","yippee","yoked","youthful","yummy","zephyr","zigzag","zigzagging","zilch","zipper",
"zodiac","zombie"];
var ranWordLoc=randomNumber(0,listerine.length);
var word=listerine[ranWordLoc].toUpperCase();
var list=[];
var temp=[];
var uList=[];
var letters=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
letters=letters.join();
for(var i=0;i<word.length;i++){
  appendItem(list," _ ");
}
var v;
var x;
var saveLoc;
var hold=getText("wordInput");
var uLetter=getText("wordInput");
var check=true;
var add=0;
var time=getTime();
var f=getTime();
var xP=1;
var pX=5;
if (word.length>8){
  xP=3;
} else if(word.length>5){
  xP=2;
}
if(word.length<=6){
    pX=3;
}
for(i=0;i<randomNumber(xP,pX);i++){
  check2(word[randomNumber(0,word.length-1)]);
}
setText("words",list.join(""));
setText("finalWord",word);

onEvent("startButton","click",function(){
  setScreen("gameScreen");
});

onEvent("restart","click",function(){
  setProperty("A","background-color",rgb(242, 242, 242));
  setProperty("B","background-color",rgb(242, 242, 242));
  setProperty("C","background-color",rgb(242, 242, 242));
  setProperty("D","background-color",rgb(242, 242, 242));
  setProperty("E","background-color",rgb(242, 242, 242));
  setProperty("F","background-color",rgb(242, 242, 242));
  setProperty("G","background-color",rgb(242, 242, 242));
  setProperty("H","background-color",rgb(242, 242, 242));
  setProperty("I","background-color",rgb(242, 242, 242));
  setProperty("J","background-color",rgb(242, 242, 242));
  setProperty("K","background-color",rgb(242, 242, 242));
  setProperty("L","background-color",rgb(242, 242, 242));
  setProperty("M","background-color",rgb(242, 242, 242));
  setProperty("N","background-color",rgb(242, 242, 242));
  setProperty("O","background-color",rgb(242, 242, 242));
  setProperty("P","background-color",rgb(242, 242, 242));
  setProperty("Q","background-color",rgb(242, 242, 242));
  setProperty("R","background-color",rgb(242, 242, 242));
  setProperty("S","background-color",rgb(242, 242, 242));
  setProperty("T","background-color",rgb(242, 242, 242));
  setProperty("U","background-color",rgb(242, 242, 242));
  setProperty("V","background-color",rgb(242, 242, 242));
  setProperty("W","background-color",rgb(242, 242, 242));
  setProperty("X","background-color",rgb(242, 242, 242));
  setProperty("Y","background-color",rgb(242, 242, 242));
  setProperty("Z","background-color",rgb(242, 242, 242));
  setText("wordInput","");
  ranWordLoc=randomNumber(0,listerine.length);
  word=listerine[ranWordLoc].toUpperCase();
  list.length=0;
  temp.length=0;
  uList.length=0;
  for(var i=0;i<word.length;i++){
    appendItem(list,"_ ");
  }
  hold=getText("wordInput");
  uLetter=getText("wordInput");
  check=true;
  add=0;
  time=getTime();
  f=getTime();
  xP=1;
  pX=5;
  if(word.length>8){
    xP=3;
  } else if(word.length>5){
    xP=2;
  }
  if(word.length<5){
    pX=3;
  }
  
  for(i=0;i<randomNumber(xP,pX);i++){
    check2(word[randomNumber(0,word.length-1)]);
  }
  setText("words",list.join(""));
  setText("finalWord",word);
  for(i=0;i<6;i++){
    hideElement("man"+i);
    hideElement("dMan"+i);
  }
  setScreen("gameScreen");
});


//input limiter to 1 letter
onEvent("wordInput", "input", function( ) {
  setText("wordInput", getText("wordInput").toUpperCase());
  if(getText("wordInput")[1]){
    setText("wordInput", hold);
  }
  hold=getText("wordInput").toUpperCase();
});

onEvent("wordInput", "keydown", function(event) {
  uLetter=getText("wordInput");
  if (letters.includes(getText("wordInput"))){
    if (event.key=="Enter"){
      if(winCond()){
        return;
      }
      
      check2(uLetter);
      setText("words",list.join(""));
      winCond();
    }
  } else {
    setTimeout(function(){
      if (!(letters.includes(getText("wordInput")))) {
        showElement("pop-up");
        setTimeout(function() {
          hideElement("pop-up");
        }, 1000);
      }
    }, 1000);
  }
  if (list.join()==word){
    popUp("Not a letter!!",115,30,105,15);
  }
});


function winCond(){
  if(!(list.join("").includes(" "))){
    setScreen("endScreen");
    f=getTime();
    setText("timer","How long it took: "+(Math.round((f-time)/1000))+" seconds");
    return true;
  }if(add>=6){
    setScreen("endScreen");
    f=getTime();
    setText("timer","How long it took: "+(Math.round((f-time)/1000))+" seconds");
    return true;
  }
    return false;
}


//pop-up
function popUp(word,w,h,x,y){
  showElement("pop-up");
  setText("pop-up",word);
  setPosition("pop-up",x,y,w,h);
  setTimeout(function() {
  hideElement("pop-up");
  setText("pop-up","Try Again!");
  setPosition("TryAgain",100,5,115,40);
  }, 1000);
}

function check2(mLet){
  temp.length=0;
  for(var n=0;n<word.length;n++){
    appendItem(temp, word[n].toUpperCase());
  }
  //if the letter exitsts
  while(!(temp.indexOf(uList)==-1)){
    saveLoc=temp.indexOf(uList);
    removeItem(temp,saveLoc);
    insertItem(temp,saveLoc,"+");
    removeItem(list,saveLoc);
    insertItem(list,saveLoc,uList);
  }
  
  
  v=temp.join("");
  x=v;
//if the letter exitsts
  for(var l=0;l<word.length;l++){
    if (v.includes(mLet)) {
      check=true;
      saveLoc=v.indexOf(mLet);
      v=[];
      for(var b=0;b<word.length;b++){
        appendItem(v, x[b]);
      }
      removeItem(v,saveLoc);
      insertItem(v,saveLoc," ");
      removeItem(list,saveLoc);
      insertItem(list,saveLoc,mLet);
      if (uList.indexOf(mLet)==-1){
        setProperty(mLet,"background-color",rgb(197,231,187));
        appendItem(uList,mLet);
      }
      
      v=v.join("");
      x=v;
    }
  }
  if (!check){
    showElement("man"+add);
    showElement("dMan"+add);
    setProperty(mLet,"background-color",rgb(171, 171, 171));
    add++;
  }
  check=false;
}
