const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;

const { User } = require('../models/user');

// => localhost:3000/users
router.get('/', (req, res) => {
  User.find((err, docs) => {
    if (err) {
      return console.log('Error in retrieving info: ' + JSON.stringify(err, undefined, 2));
    }
    res.send(docs);
  });
});

router.get('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(404).send(`No record with given id: ${req.params.id}`);
  }

  User.findById(req.params.id, (err, doc) => {
    if (err) {
      return console.log('Error in retrieving info: ' + JSON.stringify(err, undefined, 2));
    }
    res.send(doc);
  });
});

router.post('/', (req, res) => {
  const emp = new User({
    email: req.body.email,
    name: req.body.name,
    password: req.body.password
  });

  emp.save((err, doc) => {
    if (err) {
      return console.log('Error in saving info: ' + JSON.stringify(err, undefined, 2));
    }
    res.send(doc);
  });
});

module.exports = router;