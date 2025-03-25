var JS2d=[
    ["Wordle","Bingo","TicTacToe","Card Jitsu","Hangman","Blank Slate"],
    ["This recreation of the online game Wordle was my submission to College Board for my AP Computer Science Principles Class.","This recreation of Bingo was created to see what I could do while using an edited version of my version of Wordle.","This recreation of Tic Tac Toe was created as another project I could try and make before the  Wordle Assignment was  due in class.","This recreation of the mini-game Card Jitsu was created around the time I was playing a lot of Club Penguin Rewritten (a fan server of Club Penguin that got shut down by Disney) and I was just curious if I could without looking at any Youtube Videos on the subject.","This recreation of Hangman was created as I wanted to make Hangman for the Ap Computer Science Principals test but went with Wordle as they seemed to work similarly and then later I made this after the Creat Task as a wonder of how similar they were.","This recreation of the mini-game Card Jitsu was created around the time I was playing a lot of Club Penguin Rewritten (a fan server of Club Penguin that got shut down by Disney) and I was just curious if I could without looking at any Youtube Videos on the subject."],
    ["JavaScript work/Create Task_ Wordle/index.html","JavaScript work/Bingo/index.html","JavaScript work/Tic Tac Toe/index.html","JavaScript work/Card jitsu/index.html","JavaScript work/Hangman/index.html","JavaScript work/Blank Slate/index.html"]
]

var JAVA2d=[
    ["Shop Simulator","Wanderer","TicTacToe","Chatbot","Tamagotchi","BattleShip","Black Jack and Go Fish"],
    ["I created this as just some demo app of a Sandwich shop simulator for fun one day and worked on it for a while during my CSA class.","I started with the idea of making an Oregon Trail mimic, however it later became an original little text adventure demo akin to Zork","I created this on my own time just to see if I was able to quickly recrate the Tic Tac Toe game I made in java Script but now for Java. I later added this to the chatbot for CSA class as a simple addon.","This goofy little chatbot was a project for AP CSA where I worked with another person using a tic tac toe game I previously made on my own and their hangman game to add more functions to the bot.","This was a simple demo of being able to run code in real time outside of the typical order of operations.","This recreation of Battle Ship was made with another student for a CSA project. The game is very simple, the player has no ships but an ai sets up the board for the player to attack.","This was created with another student, we worked together on the black jack side of things. After finishing the Black Jack game I decided to see if I could make Gold Fish with the same code making the cards which I did."],
    ["https://www.online-java.com/2pZKj14e35?embed=true","https://www.online-java.com/uwcMaverG8?embed=true","https://www.online-java.com/Pu4eYXTqmF?embed=true","https://www.online-java.com/XuT2yHF3xS?embed=true","https://www.online-java.com/QOlWyVIgsB?embed=true","https://www.online-java.com/plEDzGm7bA?embed=true","https://www.online-java.com/n4dFgLuW7C?embed=true"]
]
document.addEventListener("DOMContentLoaded",()=>{
    //document.getElementById("JSback").className="a"

})

var jSmaxpagi =6;
var jSpaginum = 1;

var jMaxpagi=7;
var jPaginum=1;

function JSpag1(event) {
    if(document.getElementById("JSpag1").className=="active"){
        return
    }
    document.getElementById("JSiframe").src=JS2d[2][0]
    JSopacity(1)
}
function JSpag2(event) {
    if(document.getElementById("JSpag2").className=="active"){
        return
    }
    document.getElementById("JSiframe").src=JS2d[2][1]
    JSopacity(2)
}

function JSpag3(event) {
    if(document.getElementById("JSpag3").className=="active"){
        return
    }
    document.getElementById("JSiframe").src=JS2d[2][2]
    JSopacity(3)
}
function JSpag4(event) {
    if(document.getElementById("JSpag4").className=="active"){
        return
    }
    document.getElementById("JSiframe").src=JS2d[2][3]
    JSopacity(4)
}

function JSpag5(event) {
    if(document.getElementById("JSpag5").className=="active"){
        return
    }
    document.getElementById("JSiframe").src=JS2d[2][4]
    JSopacity(5)
}
function JSpag6(event) {
    if(document.getElementById("JSpag6").className=="active"){
        return
    }
    document.getElementById("JSiframe").src=JS2d[2][5]
    JSopacity(6)

}

function JSback_click(event) {
    if(document.getElementById("JSback").className=="active"){
        return
    }
    if(jSpaginum!=1){
        jSpaginum-=1;
        JSopacity(jSpaginum)
        document.getElementById("JSiframe").src=JS2d[2][jSpaginum-1]
    }
}

function JSnext_click(event) {
    if(document.getElementById("JSnext").className=="active"){
        return
    }
    if(jSpaginum!=jSmaxpagi){
        jSpaginum+=1;
        JSopacity(jSpaginum)
        document.getElementById("JSiframe").src=JS2d[2][jSpaginum-1]
    }
    //document.getElementById("JSnext").className="active"
}


function JSopacity(clicked) {

	JStextSize(clicked)
    document.getElementById("JSpag"+clicked).className="active"
	jSpaginum=clicked;
    

	if(clicked!=1){
		document.getElementById("JSback").className="a"
		for(var i=1;i<clicked;i++){
			document.getElementById("JSpag"+i).className="a"
		}
	}else{
        document.getElementById("JSback").className="active"
    }
	for(var j=clicked+1;j<jSmaxpagi+1;j++){
        document.getElementById("JSpag"+j).className="a"
	}
	if(jSpaginum!=jSmaxpagi){
		document.getElementById("JSnext").className="a"
	}else{
		document.getElementById("JSnext").className="active"
	}
}

