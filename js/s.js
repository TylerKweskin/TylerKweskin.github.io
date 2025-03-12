var JS2d=[
    ["Wordle","Bingo","TicTacToe","Card Jitsu","Hangman","Blank Slate"],
    ["This recreation of the online game Wordle was my submission to College Board for my AP Computer Science Principles Class.","This recreation of Bingo was created to see what I could do while using an edited version of my version of Wordle.","This recreation of Tic Tac Toe was created as another project I could try and make before the  Wordle Assignment was  due in class.","​This recreation of the mini-game Card Jitsu was created around the time I was playing a lot of Club Penguin Rewritten (a fan server of Club Penguin that got shut down by Disney) and I was just curious if I could without looking at any Youtube Videos on the subject.","​This recreation of Hangman was created as I wanted to make Hangman for the Ap Computer Science Principals test but went with Wordle as they seemed to work similarly and then later I made this after the Creat Task as a wonder of how similar they were.","​This recreation of the mini-game Card Jitsu was created around the time I was playing a lot of Club Penguin Rewritten (a fan server of Club Penguin that got shut down by Disney) and I was just curious if I could without looking at any Youtube Videos on the subject."],
    ["JavaScript work/Create Task_ Wordle/index.html","JavaScript work/Bingo/index.html","JavaScript work/Tic Tac Toe/index.html","JavaScript work/Card jitsu/index.html","JavaScript work/Hangman/index.html","JavaScript work/Blank Slate/index.html"]
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
    document.getElementById("iframe").src=JS2d[2][0]
    JSopacity(1)
}
function JSpag2(event) {
    if(document.getElementById("JSpag2").className=="active"){
        return
    }
    document.getElementById("iframe").src=JS2d[2][1]
    JSopacity(2)
}

function JSpag3(event) {
    if(document.getElementById("JSpag3").className=="active"){
        return
    }
    document.getElementById("iframe").src=JS2d[2][2]
    JSopacity(3)
}
function JSpag4(event) {
    if(document.getElementById("JSpag4").className=="active"){
        return
    }
    document.getElementById("iframe").src=JS2d[2][3]
    JSopacity(4)
}

function JSpag5(event) {
    if(document.getElementById("JSpag5").className=="active"){
        return
    }
    document.getElementById("iframe").src=JS2d[2][4]
    JSopacity(5)
}
function JSpag6(event) {
    if(document.getElementById("JSpag6").className=="active"){
        return
    }
    document.getElementById("iframe").src=JS2d[2][5]
    JSopacity(6)

}

function JSback_click(event) {
    if(document.getElementById("JSback").className=="active"){
        return
    }
    if(jSpaginum!=1){
        jSpaginum-=1;
        JSopacity(jSpaginum)
        document.getElementById("iframe").src=JS2d[2][jSpaginum-1]
    }
}

function JSnext_click(event) {
    if(document.getElementById("JSnext").className=="active"){
        return
    }
    if(jSpaginum!=jSmaxpagi){
        jSpaginum+=1;
        JSopacity(jSpaginum)
        document.getElementById("iframe").src=JS2d[2][jSpaginum-1]
    }
    //document.getElementById("JSnext").className="active"
}


function JSopacity(clicked) {

	JStextSize(clicked)
    document.getElementById("JSpag"+clicked).className="active"
	jSpaginum=clicked;
    

	if(clicked!=1){
		document.getElementById("JSback").className="fuck"
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
        document.getElementById("desktopDesc").innerHTML='<span style="font-size:20px;" class="wixui-rich-text__text">'+JS2d[1][clicked-1]+'</span>'

        document.getElementById("ipadDesc").innerHTML='<span style="font-size:20px;" class="wixui-rich-text__text">'+JS2d[1][clicked-1]+'</span>'

        document.getElementById("phoneDesc").innerHTML='<span style="font-size:20px;" class="wixui-rich-text__text">'+JS2d[1][clicked-1]+'</span>'
	}else{
        document.getElementById("desktopDesc").innerHTML='<span style="font-size:31px;" class="wixui-rich-text__text">'+JS2d[1][clicked-1]+'</span>'

        document.getElementById("ipadDesc").innerHTML='<span style="font-size:29px;" class="wixui-rich-text__text">'+JS2d[1][clicked-1]+'</span>'

        document.getElementById("phoneDesc").innerHTML='<span style="font-size:25px;" class="wixui-rich-text__text">'+JS2d[1][clicked-1]+'</span>'
	}

    document.getElementById("TITLE").innerHTML=JS2d[0][clicked-1]
}