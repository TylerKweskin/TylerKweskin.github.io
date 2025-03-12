var colors=["rgb(205,177,222)","rgb(255, 39, 39)","rgb(241, 255, 39)","rgb(81, 88, 246)","rgb(81, 246, 124)","rgb(255, 157, 39)"];
var regi=["Water","Snow","Fire"];
var power=randomNumber(2,12);
var pPower=[];
var cPower=[];
var reg=randomNumber(0,2);
var pReg =[];
var cReg=[];
var rand;
var p;
var pSnow=0;
var sP=0;
var pFire=0;
var fP=0;
var pWater=0;
var wP=0;
gen("player");
var pBSnow=[];
var pBWater=[];
var pBFire=[];
var tPW=[];
var tPF=[];
var tPS=[];
var pF=tPF.join("");
var pW=tPW.join("");
var pS=tPS.join("");
var cSnow=0;
var sC=0;
var cFire=0;
var fC=0;
var cWater=0;
var wC=0;
gen("comp");
var cBSnow=[];
var cBWater=[];
var cBFire=[];
var tCW=[];
var tCF=[];
var tCS=[];
var cF=tCF.join("");
var cW=tCW.join("");
var cS=tCS.join("");
var checkS=true;
setProperty("compShow","background-color","green");
/*
for(var v=0;v<4;v++){
  showElement("comp"+v);
}
*/


onEvent("reset","click",function(){
  setScreen("screen1");
  pPower.length=0;
  cPower.length=0;
  pReg.length=0;
  cReg.length=0;
  pSnow=0;
  sP=0;
  pFire=0;
  fP=0;
  pWater=0;
  wP=0;
  gen("player");
  
  for(var e=20;e>0;e--){
    deleteElement("pSnow"+e);
    deleteElement("pFire"+e);
    deleteElement("pWater"+e);
    deleteElement("cSnow"+e);
    deleteElement("cFire"+e);
    deleteElement("cWater"+e);
  }
  
  pBSnow.length=0;
  pBWater.length=0;
  pBFire.length=0;
  tPW.length=0;
  tPF.length=0;
  tPS.length=0;
  pF=tPF.join("");
  pW=tPW.join("");
  pS=tPS.join("");
  
  cSnow=0;
  sC=0;
  cFire=0;
  fC=0;
  cWater=0;
  wC=0;
  gen("comp");
  cBSnow.length=0;
  cBWater.length=0;
  cBFire.length=0;
  tCW.length=0;
  tCF.length=0;
  tCS.length=0;
  cF=tCF.join("");
  cW=tCW.join("");
  cS=tCS.join("");
  hideElement("cFire0");
  hideElement("cWater0");
  hideElement("cSnow0");
  hideElement("pFire0");
  hideElement("pWater0");
  hideElement("pSnow0");
});



function gen(person){
    for(var c=0;c<4;c++){
    power=randomNumber(2,12);
    reg=regi[randomNumber(0,1)];
    if (person=="player"){
      appendItem(pReg,reg);
      appendItem(pPower,power);
    } else{
      appendItem(cReg,reg);
      appendItem(cPower,power);
    }
    
    setText(person+c,reg+" Power "+power);
    setProperty(person+c,"background-color",colors[randomNumber(0,colors.length-1)]);
  }
}

onEvent("compShow","click",function(){
  if(checkS){
    showElement("comp0");
    showElement("comp1");
    showElement("comp2");
    showElement("comp3");
    setProperty("compShow","background-color","green");
    checkS=!checkS;
  } else if(!checkS){
    hideElement("comp0");
    hideElement("comp1");
    hideElement("comp2");
    hideElement("comp3");
    checkS=!checkS;
    setProperty("compShow","background-color","red");
  }
});

