const mongoose = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId;
const Schema = mongoose.Schema;

const VacancyStatusSchema = new Schema({
  title: String
});

const VacancyStatus = mongoose.model('VacancyStatus', VacancyStatusSchema);

module.exports = { VacancyStatus };