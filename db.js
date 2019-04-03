const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/VacanciesAcc',
  {
    useNewUrlParser: true,
    useFindAndModify: false
  },
    err => {
  if (err) {
    return JSON.stringify(err, undefined, 2);
  }
  console.log('MongoDB connection succeeded.');
});

module.exports = { mongoose };