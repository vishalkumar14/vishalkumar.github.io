var myHeading = document.querySelector('h1');
myHeading.textContent = 'Vishal Kumar';

var imgchange = document.querySelector('img');
imgchange.onclick=function(){
	var srcimg = imgchange.getAttribute('src');
	if(srcimg==='images/firefox-icon.png'){
		imgchange.setAttribute('src','images/javascript.png');
	}
	else{
		imgchange.setAttribute('src','images/firefox-icon.png');
	}
}

var myButtom = document.querySelector('button');
var myheading = document.querySelector('h1');

function setUsename(){
	
	var myName = prompt("Please Enter Your Name");
	localStorage.setItem('name',myName);

	myheading.textContent = "Mozilla is Cool, " + myName;
}

if(!(localStorage.getItem('name'))){
	setUsename();
}
else{
	var storeName = localStorage.getItem('name');
	myheading. textContent="Mozilla is Cool, "+storeName;
}

myButtom.onclick = function(){
	setUsename();
}

