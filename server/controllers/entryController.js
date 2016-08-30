var Entry = require('../models/entries.js');

module.exports.create = function(req, res){
  var entry = new Entry(req.body);
  entry.save(function(err, result){
    res.json(result);
  });
}

module.exports.list = function(req, res){
  Entry.find({}, function(err, results){
    res.json(results);
  })
}




