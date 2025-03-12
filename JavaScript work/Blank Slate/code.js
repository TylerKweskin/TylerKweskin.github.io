//Creation of the Word
var words=["sea","pass","pea","neck","cheap","roller","lime","happy","head","pillow","milk","broken","chop","night","party"];
var blank=randomNumber(1,2);
var word=words[randomNumber(0,words.length-1)].toUpperCase();
if(blank==1){
  word=word+"____";
}else if(blank==2){
  word="____"+word;
}

setText("spaceWord",word);

//Scores
var score = {"S1":0,"S2":0,"S3":0,"S4":0,"S5":0,"S6":0,"S7":0,"S8":0};

//for check2
var tempList=[];
var ttemp=[];
var hold2="aasazzvdgfjnxzjann 13699";
var hold;
var chan=0;

//dups checks
var has = {"H0":0,"H1":0,"H2":0,"H3":0,"H4":0,"H5":0,"H6":0,"H7":0};
var nums=1;


var playerS=[];
var it=0;

var pNum=getNumber("numOPlayer");

onEvent("numOPlayer","change",function(){
  pNum=getNumber("numOPlayer");
});

//continue game
onEvent("gameButt","click",function(){
  
  //resets game
  playerS.length=0;
  blank=randomNumber(1,2);
  word=words[randomNumber(0,words.length-1)].toUpperCase();
  if(blank==1){
    word=word+"____";
  }else if(blank==2){
    word="____"+word;
  }
  setScreen("game");
  setText("spaceWord",word);
  
  //for check2
  tempList.length=0;
  ttemp.length=0;
  hold2="aasazzvdgfjnxzjann 13699";
  hold="";
  chan=0;
  
  has = {"H0":0,"H1":0,"H2":0,"H3":0,"H4":0,"H5":0,"H6":0,"H7":0};
  nums=1;
  it=0;
  
});

onEvent("readyButt","click",function(){
  showElement("confirmButt");
  hideElement("readyButt");
  showElement("playerInput");
  setText("compLab","Complete The Phrase/Word");
});

//To next player/taly points
onEvent("confirmButt", "click", function( ) {
  if(getText("playerInput")!=""){
    appendItem(playerS,getText("playerInput").toUpperCase());
    it++;
    setText("playerInput","");
    setText("compLab","Complete The Phrase/Word");
    if(it<pNum){
      confButt();
      return;
    }
    check2();
    //ends game
    for(var i=1;i<(pNum)+1;i++){
      if(getValue(score,"S"+i)>=25){
        setScreen("endScreen");
        setText("scorePoint","");
        console.log(score);
        for(var x=1;x<(pNum)+1;x++){
          setText("scorePoint",getText("scorePoint")+"Player "+x+": "+getValue(score,"S"+x)+"\n");
        }
        return;
      }
    }
    pointS();
  }
});
//same thing but keyboard enter
onEvent("game", "keydown", function(event) {
  if(event.key=="Enter"){
    if(getText("playerInput")!=""){
      appendItem(playerS,getText("playerInput").toUpperCase());
      it++;
      setText("playerInput","");
      setText("compLab","Complete The Phrase/Word");
      if(it<pNum){
        confButt();
        return;
      }
      check2();
      //ends game
      for(var i=1;i<(pNum)+1;i++){
        if(getValue(score,"S"+i)>=25){
          setScreen("endScreen");
          setText("scorePoint","");
          console.log(score);
          for(var x=1;x<(pNum)+1;x++){
            setText("scorePoint",getText("scorePoint")+"Player "+x+": "+getValue(score,"S"+x)+"\n");
          }
          return;
        }
      }
      pointS();
    }
  }
});

//back to main menu
onEvent("menuButt","click",function(){
  setScreen("menu");
  setText("numOPlayer","4 Players");
  pNum=getText("numOPlayer");
});

//Playbutton/resets game fully
onEvent("playButt","click",function(){
  playerS.length=0;
  blank=randomNumber(1,2);
  word=words[randomNumber(0,words.length-1)].toUpperCase();
  if(blank==1){
    word=word+"____";
  }else if(blank==2){
    word="____"+word;
  }
  setScreen("game");
  setText("spaceWord",word);
  setText("playerInput","");
  
  score = {"S1":0,"S2":0,"S3":0,"S4":0,"S5":0,"S6":0,"S7":0,"S8":0};
  
  //for check2
  tempList.length=0;
  ttemp.length=0;
  hold2="aasazzvdgfjnxzjann 13699";
  hold="";
  chan=0;
  
  has = {"H0":0,"H1":0,"H2":0,"H3":0,"H4":0,"H5":0,"H6":0,"H7":0};
  nums=1;
  it=0;
});

//Loops through PlayerS to find Dups
function check2(){
  tempList.length=0;
  for(var i=0;i<playerS.length;i++){
    appendItem(tempList,playerS[i]+"");
  }
  ttemp.length=0;
  for(var i=0;i<playerS.length;i++){
    appendItem(ttemp,playerS[i]+"");
  }
  tempList.sort();
  console.log(tempList);
  for (var i=0;i<tempList.length;i++) {
    hold=tempList[i];
    if(ttemp.indexOf(hold)!=-1){
      if(hold!=hold2){
        chan=chan+1;
        dups();
        nums=1;
      }
      if(hold==hold2){
        nums++;
      }
      hold2=tempList[i];
      var p=tempList.indexOf(hold);
      var x=ttemp.indexOf(hold);
      addPair(has, "H"+x, 1);
      removeItem(ttemp,x);
      insertItem(ttemp,x,chan);
      removeItem(tempList,p);
      insertItem(tempList,p,chan);
    }
  }
  dups();
  has = {"H0":0,"H1":0,"H2":0,"H3":0,"H4":0,"H5":0,"H6":0,"H7":0};
  console.log(score);
}



//checks for dups to score
function dups(){
  if(nums==2){
    for(var x=0;x<pNum;x++){
      if(getValue(has,"H"+x)==1){
        addPair(score, "S"+((x)+1), getValue(score,"S"+((x)+1))+3);
        if(getValue(score,"S"+((x)+1))>=25){
          addPair(score, "S"+((x)+1), 25);
        }
        addPair(has, "H"+x, 0);
      }
    }
  }
  if(nums>=3){
    for(var x=0;x<pNum;x++){
      if(getValue(has,"H"+x)==1){
        addPair(score, "S"+((x)+1), getValue(score,"S"+((x)+1))+1);
        if(getValue(score,"S"+((x)+1))>=25){
          addPair(score, "S"+((x)+1), 25);
        }
        addPair(has, "H"+x, 0);
      }
    }
  }
  
}

//goes to point Screen (made for organization)
function pointS(){
  setScreen("ApointScreen");
  setText("pointText","Player 1"+": "+getValue(score,"S1")+"\n");
  setText("words",playerS[0]);
  for(var i=2;i<(pNum)+1;i++){
    setText("pointText",getText("pointText")+"Player "+i+": "+getValue(score,"S"+i)+"\n");
  }
  for(var i=1;i<playerS.length;i++){
    setText("words",getText("words")+", "+playerS[i]);
  }
  
}

//confirmation of players button just so it can be enabled and disabled at will
function confButt(){
  setText("compLab","Give to Player "+((it)+1));
  hideElement("playerInput");
  hideElement("confirmButt");
  showElement("readyButt");
}