//card clicked
onEvent("screen1","mousedown",function(event){
  if(pSnow>sP){
    textLabel("pSnow"+pSnow,"Water Power 11");
    setPosition("pSnow"+pSnow,160,getProperty("pSnow"+sP,"y")+25,75,40);
    setProperty("pSnow"+pSnow,"border-radius",4);
    setProperty("pSnow"+pSnow,"border-width",0);
    setProperty("pSnow"+pSnow,"font-family","Trebuchet");
    setProperty("pSnow"+pSnow,"font-size",10);
    setProperty("pSnow"+pSnow,"text-color",rgb(77, 73, 73));
    setProperty("pSnow"+pSnow,"background-color","rgb(255, 255, 255)");
    hideElement("pSnow"+pSnow);
    sP=pSnow;
  }
  if(pWater>wP){
    textLabel("pWater"+pWater,"Water Power 11");
    setPosition("pWater"+pWater,80,getProperty("pWater"+wP,"y")+25,75,40);
    setProperty("pWater"+pWater,"border-radius",4);
    setProperty("pWater"+pWater,"border-width",0);
    setProperty("pWater"+pWater,"font-family","Trebuchet");
    setProperty("pWater"+pWater,"font-size",10);
    setProperty("pWater"+pWater,"text-color",rgb(77, 73, 73));
    setProperty("pWater"+pWater,"background-color","rgb(255, 255, 255)");
    hideElement("pWater"+pWater);
    wP=pWater;
  }
  if(pFire>fP){
    textLabel("pFire"+pFire,"Water Power 11");
    setPosition("pFire"+pFire,0,getProperty("pFire"+fP,"y")+25,75,40);
    setProperty("pFire"+pFire,"border-radius",4);
    setProperty("pFire"+pFire,"border-width",0);
    setProperty("pFire"+pFire,"font-family","Trebuchet");
    setProperty("pFire"+pFire,"font-size",10);
    setProperty("pFire"+pFire,"text-color",rgb(77, 73, 73));
    setProperty("pFire"+pFire,"background-color","rgb(255, 255, 255)");
    hideElement("pFire"+pFire);
    fP=pFire;
  }
  
  if(cSnow>sC){
    textLabel("cSnow"+cSnow,"Water Power 11");
    setPosition("cSnow"+cSnow,85,getProperty("cSnow"+sC,"y")+25,75,40);
    setProperty("cSnow"+cSnow,"border-radius",4);
    setProperty("cSnow"+cSnow,"border-width",0);
    setProperty("cSnow"+cSnow,"font-family","Trebuchet");
    setProperty("cSnow"+cSnow,"font-size",10);
    setProperty("cSnow"+cSnow,"text-color",rgb(77, 73, 73));
    setProperty("cSnow"+cSnow,"background-color","rgb(255, 255, 255)");
    hideElement("cSnow"+cSnow);
    sC=cSnow;
  }
  if(cWater>wC){
    textLabel("cWater"+cWater,"Water Power 11");
    setPosition("cWater"+cWater,245,getProperty("cWater"+wC,"y")+25,75,40);
    setProperty("cWater"+cWater,"border-radius",4);
    setProperty("cWater"+cWater,"border-width",0);
    setProperty("cWater"+cWater,"font-family","Trebuchet");
    setProperty("cWater"+cWater,"font-size",10);
    setProperty("cWater"+cWater,"text-color",rgb(77, 73, 73));
    setProperty("cWater"+cWater,"background-color","rgb(255, 255, 255)");
    hideElement("cWater"+cWater);
    wC=cWater;
  }
  if(cFire>fC){
    textLabel("cFire"+cFire,"Water Power 11");
    setPosition("cFire"+cFire,165,getProperty("cFire"+fC,"y")+25,75,40);
    setProperty("cFire"+cFire,"border-radius",4);
    setProperty("cFire"+cFire,"border-width",0);
    setProperty("cFire"+cFire,"font-family","Trebuchet");
    setProperty("cFire"+cFire,"font-size",10);
    setProperty("cFire"+cFire,"text-color",rgb(77, 73, 73));
    setProperty("cFire"+cFire,"background-color","rgb(255, 255, 255)");
    hideElement("cFire"+cFire);
    fC=cFire;
  }
  

  if(event.targetId=="player0"||event.targetId=="player1"||event.targetId=="player2"||event.targetId=="player3"){
    if(event.targetId=="player0"){
      p=0;
    }else if(event.targetId=="player1"){
      p=1;
    }else if(event.targetId=="player2"){
      p=2;
    }else if(event.targetId=="player3"){
      p=3;
    }
    
    rand=randomNumber(0,3);
    hideElement("player"+p);
    hideElement("back"+rand);
    hideElement("comp"+rand);
    setStyle("player0", "z-index: 99");
    setStyle("player1", "z-index: 99");
    setStyle("player2", "z-index: 99");
    setStyle("player3", "z-index: 99");
    setTimeout(function() {
      showElement("player0");
      showElement("player1");
      showElement("player2");
      showElement("player3");
      showElement("back0");
      showElement("back1");
      showElement("back2");
      showElement("back3");
      if(!checkS){
        showElement("comp0");
        showElement("comp1");
        showElement("comp2");
        showElement("comp3");
      }
    }, 500);
    
    showElement("test0");
    setText("test0",getText("player"+p));
    setProperty("test0","background-color",getProperty("player"+p,"background-color"));
    showElement("test1");
    setText("test1",getText("comp"+rand));
    setProperty("test1","background-color",getProperty("comp"+rand,"background-color"));
    setTimeout(function() {
      hideElement("test0");
      hideElement("test1");
    },525);
    
    check(rand,p);
    
    power=randomNumber(2,12);
    removeItem(pPower,p);
    insertItem(pPower,p,power);
    reg=regi[randomNumber(0,2)];
    removeItem(pReg,p);
    insertItem(pReg,p,reg);
    
    setText("player"+p,reg+" Power "+power);
    setProperty("player"+p,"background-color",colors[randomNumber(0,colors.length-1)]);
    
    power=randomNumber(2,12);
    removeItem(cPower,rand,power);
    insertItem(cPower,rand,power);
    reg=regi[randomNumber(0,2)];
    removeItem(cReg,rand);
    insertItem(cReg,rand,reg);
    
    setText("comp"+rand,reg+" Power "+power);
    setProperty("comp"+rand,"background-color",colors[randomNumber(0,colors.length-1)]);
    endGameP();
    endGameC();
  }
});