function JStextSize(clicked) {
	if(clicked>=4){
        document.getElementById("JSdesktopDesc").innerHTML='<span style="font-size:20px;" class="wixui-rich-text__text">'+JS2d[1][clicked-1]+'</span>'

        document.getElementById("JSipadDesc").innerHTML='<span style="font-size:20px;" class="wixui-rich-text__text">'+JS2d[1][clicked-1]+'</span>'

        document.getElementById("JSphoneDesc").innerHTML='<span style="font-size:20px;" class="wixui-rich-text__text">'+JS2d[1][clicked-1]+'</span>'
	}else{
        document.getElementById("JSdesktopDesc").innerHTML='<span style="font-size:31px;" class="wixui-rich-text__text">'+JS2d[1][clicked-1]+'</span>'

        document.getElementById("JSipadDesc").innerHTML='<span style="font-size:29px;" class="wixui-rich-text__text">'+JS2d[1][clicked-1]+'</span>'

        document.getElementById("JSphoneDesc").innerHTML='<span style="font-size:25px;" class="wixui-rich-text__text">'+JS2d[1][clicked-1]+'</span>'
	}

    document.getElementById("JSTITLE").innerHTML=JS2d[0][clicked-1]
}

//JAVA CODE

function JAVApag1(event) {
    if(document.getElementById("JAVApag1").className=="active"){
        return
    }
    document.getElementById("JAVAiframe").src=JAVA2d[2][0]
    JAVAopacity(1)
}
function JAVApag2(event) {
    if(document.getElementById("JAVApag2").className=="active"){
        return
    }
    document.getElementById("JAVAiframe").src=JAVA2d[2][1]
    JAVAopacity(2)
}

function JAVApag3(event) {
    if(document.getElementById("JAVApag3").className=="active"){
        return
    }
    document.getElementById("JAVAiframe").src=JAVA2d[2][2]
    JAVAopacity(3)
}
function JAVApag4(event) {
    if(document.getElementById("JAVApag4").className=="active"){
        return
    }
    document.getElementById("JAVAiframe").src=JAVA2d[2][3]
    JAVAopacity(4)
}

function JAVApag5(event) {
    if(document.getElementById("JAVApag5").className=="active"){
        return
    }
    document.getElementById("JAVAiframe").src=JAVA2d[2][4]
    JAVAopacity(5)
}
function JAVApag6(event) {
    if(document.getElementById("JAVApag6").className=="active"){
        return
    }
    document.getElementById("JAVAiframe").src=JAVA2d[2][5]
    JAVAopacity(6)
}
function JAVApag7(event) {
    if(document.getElementById("JAVApag7").className=="active"){
        return
    }
    document.getElementById("JAVAiframe").src=JAVA2d[2][6]
    JAVAopacity(7)
}

function JAVAback_click(event) {
    if(document.getElementById("JAVAback").className=="active"){
        return
    }
    if(jPaginum!=1){
        jPaginum-=1;
        document.getElementById("JAVAiframe").src=JAVA2d[2][jPaginum-1]
        JAVAopacity(jPaginum)
    }
}

function JAVAnext_click(event) {
    if(document.getElementById("JAVAnext").className=="active"){
        return
    }
    if(jPaginum!=jMaxpagi){
        jPaginum+=1;
        document.getElementById("JAVAiframe").src=JAVA2d[2][jPaginum-1]
        JAVAopacity(jPaginum)
    }
    //document.getElementById("JAVAnext").className="active"
}


function JAVAopacity(clicked) {
	JAVAtextSize(clicked)
    document.getElementById("JAVApag"+clicked).className="active"
	Jpaginum=clicked;
	if(clicked!=1){
		document.getElementById("JAVAback").className="a"
		for(var i=1;i<clicked;i++){
			document.getElementById("JAVApag"+i).className="a"
		}
	}else{
        document.getElementById("JAVAback").className="active"
    }
	for(var j=clicked+1;j<jMaxpagi+1;j++){
        document.getElementById("JAVApag"+j).className="a"
	}
	if(jPaginum!=jMaxpagi){
		document.getElementById("JAVAnext").className="a"
	}else{
		document.getElementById("JAVAnext").className="active"
	}
}

function JAVAtextSize(clicked) {
	//if(clicked>=4){
        document.getElementById("JAVAdesktopDesc").innerHTML='<span class="wixui-rich-text__text">'+JAVA2d[1][clicked-1]+'</span>'

        document.getElementById("JAVAipadDesc").innerHTML='<span class="wixui-rich-text__text">'+JAVA2d[1][clicked-1]+'</span>'

        document.getElementById("JAVAphoneDesc").innerHTML='<span class="wixui-rich-text__text">'+JAVA2d[1][clicked-1]+'</span>'
	/*}else{
        document.getElementById("JAVAdesktopDesc").innerHTML='<span style="font-size:31px;" class="wixui-rich-text__text">'+JAVA2d[1][clicked-1]+'</span>'

        document.getElementById("JAVAipadDesc").innerHTML='<span style="font-size:29px;" class="wixui-rich-text__text">'+JAVA2d[1][clicked-1]+'</span>'

        document.getElementById("JAVAphoneDesc").innerHTML='<span style="font-size:25px;" class="wixui-rich-text__text">'+JAVA2d[1][clicked-1]+'</span>'
	}*/

    document.getElementById("JAVATITLE").innerHTML=JAVA2d[0][clicked-1]
}