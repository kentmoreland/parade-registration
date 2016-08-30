mongoose = require('mongoose');

var Schema = mongoose.Schema;

var EntrySchema = new Schema({
  name: String,
  email: String,
  category: String,
});

module.exports = mongoose.model('Entry', EntrySchema);