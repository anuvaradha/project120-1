/*

var data = require('../data.json');

exports.addTask = function(req, res){
  res.render('task');

};
*/

/*var modelHistory = require('../history');

exports.taskHistoryInfo = function(req, res) {
  var taskHistoryID = req.params.id;

  console.log ("taskHistoryInfo in taskHistory.js");

  // query for the specific project and
  // call the following callback
    modelHistory.taskHistory
    .find({"_id": taskHistoryID})
    .exec(afterQuery);

  function afterQuery(err, taskHistory) {
    console.log ("after query taskHistoryInfo in taskHistory.js");
    if(err) console.log(err);
    res.json(taskHistory[0]);
  }
}
*/

/*
exports.deleteTask = function(req, res) {
  var taskID = req.params.id;

  // find the project and remove it
  // YOU MUST send an OK response w/ res.send();
  models.task
    .find({"_id": taskID})
    .remove()
    .exec(afterRemoving);

    function afterRemoving(err, task) {
      if(err) { console.log(err);}

      res.send('OK');
    }
}


exports.completeTask = function(req, res) {
  var taskID = req.params.id;

  // find the project and remove it
  // YOU MUST send an OK response w/ res.send();
  models.task
    .find({"_id": taskID})
    .remove()
    .exec(afterRemoving);

    function afterRemoving(err, task) {
      if(err) { console.log(err);}

      res.send('OK');
    }
}



exports.addTask = function(req, res) {
  var form_data = req.body;
  console.log(form_data);


	var p1 = form_data['priority'];
	var p2;
  var p3;
	console.log(p1);
	console.log("from add.js");

	switch (p1) {
    case "Do not worry! You have time to finish it!":
        p2 = "panel panel-green";
        p3 = "img/task-1.jpg";
        break;
    case "This task is important. Do you have time to get it done?":
        p2 = "panel panel-yellow";
        p3 = "img/task-2.jpg";
        break;
    case "It is very urgent! you need to finish it now!":
        p2 = "panel panel-red";
        p3 = "img/task-3.jpg";
        break;

	}

  console.log ("p2 " + p2);


  var newTask = new models.task({
   /* "title": form_data["project_title"],
    "date": form_data["date"],
    "summary":form_data["summary"],
    "image": form_data["image_url"],


    "name": form_data['name'],
  	"date": form_data['date'],
  	"panel" : p2,
  	"priority": form_data['priority'],
    "img" : p3,
  	"description": form_data['description']
  });


  console.log ("new task " + newTask);

  newTask.save(afterSaving);

  function afterSaving(err, task) {
    if(err) {console.log(err); }
    res.redirect('/');
    res.send('OK');
    console.log (" in afterSaving done!!!!!");
  }
  // make a new Project and save it to the DB
  // YOU MUST send an OK response w/ res.send();

}   */

