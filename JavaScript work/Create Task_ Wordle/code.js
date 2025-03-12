//Variables
var wordList=["aback","agate","agile","aloft","alone","aloof","apple","basic","beach",
"bench","birds","boare","cable","cigar","clint","corny","could","cower","crane","crash",
"crimp","cynic","dizzy","eagle","elder","equip","essay","field","fizzy","frame","front",
"fuzzy","gamma","biome","glass","goats","golem","goner","goods","goose","grace","grade",
"greet","guard","guide","guild","hatch","honey","humor","hyper","index","jazzy","jiffy",
"karma","kebab","knife","knock","knoll","labor","lapel","layer","light","loner","loose",
"lying","model","moist","motor","moult","mount","parry","pause","perky","pizza","plane",
"pleat","prick","proof","queen","quiet","salad","shard","share","sharp","shoot","shrub",
"shtik","skill","soare","spend","spicy","spray","start","stats","still","stink","storm",
"strap","sugar","swell","teach","theft","theme","thorn","those","thumb","tread","trial",
"ulcer","ultra","weave","whack","wince","wrung"];
console.log(wordList.length);
var hold=getText("wordleInput");
var word="aword".toUpperCase();
var seT=0;
var temp=[];
var ttemp=[];
var time;
var f=getTime();
var v;
//sets letters to empty
for (var i = 0; i < 30; i++) {
  setText("let"+i, "");
  setProperty("let"+i,"background-color",rgb(112, 112, 112));
}

//Start the game
onEvent("play", "click", function( ) {
  hideElement("play");
  showElement("check");
  showElement("wordleInput");
  hideElement("outPutAfter");
  hideElement("timer");
  word=wordList[randomNumber(0,wordList.length-1)].toUpperCase();
  console.log(word);
  seT=0;
  for (var i = 0; i < 30; i++) {
    setText("let"+i, "");
    setProperty("let"+i,"background-color",rgb(112, 112, 112));
  }
  time=getTime();
});

//start search
onEvent("check","click",function(){
  if(hold.length==5){
      upScreen(getText("wordleInput"));
      setText("wordleInput","");
  }
});

//input limiter to 3 items
onEvent("wordleInput", "input", function( ) {
  if((getText("wordleInput").length-1)>=5){
    setText("wordleInput", hold);
  }
  hold=getText("wordleInput");
});

//check if word exists
function check(isIt){
  setText("check", "Check?");
  for (var t = 0; t < wordList.length; t++) {
    if (isIt.toUpperCase()==wordList[t].toUpperCase()) {
      return true;
    }
  }
  setText("check", "Check Again");
  return false;
}


function upScreen(answer){
//sets the Text on to the page
  for (var i = 0; i < 5; i++) {
    setText("let"+(i+seT), answer[i].toUpperCase());
  }
  
//check if answer is right
if (userGotIt(answer.toUpperCase())){
    for (var p = 0; p < 5; p++) {
      setProperty("let"+(p+seT),"background-color",rgb(61,181,90));
    }
    console.log("nice");
    hideElement("wordleInput");
    hideElement("check");
    setText("play","Replay?");
    setPosition("play",-1,385);
    showElement("play");
    setText("outPutAfter","You Won!");
    showElement("timer");
    f=getTime();
    setText("timer","Time: "+(Math.round((f-time)/1000))+" seconds");
    showElement("outPutAfter");
  } else if(true){
    check2(answer);
    console.log("no");
    seT+=5;
  }
//User can't guess any more  
if (seT>=30){
    hideElement("wordleInput");
    hideElement("check");
    setText("play","Replay?");
    setPosition("play",-1,385);
    showElement("play");
    setText("outPutAfter","You Ran out of guesses!/n The Word was: "+word);
    showElement("outPutAfter");
    showElement("timer");
    f=getTime();
    setText("timer","Time: "+(Math.round((f-time)/1000))+" seconds");
  }
}

//checks if the letter is in the right spot
function check2(SEE){
  temp.length=0;
  for(var b=0;b<SEE.length;b++){
    appendItem(temp, SEE[b].toUpperCase());
  }
  ttemp.length=0;
  for(var f=0;f<word.length;f++){
    appendItem(ttemp, word[f].toUpperCase());
  }
  // is the letter in the right spot
  for (var c = 0; c < word.length; c++) {
    if (temp[c]==word[c]) {
      setProperty("let"+(c+seT),"background-color",rgb(61,181,90));
      removeItem(temp,c);
      removeItem(ttemp,c);
      insertItem(temp,c," ");
      insertItem(ttemp,c,"+");
    }
  }
  v=ttemp.join("");
//if the letter exitsts
  for(var l=0;l<temp.length;l++){
    if (v.includes(temp[l])) {
      var p=v.indexOf(temp[l]);
      setProperty("let"+(l+seT),"background-color",rgb(201, 190, 35));
      removeItem(temp,l);
      removeItem(ttemp,p);
      insertItem(temp,l," ");
      insertItem(ttemp,p,"+");
      v=ttemp.join("");
    }
  }
}

//User Got the answer
function userGotIt(yup) {
  if (yup==word) {
    return true;
  }
  
}
