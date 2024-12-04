const mongoose = require('mongoose');
const schema = mongoose.Schema({
     title: String,
     image: String,
     description: String
});
module.exports = mongoose.model('Notes', schema);