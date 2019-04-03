const mongoose = require('mongoose');

const User = mongoose.model('User', {
  email: {
    type: String
  },
  name: {
    type: String
  },
  password: {
    type: String
  }
});

module.exports = { User };