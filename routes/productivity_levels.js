var data = require('../analysis.json');

exports.getProduct = function(req, res){
  res.render('productivity-levels', data);

};
