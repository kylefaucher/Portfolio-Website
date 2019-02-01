
clicked = false;

function changeImage(id, file1 , file2, side)
{
	var menu = document.getElementById(id);
	var sidemenu = document.getElementsByClassName(side);

	if (clicked == false)
	{
		menu.src = file1;
		clicked = true;
		sidemenu[0].style.display = "block";
	}
	else
	{
		menu.src = file2;
		clicked = false;
		sidemenu[0].style.display = "none";
	}
}

var menu = document.getElementById("menubutton");

menu.addEventListener("click", function() {changeImage("menubutton", "images/x.png", "images/menu.png", "sidebar");}, false);