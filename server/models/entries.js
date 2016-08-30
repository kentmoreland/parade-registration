mongoose = require('mongoose');

var Schema = mongoose.Schema;

var EntrySchema = new Schema({
  name: String,
  email: String,
  organization: String,
  category: String,
  description: String,
  contact: String,
  number: String,
  date: {type: Date, default: Date.now}


});

module.exports = mongoose.model('Entry', EntrySchema);