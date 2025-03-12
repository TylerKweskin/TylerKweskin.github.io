//varibles/setup
var icons=["icon://fa-times","icon://fa-circle-o"];
var player=getText("choosePlayer");
var computer;
var timer = getTime();
var playScore=0;
var compScore=0;
var chPlayer;
var ranNumGen=randomNumber(0,1);
var win=3;
setText("TryAgain","Try Again!");
setPosition("TryAgain",100,5,115,40);
var check;
//next round
onEvent("play","click",function(){
  for(var i=0;i<9;i++){
    setImageURL("icon"+i,"icon://fa-music");
    setProperty("icon"+i,"icon-color",rgb(0,0,0,0));
  }
  
  if (check){
    var vng=randomNumber(0,8);
    setImageURL("icon"+vng,icons[ranNumGen]);
    setProperty("icon"+vng,"icon-color",rgb(0,0,0,1));
    
    showElement("cScore");
    showElement("pScore");
    if((ranNumGen)==1){
      chPlayer=1;
      setText("choosePlayer","X");
    }else if ((ranNumGen)==0) {
      setText("choosePlayer","O");
      chPlayer=0;
    } 
    hideElement("choosePlayer");
  }
  
  hideElement("play");
});

//start game/resetup
onEvent("playAGAIN","click",function(){
  player=getText("choosePlayer");
  computer;
  timer = getTime();
  playScore=0;
  compScore=0;
  chPlayer;
  showElement("choosePlayer");
  win=getText("dropdown1");
  if (win=="Change # of Games?"){
    showElement("winCond");
    setText("winCond","You Didn't Choose the # of Games.");
    setPosition("winCond",40,10,215,65);
    return;
  }
  if(getText("dropdown2")=="Want to Go First?"){
    showElement("winCond");
    setText("winCond","You Didn't Choose if you want to go first.");
    setPosition("winCond",40,10,235,65);
    return;
  }
  
  for(var i=0;i<9;i++){
    setImageURL("icon"+i,"icon://fa-music");
    setProperty("icon"+i,"icon-color",rgb(0,0,0,0));
  }
  if (getText("dropdown2")=="No"){
    check=true;
    ranNumGen=randomNumber(0,1);
    computer=ranNumGen-1;
    
    var Bng=randomNumber(0,8);
    setImageURL("icon"+Bng,icons[ranNumGen]);
    setProperty("icon"+Bng,"icon-color",rgb(0,0,0,1));
    
    showElement("cScore");
    showElement("pScore");
    if((ranNumGen)==1){
      chPlayer=1;
      setText("choosePlayer","X");
    }else if ((ranNumGen)==0) {
      setText("choosePlayer","O");
      chPlayer=0;
    } 
    hideElement("choosePlayer");
  } else {
    check=false;
  }
  setText("pScore","Player Score: "+playScore);
  setText("cScore","Computer Score: "+compScore);
  hideElement("play");
  setScreen("gameScreen");
});

//Click each tile
onEvent("gameScreen", "click", function(event) {
  if(playScore==win||compScore==win){
    setScreen("winScreen");
    showElement("dropdown1");
    if (compScore==win){
      setPosition("winCond",80,10,155,70);
      setText("winCond","Computer Won!!");
    } else {
      setPosition("winCond",80,10,150,40);
      setText("winCond","You Won!!");
    }
    return;
  }
  console.log(event);
  if(event.targetId!="screen1"&&event.targetId!="choosePlayer"&&event.targetId!="play"&&event.targetId!="board"&&event.targetId!="cScore"&&
  event.targetId!="pScore"){
    if(getImageURL(event.targetId)!="icon://fa-headphones"){
      player=getText("choosePlayer");
      if(player!="Choose Player!"){
        iconChange(event.targetId);
        hideElement("choosePlayer");
        showElement("pScore");
        showElement("cScore");
      } else{
        tryAgin("Choose your player!",75,5,130,85);
      }
    }
  }
});

//pause
function pause(howLong) {
timer = getTime();
while (((getTime() - timer) < howLong)){}
}

//pop-up
function tryAgin(word,x,y,w,h){
  showElement("TryAgain");
  setText("TryAgain",word);
  setPosition("TryAgain",x,y,w,h);
  setTimeout(function() {
  hideElement("TryAgain");
  setText("TryAgain","Try Again!");
  setPosition("TryAgain",100,5,115,40);
  }, 1000);
}

//the game itself
function iconChange(locat) {
  if(getImageURL(locat)=="icon://fa-music"){
    if (player=="X"){
      setImageURL(locat,icons[0]);
      chPlayer=0;
      computer=1;
    }else {
      setImageURL(locat,icons[1]);
      chPlayer=1;
      computer=0;
    }
    setProperty(locat,"icon-color",rgb(0,0,0,1));
    if (game()){
      for(var i=0;i<9;i++){
        tryAgin("You Won!",85,5,130,60);
        if (getImageURL("icon"+i)=="icon://fa-music"){
          setImageURL("icon"+i,"icon://fa-headphones");
          setProperty("icon"+i,"icon-color",rgb(0,0,0,0));
        }
      }
      showElement("play");
      return;
    }
    pause(200);
    computers();
    if (game2()){
      tryAgin("Computer Won!",85,5,130,65);
      for(var l=0;l<9;l++){
        if (getImageURL("icon"+l)=="icon://fa-music"){
          setImageURL("icon"+l,"icon://fa-headphones");
          setProperty("icon"+l,"icon-color",rgb(0,0,0,0));
        }
      }
      showElement("play");
      return;
    }
    for(var p=0;p<9;p++){
      if(getImageURL("icon"+p)=="icon://fa-music"){
        return;
      }
    }
    tryAgin("Tie",120,10,70,45);
    console.log("tie");
    showElement("play");
    compScore++;
    playScore++;
    setText("pScore","Player Score: "+playScore);
    setText("cScore","Computer Score: "+compScore);
  } else{
    tryAgin("Click a Different Square!",95,5,130,85);
  }
}

