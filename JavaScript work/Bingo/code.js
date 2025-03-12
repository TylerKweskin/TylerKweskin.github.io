var numb=[0];
var temp = randomNumber(1, 75);
var tempBack=temp;
var tempList=[];
var rng;
var checks="P";
var check2=true;
var numbListB=[0];
setup();
showElement("replay");
hideElement("play");
hideElement("label3");
for(var i=0;i<25;i++){
  setText("let"+i, "#");
  setProperty("let"+i,"background-color",rgb(112, 112, 112));
}
setText("replay", "Play?");
setProperty("let12","background-color",rgb(38, 200, 88));
setText("let12","Free Space");

//The set up of the screen
function setup(){
  numb.length=1;
  numbListB.length=1;
  temp = randomNumber(1, 99);
  tempBack=temp;
  tempList.length=0;
  rng=0;
  setProperty("B","background-color",rgb(112, 112, 112));
  setProperty("I","background-color",rgb(112, 112, 112));
  setProperty("N","background-color",rgb(112, 112, 112));
  setProperty("G","background-color",rgb(112, 112, 112));
  setProperty("O","background-color",rgb(112, 112, 112));
  checks="P";
  for(var i=0;i<5;i++){
    /*console.log("I="+i)
    console.log(1+(i*15));
    console.log(15+(i*15));*/
    numb.sort();
    while (!(numb.indexOf(rng)==-1)){
      rng=randomNumber((1+(i*15)),(15+(i*15)));
      }
      
    setText("let"+(0+i), rng);
    setProperty("let"+(0+i),"background-color",rgb(112, 112, 112));

    appendItem(numb,rng);

      while (!(numb.indexOf(rng)==-1)){
      rng=randomNumber((1+(i*15)),(15+(i*15)));
      }
    
    setText("let"+(5+i), rng);
    setProperty("let"+(5+i),"background-color",rgb(112, 112, 112));
    
    appendItem(numb,rng);
    
      while (!(numb.indexOf(rng)==-1
      )){
      rng=randomNumber((1+(i*15)),(15+(i*15)));
      }
    
    setText("let"+(10+i), rng);
    setProperty("let"+(10+i),"background-color",rgb(112, 112, 112));

      appendItem(numb,rng);

      while (!(numb.indexOf(rng)==-1)){
      rng=randomNumber((1+(i*15)),(15+(i*15)));
      }
    
    setText("let"+(15+i), rng);
    setProperty("let"+(15+i),"background-color",rgb(112, 112, 112));
    
      appendItem(numb,rng);
      while (!(numb.indexOf(rng)==-1)){
      rng=randomNumber((1+(i*15)),(15+(i*15)));
      }
    setText("let"+(20+i), rng);
    setProperty("let"+(20+i),"background-color",rgb(112, 112, 112));
      appendItem(numb,rng);
  }
  setProperty("let12","background-color",rgb(38, 200, 88));
  rng=0;
  setText("let12","Free Space");
}

onEvent("replay", "click", function( ) {
  hideElement("replay");
  showElement("play");
  showElement("label3");
  if (!check2){
    setText("label3","Get a new Number");
  }
  check2=false;
  setProperty("label3","font-size",18);
  setProperty("label3","text-align","left");
  setup();
});

