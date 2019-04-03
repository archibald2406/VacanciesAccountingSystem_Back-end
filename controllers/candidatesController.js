const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;

const { Candidate } = require('../models/candidate');

// => localhost:3000/candidates
router.get('/', (req, res) => {
  Candidate.find((err, docs) => {
    if (err) {
      return console.log('Error in retrieving info: ' + JSON.stringify(err, undefined, 2));
    }
    res.send(docs);
  });
});

router.post('/', (req, res) => {
  const cand = new Candidate({
    name: req.body.name,
    surname: req.body.surname,
    position: req.body.position,
    phone: req.body.phone,
    mail: req.body.mail,
    photo: req.body.photo,
    notes: req.body.notes
  });

  cand.save( (err, doc) => {
    if (err) {
      return console.log('Error in saving info: ' + JSON.stringify(err, undefined, 2));
    }
    res.send(doc);
  });
});

router.get('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(404).send(`No record with given id: ${req.params.id}`);
  }

  Candidate.findById(req.params.id, (err, doc) => {
    if (err) {
      return console.log('Error in retrieving info: ' + JSON.stringify(err, undefined, 2));
    }
    res.send(doc);
  });
});

router.put('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(404).send(`No record with given id: ${req.params.id}`);
  }

  Candidate.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        name: req.body.name,
        surname: req.body.surname,
        position: req.body.position,
        phone: req.body.phone,
        mail: req.body.mail,
        photo: req.body.photo,
        notes: req.body.notes
      }
    }, (err, doc) => {
      if (err) {
        return console.log('Error in updating info: ' + JSON.stringify(err, undefined, 2));
      }
      res.send(doc);
    });
});

router.delete('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(404).send(`No record with given id: ${req.params.id}`);
  }

  Candidate.findByIdAndRemove(req.params.id, (err, doc) => {
    if (err) {
      return console.log('Error in updating info: ' + JSON.stringify(err, undefined, 2));
    }
    res.send(doc);
  });
});

module.exports = router;