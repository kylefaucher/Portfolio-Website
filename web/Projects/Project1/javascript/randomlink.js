
// takes user to random website in array to help out the cause


 var linkarray = [
 					"http://newjimcrow.com/take-action" ,
 					"https://engage.drugpolicy.org/secure/ways-to-give?ms=1B1_17XXRightCorner&utm_campaign=fy18website&utm_medium=web&utm_source=17XXwsc3RightCorner&cid=70141000000TXbQAAW&_ga=2.267644999.859309795.1524518348-446125334.1523390102",
 					"http://www.drugpolicy.org/action/alerts",
 					"http://www.drugpolicy.org/take-action/contact-your-elected-officials",
 					"http://www.drugpolicy.org/events",
 					"https://www.healthpovertyaction.org/speaking-out/rethink-the-war-on-drugs/",
 					"http://www.tdpf.org.uk/donate",
 					"https://www.history.com/topics/the-war-on-drugs",
 					"https://www.thenation.com/article/want-to-help-fight-mass-incarceration-theres-an-app-for-that/"
 				 ];

 var number = Math.floor(Math.random()*9);

 var button = document.getElementById("randlink");

 button.href = linkarray[number];