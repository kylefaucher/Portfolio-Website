
var words = document.getElementsByClassName("box");

var favcolor = prompt("What is you favorite color?", "blue");
favcolor = favcolor.toLowerCase();

var favcolor2 = prompt("What is you second favorite color?", "red");
favcolor2 = favcolor2.toLowerCase();

var name = prompt("What is your name","Danny Devito");

for (var i=0;i<words.length;i++)
{
	words[i].textContent = name;

	if (i%2 == 0)
	{
		words[i].style.backgroundColor = favcolor;
	}
	else if (i%2 != 0)
	{
		words[i].style.backgroundColor = favcolor2;
	}
}

var yesOrNo = prompt("Would you like to see what I made for you?", "enter yes or no");
yesOrNo = yesOrNo.toLowerCase();

if (yesOrNo == "no")
{
	var box = document.getElementById("message");
	box.style.display = "flex";
}

