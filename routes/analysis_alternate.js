var analysis = require('../analysis.json');

exports.View = function(req, res){
  res.render('analysis-alternate', analysis);

};