//computer calculation
function computers() {
  var T=getTime();
  while((getTime()-T)<100){
    var rng=randomNumber(0,8);
    if (getImageURL("icon"+rng)=="icon://fa-music"){
      setImageURL("icon"+rng,icons[computer]);
      setProperty("icon"+rng,"icon-color",rgb(0,0,0,1));
      return;
    }
  }
  return;
}

//win condition for player
function game(){
  if(getImageURL("icon0")==getImageURL("icon1")&&getImageURL("icon1")==getImageURL("icon2")&&getImageURL("icon1")==icons[chPlayer]){
    playScore++;
    setText("pScore","Player Score: "+playScore);
    console.log("row1P");
    return true;
  } else if(getImageURL("icon3")==getImageURL("icon4")&&getImageURL("icon4")==getImageURL("icon5")&&getImageURL("icon4")==icons[chPlayer]){
    playScore++;
    setText("pScore","Player Score: "+playScore);
    console.log("row2P");
    return true;
  } else if(getImageURL("icon6")==getImageURL("icon7")&&getImageURL("icon7")==getImageURL("icon8")&&getImageURL("icon7")==icons[chPlayer]){
    playScore++;
    setText("pScore","Player Score: "+playScore);
    console.log("row3P");
    return true;
  } else if(getImageURL("icon0")==getImageURL("icon3")&&getImageURL("icon3")==getImageURL("icon6")&&getImageURL("icon3")==icons[chPlayer]){
    playScore++;
    setText("pScore","Player Score: "+playScore);
    console.log("col1P");
    return true;
  } else if(getImageURL("icon1")==getImageURL("icon4")&&getImageURL("icon4")==getImageURL("icon7")&&getImageURL("icon4")==icons[chPlayer]){
    playScore++;
    setText("pScore","Player Score: "+playScore);
    console.log("col2P");
    return true;
  } else if(getImageURL("icon2")==getImageURL("icon5")&&getImageURL("icon5")==getImageURL("icon8")&&getImageURL("icon5")==icons[chPlayer]){
    playScore++;
    setText("pScore","Player Score: "+playScore);
    console.log("col3P");
    return true;
  } else if(getImageURL("icon0")==getImageURL("icon4")&&getImageURL("icon4")==getImageURL("icon8")&&getImageURL("icon4")==icons[chPlayer]){
    playScore++;
    setText("pScore","Player Score: "+playScore);
    console.log("dia1P");
    return true;
  } else if(getImageURL("icon2")==getImageURL("icon4")&&getImageURL("icon4")==getImageURL("icon6")&&getImageURL("icon4")==icons[chPlayer]){
    playScore++;
    setText("pScore","Player Score: "+playScore);
    console.log("dia2P");
    return true;
  }
  return false;
}

//win condition for computer
function game2(){
  if(getImageURL("icon0")==getImageURL("icon1")&&getImageURL("icon1")==getImageURL("icon2")&&getImageURL("icon1")==icons[computer]){
      compScore++;
      setText("cScore","Computer Score: "+compScore);
      console.log("row1C");
      return true;
  } else if(getImageURL("icon3")==getImageURL("icon4")&&getImageURL("icon4")==getImageURL("icon5")&&getImageURL("icon4")==icons[computer]){
      compScore++;
      setText("cScore","Computer Score: "+compScore);
      console.log("row2C");
      return true;
  } else if(getImageURL("icon6")==getImageURL("icon7")&&getImageURL("icon7")==getImageURL("icon8")&&getImageURL("icon7")==icons[computer]){
      compScore++;
      setText("cScore","Computer Score: "+compScore);
      console.log("row3C");
      return true;
  } else if(getImageURL("icon0")==getImageURL("icon3")&&getImageURL("icon3")==getImageURL("icon6")&&getImageURL("icon3")==icons[computer]){
      compScore++;
      setText("cScore","Computer Score: "+compScore);
      console.log("col1C");
      return true;
  } else if(getImageURL("icon1")==getImageURL("icon4")&&getImageURL("icon4")==getImageURL("icon7")&&getImageURL("icon4")==icons[computer]){
      compScore++;
      setText("cScore","Computer Score: "+compScore);
      console.log("col2C");
      return true;
  } else if(getImageURL("icon2")==getImageURL("icon5")&&getImageURL("icon5")==getImageURL("icon8")&&getImageURL("icon5")==icons[computer]){
      compScore++;
      setText("cScore","Computer Score: "+compScore);
      console.log("col3C");
      return true;
  } else if(getImageURL("icon0")==getImageURL("icon4")&&getImageURL("icon4")==getImageURL("icon8")&&getImageURL("icon4")==icons[computer]){
      compScore++;
      setText("cScore","Computer Score: "+compScore);
      console.log("dia1C");
      return true;
  } else if(getImageURL("icon2")==getImageURL("icon4")&&getImageURL("icon4")==getImageURL("icon6")&&getImageURL("icon4")==icons[computer]){
      compScore++;
      setText("cScore","Computer Score: "+compScore);
      console.log("dia2C");
      return true;
  }
  return false;
}