var JS2d=[
    ["Wordle","Bingo","TicTacToe","Card Jitsu","Hangman","Blank Slate"],
    ["​This recreation of the online game Wordle was my submission to College Board for my AP Computer Science Principles Class.","​This recreation of Bingo was created to see what I could do while using an edited version of my version of Wordle.","​This recreation of Tic Tac Toe was created as  another project I could try and make before the  Wordle Assignment was  due in class.","​This recreation of the mini-game Card Jitsu was created around the time I was playing a lot of Club Penguin Rewritten (a fan server of Club Penguin that got shut down by Disney) and I was just curious if I could without looking at any Youtube Videos on the subject.","​This recreation of Hangman was created as I wanted to make Hangman for the Ap Computer Science Principals test but went with Wordle as they seemed to work similarly and then later I made this after the Creat Task as a wonder of how similar they were.","​This recreation of the mini-game Card Jitsu was created around the time I was playing a lot of Club Penguin Rewritten (a fan server of Club Penguin that got shut down by Disney) and I was just curious if I could without looking at any Youtube Videos on the subject."],
    ["JavaScript work/Create Task_ Wordle/index.html","JavaScript work\\Bingo\\index.html"]
]
document.addEventListener("DOMContentLoaded",()=>{
    var jspag2=document.getElementById("JSpag2").className="a"

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
    //alert(1)
}
function JSpag2(event) {
    if(document.getElementById("JSpag2").className=="active"){
        return
    }
    document.getElementById("iframe").src=JS2d[2][1]
    JSopacity(2)
    //alert(2)
}

function JSopacity(clicked) {

	//JStextSize(clicked)
    document.getElementById("JSpag"+clicked).className="active"
	jSpaginum=clicked;
    

	if(clicked!=1){
		//$w('#JSback').enable()
		for(var i=1;i<clicked;i++){
			document.getElementById("JSpag"+i).className="a"
		}
	}/*else{
		//$w('#JSback').disable()
	}*/
	for(var j=clicked+1;j<jSmaxpagi+1;j++){
        document.getElementById("JSpag"+j).className="a"
	}
	/*if(jSpaginum!=jSmaxpagi){
		//$w('#JSnext').enable()
	}else{
		//$w('#JSnext').disable()
	}*/
}