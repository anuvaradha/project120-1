var analysis = require("../analysis.json");
//var graphData = require("../public/js/plugins/morris/morris-data.js");



exports.analyze = function(req, res) { 
	// Your code goes here
	res.render('analyzed');

	var feelingLevel = parseInt(req.query.feeling);
	var stressedLevel = parseInt(req.query.stressed);
	var productiveLevel = parseInt(req.query.productive);
	var sa,s1,s2;
	var pa,p2, p1;
	var fa, f1, f2;
	var total = feelingLevel + stressedLevel + productiveLevel;

	console.log ("total = " + total);

	if (feelingLevel > 0 && feelingLevel <= 1) {
		analysis["analysis"][0].feelingAlert = "alert-danger";
		//analysis["analysis"][0].img = "img/p120-1.jpg";
		console.log ("if 1");
	} 
	else if (feelingLevel >= 2 && feelingLevel <= 3) {
		analysis["analysis"][0].feelingAlert = "alert-info";
		//analysis["analysis"][0].img = "img/p120-2.jpg";
		console.log ("if 2");
	}
	else if (feelingLevel >=4 && feelingLevel <= 5) {
		analysis["analysis"][0].feelingAlert = "alert-success";
		//analysis["analysis"][0].img = "img/p120-3.jpg";
		console.log ("if 3");
	} 

	if (stressedLevel > 0 && stressedLevel <= 1) {
		analysis["analysis"][0].alertBox = "alert-success";
		//analysis["analysis"][0].img = "img/p120-1.jpg";
		console.log ("if 1");
	} 
	else if (stressedLevel >= 2 && stressedLevel <= 3) {
		analysis["analysis"][0].alertBox = "alert-info";
		//analysis["analysis"][0].img = "img/p120-2.jpg";
		console.log ("if 2");
	}
	 else if (stressedLevel >= 4 && stressedLevel <= 5) {
		analysis["analysis"][0].alertBox = "alert-danger";
		//analysis["analysis"][0].img = "img/p120-3.jpg";
		console.log ("if 3");
	} 

	if (productiveLevel > 0 && productiveLevel <= 1) {
		analysis["analysis"][0].productiveAlert = "alert-danger";
		//analysis["analysis"][0].img = "img/p120-1.jpg";
		console.log ("if 1");
	} 
	else if (productiveLevel >= 2 && productiveLevel <= 3) {
		analysis["analysis"][0].productiveAlert = "alert-info";
		//analysis["analysis"][0].img = "img/p120-2.jpg";
		console.log ("if 2");
	}
	 else if (productiveLevel >= 4 && productiveLevel <= 5) {
		analysis["analysis"][0].productiveAlert = "alert-success";
		//analysis["analysis"][0].img = "img/p120-3.jpg";
		console.log ("if 3");
	} 

	console.log("after total if statement in analyzed.js: ");

	console.log("alertBox " + analysis["analysis"][0].alertBox);
	console.log ("pic " + analysis["analysis"][0].img);



	console.log("stressed level:");
	console.log (req.query.stressed);

	console.log("productive level:");
	console.log (req.query.productive);

	console.log("Feel level:");
	console.log (req.query.feeling);

	analysis["analysis"][0].stressMsg = "Stress Levels: ";
	analysis["analysis"][0].productiveMsg = "Productivity Levels: ";
	analysis["analysis"][0].feelingMsg = "Mood Levels: ";

	if (stressedLevel < 2) {
		analysis["analysis"][0].stressMsg4 = "You are not stressed!";
		analysis["analysis"][0].stressMsg3 = "LOW";
		analysis["analysis"][0].stressMsg2 = "Just keep coasting along!";
		//analysis["analysis"][0].stressedAlert = "alert-success";
	}
	else if (stressedLevel >= 2 && stressedLevel <= 3) {
		analysis["analysis"][0].stressMsg4 = "You are doing okay! ";
		analysis["analysis"][0].stressMsg3 = "MED";
		analysis["analysis"][0].stressMsg2 = "Don't get too stressed out!";
		//analysis["analysis"][0].stressedAlert = "alert-danger";
	}
	else if (stressedLevel >= 4 && stressedLevel <= 5) {
		analysis["analysis"][0].stressMsg4 = "You are stressed! ";
		analysis["analysis"][0].stressMsg3 = "HIGH";
		analysis["analysis"][0].stressMsg2 = "Don't worry, things will be okay";
		//analysis["analysis"][0].stressedAlert = "alert-danger";
	}

	if (productiveLevel < 2) {
		analysis["analysis"][0].productiveMsg4 = "Not very productive!";
		analysis["analysis"][0].productiveMsg3 = "LOW";
		analysis["analysis"][0].productiveMsg2 = "It looks like you have an easy day!";
		//analysis["analysis"][0].productiveAlert = "alert-info";
	}
	else if (productiveLevel >= 2 && productiveLevel <= 3) {
		analysis["analysis"][0].productiveMsg4 = "Keep it going!";
		analysis["analysis"][0].productiveMsg3 = "MED";
		analysis["analysis"][0].productiveMsg2 = "Keep up the good work!!";
		//analysis["analysis"][0].productiveAlert = "alert-success";;
	}
	else if (productiveLevel >= 4 && productiveLevel <= 5) {
		analysis["analysis"][0].productiveMsg4 = "Good work!";
		analysis["analysis"][0].productiveMsg3 = "HIGH";
		analysis["analysis"][0].productiveMsg2 = "You're doing a good job!";
		//analysis["analysis"][0].productiveAlert = "alert-success";;
	}

	if (feelingLevel < 2) {
		analysis["analysis"][0].feelingMsg4 = "Cheer up!";
		analysis["analysis"][0].feelingMsg3 = "LOW";	
		analysis["analysis"][0].feelingMsg2 = "Things will get better soon!";
		//analysis["analysis"][0].feelingAlert = "alert-success";
	}
	else if (feelingLevel >= 2 && feelingLevel <= 3) {
		analysis["analysis"][0].feelingMsg4 = "Think Positive!";
		analysis["analysis"][0].feelingMsg3 = "MED";
		analysis["analysis"][0].feelingMsg2 = "You got this!";
		//analysis["analysis"][0].feelingAlert = "alert-danger";
	}
	else if (feelingLevel >=4 && feelingLevel <= 5) {
		analysis["analysis"][0].feelingMsg4 = "Cheer up now!";
		analysis["analysis"][0].feelingMsg3 = "HIGH";
		analysis["analysis"][0].feelingMsg2 = "Everthing will be okay!";
		//analysis["analysis"][0].feelingAlert = "alert-danger";
	}



	//analysis["analysis"][0].stressMsg = s1;
	/*analysis[0].stressMsg2 = s2;
	analysis[0].stressedAlert = sa;
	analysis[0].productiveMsg = p1;
	analysis[0].productiveMsg2 = p2;
	analysis[0].productiveAlert = pa;
	analysis[0].feelingMsg = f1;
	analysis[0].feelingMsg2 = f2;
	analysis[0].feelingAlert = fa;
*/
 /* 	var newAnalysis = 
	{
		'stressMsg' : s1,
		'stressMsg2' : s2,
		'stressedAlert' : sa,
		'productiveMsg' : p1,
		'productiveMsg2' : p2,
		'productiveAlert' : pa,
		'feelingMsg' : f1,
		'feelingMsg2' : f2,
		'feelingAlert' : fa,

	}
	;
*/

	console.log("New analysis added:");
	console.log (analysis);

//	console.log(newAnalysis);
	//analysis["analysis"].push(newAnalysis);
	//delete analysis.items[0];
	res.render('analyzed', analysis);
	//delete analysis.items[0];
	//console.log(graphData);
/*	var p1 = req.query.priority;
	var p2;
	console.log(p1);
	console.log("from add.js");

	switch (p1) {
    case "Do not worry! You have time to finish it!":
        p2 = "panel panel-green";
        break;
    case "This task is important. Do you have time to get it done?":
        p2 = "panel panel-yellow";
        break;
    case "It is very urgent! you need to finish it now!":
        p2 = "panel panel-red";
        break;

	}

	console.log(p2);

	//res.render('added'); 
  	var newTask = 
	{
		'name': req.query.name,
		'date': req.query.date,
		'panel': p2,
		'priority': req.query.priority,
		'description': req.query.description,
	}
	;


	console.log("New task added:");

	console.log(newTask);
	data["tasks"].push(newTask);
	res.render('added', data);
*/
	  	
}