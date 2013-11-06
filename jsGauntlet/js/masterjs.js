// JavaScript Document


var string = "This is my string";
function alertString(){ 
	alert(string);
};


var integer = "The Integer is" + 2500;
function alertInteger(){ 
	alert(integer);
};


var array  = ["chicken nuggets", "rack of lamb ", "ice-cream sandwich"];
function alertArray(){ 
	alert(array[2]);
};


function textChange(){
	document.getElementById("textChange").innerHTML=string;
};

function addInteger(){
	integer ++;
	alert(integer);
		
};

function indexPosition(){
	array.push(document.getElementById("info").value);
	alert(array);
};


function alertInput(){
	alert(document.getElementById("info").value);
};

function hideDiv(){
	document.getElementById("hideMe").style.display = "none";
	
};


function alertYear(){
	var thisYear = document.getElementById("cYear").value == (new Date).getFullYear();
	if (thisYear){
		alert("Correct");
	} else {
		alert("Not Current Year");
	};
};

function alertAge(){
	var thisAge = document.getElementById("age").value == 18;
	if (thisAge){
		alert("You're in");
	} else {
		alert("Too young");
	};
};


function numberSum(){
	var sum = document.getElementById("num1").value  + document.getElementById("num2").value ;
	if (sum>100){
		alert("greater than 100");
	} else {
		alert("less than 100");
	};
};


//JQuery


function slideRight(){
	$('#scenarioA').animate({marginLeft:"500px"}, "slow");
};


function fadeDivOut(){
	$('#scenarioX').fadeOut("slow");	

};


function fadeDivIn(){
	$('#scenarioX').fadeIn("slow");	

};


function turnRed(){
	$('#reddie').addClass('attention');
	
};


function slideOut(){
	$('#scenarioX').animate({marginLeft:"675px"}, "slow");
};


function slideBack(){
	$('#scenarioX').animate({marginLeft:"0px"}, "slow");
};


function hideOpt(){
	$('.subOption1').hide("slow");
};

function hideOpt2(){
	$('.subOption1').hide("slow");
	$('.subOption1').show("slow");
};


function turnRed(){
	$('#reddie').addClass('attention');
	
};

function slideOut(){
	$('#scenarioX').animate({marginLeft:"675px"}, "slow");
};


function slideBack(){
	$('#scenarioX').animate({marginLeft:"0px"}, "slow");
};

function textSwap(){
	var t1 = $('#target').html();
	var t2 = $('#target2').html();
	$('#target').html(t2); 
	$('#target2').html(t1);
};



