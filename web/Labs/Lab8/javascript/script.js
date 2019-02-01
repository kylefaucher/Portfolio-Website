var colors = ["red" , "yellow" , "pink" , "blue" , "teal" , "lime" , "orange" , "maroon" , "black", "grey", "cyan", "turquoise", "magenta", "springGreen"];

box1 = document.getElementById("box1");

function changeBox()
{
	var num = Math.floor(Math.random()*14);
	box1.style.backgroundColor = colors[num];
}

function changeBox2()
{
	var num = Math.floor(Math.random()*14);
	box1.style.backgroundColor = colors[num];
}

box1.addEventListener("mouseover", changeBox, false);

box1.addEventListener("mouseout", changeBox2, false);



var fonts = ["Comic Sans MS", "Impact", "Courier New", "Lucida Console", "Arial Black", "Tahoma"];

box2 = document.getElementById("box2");

function change2Box()
{
	var num = Math.floor(Math.random()*6);
	box2.style.fontFamily = fonts[num];
}


box2.addEventListener("keydown", change2Box, false);




