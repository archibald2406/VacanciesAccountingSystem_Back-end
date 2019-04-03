const mongoose = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId;
const Schema = mongoose.Schema;

const VacancyRequirementSchema = new Schema({
  reqName: String,
  isRequire: Boolean,
  isPublic: Boolean
});

const VacancySchema = new Schema({
  name: String,
  status: String,
  description: String,
  requirements: [VacancyRequirementSchema],
  candidates: [
    {
      type: Schema.ObjectId,
      ref: 'Candidate'
    }
  ]
});

const Vacancy = mongoose.model('Vacancy', VacancySchema);

module.exports = { Vacancy };