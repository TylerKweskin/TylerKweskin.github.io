var JS2d=[
	["Wordle","Bingo","TicTacToe","Card Jitsu","Hangman","Blank Slate"],
	["​This recreation of the online game Wordle was my submission to College Board for my AP Computer Science Principles Class.","​This recreation of Bingo was created to see what I could do while using an edited version of my version of Wordle.","​This recreation of Tic Tac Toe was created as  another project I could try and make before the  Wordle Assignment was  due in class.","​This recreation of the mini-game Card Jitsu was created around the time I was playing a lot of Club Penguin Rewritten (a fan server of Club Penguin that got shut down by Disney) and I was just curious if I could without looking at any Youtube Videos on the subject.","​This recreation of Hangman was created as I wanted to make Hangman for the Ap Computer Science Principals test but went with Wordle as they seemed to work similarly and then later I made this after the Creat Task as a wonder of how similar they were.","​This recreation of the mini-game Card Jitsu was created around the time I was playing a lot of Club Penguin Rewritten (a fan server of Club Penguin that got shut down by Disney) and I was just curious if I could without looking at any Youtube Videos on the subject."],
	
]
document.addEventListener("DOMContentLoaded",()=>{
	
})
function JSpag1(event) {
	alert(1);
	$w('#dataset1').loadPage(1);
	JSopacity(1)
}


$w.onReady(function () {
    //sets the dataset's page size
	
	JSopacity(1);
	Jopacity(1)
    $w('#dataset1').setPageSize(1) //change this value to display more items
	$w('#dataset3').setPageSize(1)
});
var jSmaxpagi =6;
var jSpaginum = 1;

var jMaxpagi=7;
var jPaginum=1;

export function JSback_click(event) {
	if(jSpaginum!=1){
		$w('#dataset1').loadPage(jSpaginum-1)
		jSpaginum--;
		JSopacity(jSpaginum)
	}
}

export function Jback_click(event) {
	if(jPaginum!=1){
		$w('#dataset3').loadPage(jPaginum-1)
		jPaginum--;
		Jopacity(jPaginum)
	}
}


export function JSnext_click(event) {
	if(jSpaginum!=jSmaxpagi){
		$w('#dataset1').loadPage(jSpaginum+1)
		jSpaginum++;
		JSopacity(jSpaginum)
	}
}


export function Jnext_click(event) {
	if(jPaginum!=jMaxpagi){
		$w('#dataset3').loadPage(jPaginum+1)
		jPaginum++;
		Jopacity(jPaginum)
	}
}


function JSopacity(clicked) {

	JStextSize(clicked)
	$w('#JSpag'+clicked).disable()
	jSpaginum=clicked;

	

	if(clicked!=1){
		$w('#JSback').enable()
		for(var i=1;i<clicked;i++){
			$w('#JSpag'+i).enable()
		}
	}else{
		$w('#JSback').disable()
	}
	for(var j=clicked+1;j<jSmaxpagi+1;j++){
			$w('#JSpag'+j).enable()
	}
	if(jSpaginum!=jSmaxpagi){
		$w('#JSnext').enable()
	}else{
		$w('#JSnext').disable()
	}
}



function JStextSize(clicked) {
	if(clicked>=4){
		$w('#detail1').html='<p><span style="font-size:'+20+'px">Your text</span></p>'

		$w('#detail2').html='<p><span style="font-size:'+20+'px">Your text</span></p>'

		$w('#detail3').html='<p><span style="font-size:'+20+'px">Your text</span></p>'
	}else{
		$w('#detail1').html='<p><span style="font-size:'+31+'px">Your text</span></p>'

		$w('#detail2').html='<p><span style="font-size:'+29+'px">Your text</span></p>'

		$w('#detail3').html='<p><span style="font-size:'+25+'px">Your text</span></p>'

	}
}

/*export function JSpag1(event) {
	$w('#dataset1').loadPage(1);
	JSopacity(1)
}*/

export function JSpag2(event) {
	alert(1)
	$w('#dataset1').loadPage(2);
	JSopacity(2)
}

export function JSpag3(event) {
	$w('#dataset1').loadPage(3);
	JSopacity(3)
}

export function JSpag4(event) {
	$w('#dataset1').loadPage(4);
	JSopacity(4)
}

export function JSpag5(event) {
	$w('#dataset1').loadPage(5);
	JSopacity(5)
}

export function JSpag6(event) {
	$w('#dataset1').loadPage(6);
	JSopacity(6)
}

function Jopacity(clicked) {

	//JtextSize(clicked)
	$w('#Jpag'+clicked).disable()
	jPaginum=clicked;

	

	if(clicked!=1){
		$w('#Jback').enable()
		for(var i=1;i<clicked;i++){
			$w('#Jpag'+i).enable()
		}
	}else{
		$w('#Jback').disable()
	}
	for(var j=clicked+1;j<jMaxpagi+1;j++){
			$w('#Jpag'+j).enable()
	}
	if(jPaginum!=jMaxpagi){
		$w('#Jnext').enable()
	}else{
		$w('#Jnext').disable()
	}
}

export function Jpag1(event) {
	$w('#dataset3').loadPage(1);
	Jopacity(1)
}

export function Jpag2(event) {
	$w('#dataset3').loadPage(2);
	Jopacity(2)
}

export function Jpag3(event) {
	$w('#dataset3').loadPage(3);
	Jopacity(3)
}

export function Jpag4(event) {
	$w('#dataset3').loadPage(4);
	Jopacity(4)
}

export function Jpag5(event) {
	$w('#dataset3').loadPage(5);
	Jopacity(5)
}

export function Jpag6(event) {
	$w('#dataset3').loadPage(6);
	Jopacity(6)
}

export function Jpag7(event) {
	$w('#dataset3').loadPage(7);
	Jopacity(7) 
}
