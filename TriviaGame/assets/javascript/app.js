$(document).ready(function(){

function timeHandler (){

	alert ("count down time");
}

setInterval(timeHandler, 1000);//takes 2 arguments time event handler and  time duration

var answer;
var correctAns= 0;
var wrongAns=0;
var  noAns=0;
var showAnswer;
var timeCountDown; 0;

var answer = document.getElementsByTagName("radio-inline");
	for (var i=0; i< answer.length; i++){
		answer[i].onclick = showAnswer;
	}

	function showAnswer(){
		if (showAnswer = true)  {
	correctAns++
	}
	else{
		wrongAns++
	}
}
});

// I need a function to check everything - when time is at 0 
//I also need a function to decrement timehandler
//I need toi finish updating the screen
//Definitely need to double check onclick function
//Need to use if statement in timehandler
