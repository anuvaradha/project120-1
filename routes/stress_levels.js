var data = require('../analysis.json');

exports.getStress = function(req, res){
  res.render('stress-levels', data);

};
