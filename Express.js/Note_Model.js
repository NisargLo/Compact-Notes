const mongoose = require('mongoose');
const schema = mongoose.Schema({
     ID: {
          type: Number,
          required: true
     },
     Name: String,
     Subject: String,
     Experience: Number
});
module.exports = mongoose.model('Faculties', schema);