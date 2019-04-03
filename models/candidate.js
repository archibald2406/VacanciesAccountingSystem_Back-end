const mongoose = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId;
const Schema = mongoose.Schema;

const CandidateSchema = new Schema({
  name: String,
  surname: String,
  position: {
    type: Schema.ObjectId,
    ref: 'Vacancy'
  },
  phone: String,
  mail: String,
  photo: String,
  notes: String
});

const Candidate = mongoose.model('Candidate', CandidateSchema);

module.exports = { Candidate };