onEvent("play", "click", function( ) {
  setProperty("label3","font-size",37);
  setProperty("label3","text-align","center");
  while (!(numbListB.indexOf(rng)==-1)){
      rng=randomNumber(1,75);
      }
  appendItem(numbListB,rng);
  numbListB.sort();
  if(rng>0&&rng<=15){
    setText("label3","B "+rng);
    checkthrough(0);
  }else if(rng>=16&&rng<=30){
    setText("label3","I "+rng);
    checkthrough(1);
  }else if(rng>=31&&rng<=45){
    setText("label3","N "+rng);
    checkthrough(2);
  }else if(rng>=46&&rng<=60){
    setText("label3","G "+rng);
    checkthrough(3);
  }else if(rng>=61&&rng<=75){
    setText("label3","O "+rng);
    checkthrough(4);
  }
  setText("replay","Replay?");
});
function checkthrough(n){
  if(getText("let"+(0+n))==rng){
      console.log("Yes");
      setProperty("let"+(0+n),"background-color",rgb(38, 200, 88));
      BINGO();
      return;
    }if(getText("let"+(5+n))==rng){
      console.log("Yes");
      setProperty("let"+(5+n),"background-color",rgb(38, 200, 88));
      BINGO();
      return;
    }if(getText("let"+(10+n))==rng){
      console.log("Yes");
      setProperty("let"+(10+n),"background-color",rgb(38, 200, 88));
      BINGO();
      return;
    }if(getText("let"+(15+n))==rng){
      console.log("Yes");
      setProperty("let"+(15+n),"background-color",rgb(38, 200, 88));
      BINGO();
      return;
    }if(getText("let"+(20+n))==rng){
      console.log("Yes");
      setProperty("let"+(20+n),"background-color",rgb(38, 200, 88));
      BINGO();
      return;
    }
}
//the Checks for each 5 # line
function BINGO() {
  //Row 1
  if (getProperty("let0","background-color")=="rgb(38, 200, 88)"&&getProperty("let1","background-color")=="rgb(38, 200, 88)"
  &&getProperty("let2","background-color")=="rgb(38, 200, 88)"&&getProperty("let3","background-color")=="rgb(38, 200, 88)"
  &&getProperty("let4","background-color")=="rgb(38, 200, 88)") {
    setProperty("B","background-color",rgb(38, 200, 88));
    setProperty("I","background-color",rgb(38, 200, 88));
    setProperty("N","background-color",rgb(38, 200, 88));
    setProperty("G","background-color",rgb(38, 200, 88));
    setProperty("O","background-color",rgb(38, 200, 88));
    showElement("replay");
    hideElement("play");
    hideElement("label3");
    console.log("row1");
    return;
  }
  if (getProperty("let5","background-color")=="rgb(38, 200, 88)"&&getProperty("let6","background-color")=="rgb(38, 200, 88)"
  &&getProperty("let7","background-color")=="rgb(38, 200, 88)"&&getProperty("let8","background-color")=="rgb(38, 200, 88)"
  &&getProperty("let9","background-color")=="rgb(38, 200, 88)") {
    setProperty("B","background-color",rgb(38, 200, 88));
    setProperty("I","background-color",rgb(38, 200, 88));
    setProperty("N","background-color",rgb(38, 200, 88));
    setProperty("G","background-color",rgb(38, 200, 88));
    setProperty("O","background-color",rgb(38, 200, 88));
    showElement("replay");
    hideElement("play");
    hideElement("label3");
    console.log("row2");
    return;
  }
  if (getProperty("let10","background-color")=="rgb(38, 200, 88)"&&getProperty("let11","background-color")=="rgb(38, 200, 88)"
  &&getProperty("let12","background-color")=="rgb(38, 200, 88)"&&getProperty("let13","background-color")=="rgb(38, 200, 88)"
  &&getProperty("let14","background-color")=="rgb(38, 200, 88)") {
    setProperty("B","background-color",rgb(38, 200, 88));
    setProperty("I","background-color",rgb(38, 200, 88));
    setProperty("N","background-color",rgb(38, 200, 88));
    setProperty("G","background-color",rgb(38, 200, 88));
    setProperty("O","background-color",rgb(38, 200, 88));
    showElement("replay");
    hideElement("play");
    hideElement("label3");
    console.log("row3");
    return;
  }
  if (getProperty("let15","background-color")=="rgb(38, 200, 88)"&&getProperty("let16","background-color")=="rgb(38, 200, 88)"
  &&getProperty("let17","background-color")=="rgb(38, 200, 88)"&&getProperty("let18","background-color")=="rgb(38, 200, 88)"
  &&getProperty("let19","background-color")=="rgb(38, 200, 88)") {
    setProperty("B","background-color",rgb(38, 200, 88));
    setProperty("I","background-color",rgb(38, 200, 88));
    setProperty("N","background-color",rgb(38, 200, 88));
    setProperty("G","background-color",rgb(38, 200, 88));
    setProperty("O","background-color",rgb(38, 200, 88));
    showElement("replay");
    hideElement("play");
    hideElement("label3");
    console.log("row 4");
    return;
  }
  if (getProperty("let20","background-color")=="rgb(38, 200, 88)"&&getProperty("let21","background-color")=="rgb(38, 200, 88)"
  &&getProperty("let22","background-color")=="rgb(38, 200, 88)"&&getProperty("let23","background-color")=="rgb(38, 200, 88)"
  &&getProperty("let24","background-color")=="rgb(38, 200, 88)") {
    setProperty("B","background-color",rgb(38, 200, 88));
    setProperty("I","background-color",rgb(38, 200, 88));
    setProperty("N","background-color",rgb(38, 200, 88));
    setProperty("G","background-color",rgb(38, 200, 88));
    setProperty("O","background-color",rgb(38, 200, 88));
    showElement("replay");
    hideElement("play");
    hideElement("label3");
    console.log("row 5");
    return;
  }
  if (getProperty("let0","background-color")=="rgb(38, 200, 88)"&&getProperty("let5","background-color")=="rgb(38, 200, 88)"
  &&getProperty("let10","background-color")=="rgb(38, 200, 88)"&&getProperty("let15","background-color")=="rgb(38, 200, 88)"
  &&getProperty("let20","background-color")=="rgb(38, 200, 88)") {
    setProperty("B","background-color",rgb(38, 200, 88));
    setProperty("I","background-color",rgb(38, 200, 88));
    setProperty("N","background-color",rgb(38, 200, 88));
    setProperty("G","background-color",rgb(38, 200, 88));
    setProperty("O","background-color",rgb(38, 200, 88));
    showElement("replay");
    hideElement("play");
    hideElement("label3");
    console.log("column 1");
    return;
  }
  if (getProperty("let1","background-color")=="rgb(38, 200, 88)"&&getProperty("let6","background-color")=="rgb(38, 200, 88)"
  &&getProperty("let11","background-color")=="rgb(38, 200, 88)"&&getProperty("let16","background-color")=="rgb(38, 200, 88)"
  &&getProperty("let21","background-color")=="rgb(38, 200, 88)") {
    setProperty("B","background-color",rgb(38, 200, 88));
    setProperty("I","background-color",rgb(38, 200, 88));
    setProperty("N","background-color",rgb(38, 200, 88));
    setProperty("G","background-color",rgb(38, 200, 88));
    setProperty("O","background-color",rgb(38, 200, 88));
    showElement("replay");
    hideElement("play");
    hideElement("label3");
    console.log("column 2");
    return;
  }
  if (getProperty("let2","background-color")=="rgb(38, 200, 88)"&&getProperty("let7","background-color")=="rgb(38, 200, 88)"
  &&getProperty("let12","background-color")=="rgb(38, 200, 88)"&&getProperty("let17","background-color")=="rgb(38, 200, 88)"
  &&getProperty("let22","background-color")=="rgb(38, 200, 88)") {
    setProperty("B","background-color",rgb(38, 200, 88));
    setProperty("I","background-color",rgb(38, 200, 88));
    setProperty("N","background-color",rgb(38, 200, 88));
    setProperty("G","background-color",rgb(38, 200, 88));
    setProperty("O","background-color",rgb(38, 200, 88));
    showElement("replay");
    hideElement("play");
    hideElement("label3");
    console.log("column 3");
    return;
  }
  if (getProperty("let3","background-color")=="rgb(38, 200, 88)"&&getProperty("let8","background-color")=="rgb(38, 200, 88)"
  &&getProperty("let13","background-color")=="rgb(38, 200, 88)"&&getProperty("let18","background-color")=="rgb(38, 200, 88)"
  &&getProperty("let23","background-color")=="rgb(38, 200, 88)") {
    setProperty("B","background-color",rgb(38, 200, 88));
    setProperty("I","background-color",rgb(38, 200, 88));
    setProperty("N","background-color",rgb(38, 200, 88));
    setProperty("G","background-color",rgb(38, 200, 88));
    setProperty("O","background-color",rgb(38, 200, 88));
    showElement("replay");
    hideElement("play");
    hideElement("label3");
    console.log("column 4");
    return;
  }
  if (getProperty("let4","background-color")=="rgb(38, 200, 88)"&&getProperty("let9","background-color")=="rgb(38, 200, 88)"
  &&getProperty("let14","background-color")=="rgb(38, 200, 88)"&&getProperty("let19","background-color")=="rgb(38, 200, 88)"
  &&getProperty("let24","background-color")=="rgb(38, 200, 88)") {
    setProperty("B","background-color",rgb(38, 200, 88));
    setProperty("I","background-color",rgb(38, 200, 88));
    setProperty("N","background-color",rgb(38, 200, 88));
    setProperty("G","background-color",rgb(38, 200, 88));
    setProperty("O","background-color",rgb(38, 200, 88));
    showElement("replay");
    hideElement("play");
    hideElement("label3");
    console.log("column 5");
    return;
  }
  if (getProperty("let0","background-color")=="rgb(38, 200, 88)"&&getProperty("let6","background-color")=="rgb(38, 200, 88)"
  &&getProperty("let12","background-color")=="rgb(38, 200, 88)"&&getProperty("let18","background-color")=="rgb(38, 200, 88)"
  &&getProperty("let24","background-color")=="rgb(38, 200, 88)") {
    setProperty("B","background-color",rgb(38, 200, 88));
    setProperty("I","background-color",rgb(38, 200, 88));
    setProperty("N","background-color",rgb(38, 200, 88));
    setProperty("G","background-color",rgb(38, 200, 88));
    setProperty("O","background-color",rgb(38, 200, 88));
    showElement("replay");
    hideElement("play");
    hideElement("label3");
    console.log("Diagonal down");
    return;
  }
  if (getProperty("let4","background-color")=="rgb(38, 200, 88)"&&getProperty("let8","background-color")=="rgb(38, 200, 88)"
  &&getProperty("let12","background-color")=="rgb(38, 200, 88)"&&getProperty("let16","background-color")=="rgb(38, 200, 88)"
  &&getProperty("let20","background-color")=="rgb(38, 200, 88)") {
    setProperty("B","background-color",rgb(38, 200, 88));
    setProperty("I","background-color",rgb(38, 200, 88));
    setProperty("N","background-color",rgb(38, 200, 88));
    setProperty("G","background-color",rgb(38, 200, 88));
    setProperty("O","background-color",rgb(38, 200, 88));
    showElement("replay");
    hideElement("play");
    hideElement("label3");
    console.log("Diagonal up");
    return;
  }
}
