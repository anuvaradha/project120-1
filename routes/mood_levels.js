var data = require('../analysis.json');

exports.getMood = function(req, res){
  res.render('mood-levels', data);

};