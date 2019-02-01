function sendmessage()
{

	var messageresult = document.getElementById("resultmessage");
	messageresult.innerHTML = "Dear Kyle, <br><br>";

	if(document.getElementById("urgentY").checked == true)
	{
		messageresult.innerHTML += "(URGENT)<br><br>";
	}


	var message = document.getElementById("message");
	messageresult.innerHTML+= message.value +"<br><br>";

	var title = document.getElementById("title");
	messageresult.innerHTML+= "Sincerely,<br>" + title.value;


	var name = document.getElementById("name");
	messageresult.innerHTML+= name.value;

	document.getElementById("msgsent").style.display = "block";
}


var sent= document.getElementById("send");
sent.addEventListener("click", sendmessage, false);