//check betwen cards
function check(cCard,pCard){
  if(cReg[cCard]==pReg[pCard]){
    if (cPower[cCard]>pPower[pCard]){
      console.log("Comp won tie");
      //Snow
      if(cReg[cCard]==regi[1]){
        setText("cSnow"+cSnow,getText("comp"+cCard));
        showElement("cSnow"+cSnow);
        setProperty("cSnow"+cSnow,"background-color",getProperty("comp"+cCard,"background-color"));
        appendItem(cBSnow,getProperty("comp"+cCard,"background-color"));
        cSnow++;
    //fire
      }else if(cReg[cCard]==regi[2]){
        setText("cFire"+cFire,getText("comp"+cCard));
        showElement("cFire"+cFire);
        setProperty("cFire"+cFire,"background-color",getProperty("comp"+cCard,"background-color"));
        appendItem(cBFire,getProperty("comp"+cCard,"background-color"));
        cFire++;
    //Water
      }else if(cReg[cCard]==regi[0]){
        setText("cWater"+cWater,getText("comp"+cCard));
        showElement("cWater"+cWater);
        setProperty("cWater"+cWater,"background-color",getProperty("comp"+cCard,"background-color"));
        appendItem(cBWater,getProperty("comp"+cCard,"background-color"));
        cWater++;
      }
    } else if(pPower[pCard]>cPower[cCard]){
      console.log("you got tie");
    //Snow
      if(pReg[pCard]==regi[1]){
        setText("pSnow"+pSnow,getText("player"+pCard));
        showElement("pSnow"+pSnow);
        setProperty("pSnow"+pSnow,"background-color",getProperty("player"+pCard,"background-color"));
        appendItem(pBSnow,getProperty("player"+pCard,"background-color"));
        pSnow++;
    //fire
      }else if(pReg[pCard]==regi[2]){
        setText("pFire"+pFire,getText("player"+pCard));
        showElement("pFire"+pFire);
        setProperty("pFire"+pFire,"background-color",getProperty("player"+pCard,"background-color"));
        appendItem(pBFire,getProperty("player"+pCard,"background-color"));
        pFire++;
    //Water
      }else if(pReg[pCard]==regi[0]){
        setText("pWater"+pWater,getText("player"+pCard));
        showElement("pWater"+pWater);
        setProperty("pWater"+pWater,"background-color",getProperty("player"+pCard,"background-color"));
        appendItem(pBWater,getProperty("player"+pCard,"background-color"));
        pWater++;
      } 
    } else{
      console.log("stailmate");
    }
  } 
//Snow Vs Water
  else if((cReg[cCard]==regi[1]||cReg[cCard]==regi[0])&&(pReg[pCard]==regi[1]||pReg[pCard]==regi[0])){
    if(pReg[pCard]==regi[1]){
      console.log("SNOW");
      setText("pSnow"+pSnow,getText("player"+pCard));
      showElement("pSnow"+pSnow);
      setProperty("pSnow"+pSnow,"background-color",getProperty("player"+pCard,"background-color"));
      appendItem(pBSnow,getProperty("player"+pCard,"background-color"));
      pSnow++;
    }else if(cReg[cCard]==regi[1]){
      setText("cSnow"+cSnow,getText("comp"+cCard));
      showElement("cSnow"+cSnow);
      setProperty("cSnow"+cSnow,"background-color",getProperty("comp"+cCard,"background-color"));
      appendItem(cBSnow,getProperty("comp"+cCard,"background-color"));
      cSnow++;
    }
  //Fire Vs Snow
  } else if((cReg[cCard]==regi[1]||cReg[cCard]==regi[2])&&(pReg[pCard]==regi[1]||pReg[pCard]==regi[2])){
    if(pReg[pCard]==regi[2]){
      console.log("FIRE");
      setText("pFire"+pFire,getText("player"+pCard));
      showElement("pFire"+pFire);
      setProperty("pFire"+pFire,"background-color",getProperty("player"+pCard,"background-color"));
      appendItem(pBFire,getProperty("player"+pCard,"background-color"));
      pFire++;
    }else if(cReg[cCard]==regi[2]){
      setText("cFire"+cFire,getText("comp"+cCard));
      showElement("cFire"+cFire);
      setProperty("cFire"+cFire,"background-color",getProperty("comp"+cCard,"background-color"));
      appendItem(cBFire,getProperty("comp"+cCard,"background-color"));
      cSnow++;
//Water vs Fire
    }
  }else if((cReg[cCard]==regi[2]||cReg[cCard]==regi[0])&&(pReg[pCard]==regi[2]||pReg[pCard]==regi[0])){
    if(pReg[pCard]==regi[0]){
      console.log("FIRE");
      setText("pWater"+pWater,getText("player"+pCard));
      showElement("pWater"+pWater);
      setProperty("pWater"+pWater,"background-color",getProperty("player"+pCard,"background-color"));
      appendItem(pBWater,getProperty("player"+pCard,"background-color"));
      pWater++;
    }else if(cReg[cCard]==regi[0]){
      setText("cWater"+cWater,getText("comp"+cCard));
      showElement("cWater"+cWater);
      setProperty("cWater"+cWater,"background-color",getProperty("comp"+cCard,"background-color"));
      appendItem(cBWater,getProperty("comp"+cCard,"background-color"));
      cWater++;
    }
  }
}

