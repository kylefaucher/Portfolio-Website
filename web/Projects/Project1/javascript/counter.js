
/* Used code for a second counter as a basis for this code :  https: stackoverflow.com/questions/37187504/javascript-second-counter */

var people = 0;
var c1 = document.getElementById('count');
var c2 = document.getElementById('counter2');
var num = 0;

function incrementSeconds() {
	if (num%25==0)
	{
		people+=1;
		c1.innerHTML = people;
		c2.innerHTML = people;
		num+=1;
	}
	else
	{
	    num+=1;
	}
}

var cancel = setInterval(incrementSeconds, 1000);