//End Game Check
//computer
function endGameC(){
//Water
  tCW.length=0;
  cW=tCW.join("");
  for(var c=0;c<cBWater.length;c++) {
      if (!cW.includes(cBWater[c])) {
        appendItem(tCW,cBWater[c]);
        cW=tCW.join("");
      }
    }
//Fire
  tCF.length=0;
  cF=tCF.join("");
  for(c=0;c<cBFire.length;c++) {
    if (!cF.includes(cBFire[c])) {
      appendItem(tCF,cBFire[c]);
      cF=tCF.join("");
    }
  }
//Snow
  tCS.length=0;
  cS=tCS.join("");
  for(c=0;c<cBSnow.length;c++) {
    if (!cS.includes(cBSnow[c])) {
      appendItem(tCS,cBSnow[c]);
      cS=tCS.join("");
    }
  }
//colums
  if(tCW.length>=3){
    setScreen("screen2");
    win(tCW[0],tCW[1],tCW[2],getText("cWater"+(cBWater.indexOf(tCW[0]))),getText("cWater"+(cBWater.indexOf(tCW[1]))),getText("cWater"+(cBWater.indexOf(tCW[2]))));
    setText("won","comp");
    console.log("cwater");
    return;  
  } else if(tCS.length>=3){
    setScreen("screen2");
    win(tCS[0],tCS[1],tCS[2],getText("cSnow"+(cBSnow.indexOf(tCS[0]))),getText("cSnow"+(cBSnow.indexOf(tCS[1]))),getText("cSnow"+(cBSnow.indexOf(tCS[2]))));
    console.log(getText("cSnow"+(cBSnow.indexOf(tCS[2]))));
    setText("won","comp");
    console.log("cSnow");
    return;  
  } else if(tCF.length>=3){
    setScreen("screen2");
    win(tCF[0],tCF[1],tCF[2],getText("cFire"+(cBFire.indexOf(tCF[0]))),getText("cFire"+(cBFire.indexOf(tCF[1]))),getText("cFire"+(cBFire.indexOf(tCF[2]))));
    console.log(getText("cFire"+(cBFire.indexOf(tCF[2]))));
    setText("won","comp");
    console.log("cFire");
    return;
  } else {
    //rows/diagonals
    for(var o=0;o<tCW.length;o++){
      for(var j=0;j<tCS.length;j++){
        for(var i=0;i<tCF.length;i++){
          if(tCW[o]!=tCS[j]&tCS[j]!=tCF[i]){
            setScreen("screen2");
            win(tCW[o],tCS[j],tCF[i],getText("cWater"+(cBWater.indexOf(tCW[o]))),getText("cFire"+(cBFire.indexOf(tCF[i]))),getText("cSnow"+(cBSnow.indexOf(tCS[o]))));
            setText("won","comp");
            console.log(tCW[o]+" "+tCS[j]+" "+tCF[i]);
            return;
          }
        }
      }
    }
  }
}



//Player
function endGameP(){
//Water
  tPW.length=0;
  pW=tPW.join("");
  for(var c=0;c<pBWater.length;c++) {
      if (!pW.includes(pBWater[c])) {
        appendItem(tPW,pBWater[c]);
        pW=tPW.join("");
      }
    }
//Fire
  tPF.length=0;
  pF=tPF.join("");
  for(c=0;c<pBFire.length;c++) {
    if (!pF.includes(pBFire[c])) {
      appendItem(tPF,pBFire[c]);
      pF=tPF.join("");
    }
  }
//Snow
  tPS.length=0;
  pS=tPS.join("");
  for(c=0;c<pBSnow.length;c++) {
    if (!pS.includes(pBSnow[c])) {
      appendItem(tPS,pBSnow[c]);
      pS=tPS.join("");
    }
  }
//colums
  if(tPW.length>=3){
    setScreen("screen2");
    win(tPW[0],tPW[1],tPW[2],getText("pWater"+(pBWater.indexOf(tPW[0]))),getText("pWater"+(pBWater.indexOf(tPW[1]))),getText("pWater"+(pBWater.indexOf(tPW[2]))));
    setText("won","Play");
    console.log("pwater");
    return;  
  } else if(tPS.length>=3){
    setScreen("screen2");
    win(tPS[0],tPS[1],tPS[2],getText("pSnow"+(pBSnow.indexOf(tPS[0]))),getText("pSnow"+(pBSnow.indexOf(tPS[1]))),getText("pSnow"+(pBSnow.indexOf(tPS[2]))));
    setText("won","Play");
    console.log("pSnow");
    return;  
  } else if(tPF.length>=3){
    setScreen("screen2");
    win(tPF[0],tPF[1],tPF[2],getText("pFire"+(pBFire.indexOf(tPF[0]))),getText("pFire"+(pBFire.indexOf(tPF[1]))),getText("pFire"+(pBFire.indexOf(tPF[2]))));
    setText("won","Play");
    console.log("pFire");
    return;
  } else {
    //rows/diagonals
    for(var o=0;o<tPW.length;o++){
      for(var j=0;j<tPS.length;j++){
        for(var i=0;i<tPF.length;i++){
          if(tPW[o]!=tPS[j]&tPS[j]!=tPF[i]){
            setScreen("screen2");
            win(tPW[o],tPS[j],tPF[i],getText("pWater"+(pBWater.indexOf(tPW[o]))),getText("pFire"+(pBFire.indexOf(tPF[i]))),getText("pSnow"+(pBSnow.indexOf(tPS[o]))));
            console.log(tPW[o]+" "+tPS[j]+" "+tPF[i]);
            setText("won","Play");
            return;
          }
        }
      }
    }
  }
}

function win(oneB,twoB,threeB,oneT,twoT,threeT){
  setText("win0",oneT);
  showElement("win0");
  setProperty("win0","background-color",oneB);
  setText("win1",twoT);
  showElement("win1");
  setProperty("win1","background-color",twoB);
  setText("win2",threeT);
  showElement("win2");
  setProperty("win2","background-color",threeB);
}
