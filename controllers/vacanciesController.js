const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;

const { Vacancy } = require('../models/vacancy');

// => localhost:3000/vacancies
router.get('/', (req, res) => {
  Vacancy.find((err, docs) => {
    if (err) {
      return console.log('Error in retrieving info: ' + JSON.stringify(err, undefined, 2));
    }
    res.send(docs);
  });
});

router.post('/', (req, res) => {
  const vac = new Vacancy({
    name: req.body.name,
    status: req.body.status,
    description: req.body.description,
    requirements: req.body.requirements,
    candidates: req.body.candidates
  });

  vac.save( (err, doc) => {
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

  Vacancy.findById(req.params.id, (err, doc) => {
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

  Vacancy.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        name: req.body.name,
        status: req.body.status,
        description: req.body.description,
        requirements: req.body.requirements,
        candidates: req.body.candidates
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

  Vacancy.findByIdAndRemove(req.params.id, (err, doc) => {
    if (err) {
      return console.log('Error in updating info: ' + JSON.stringify(err, undefined, 2));
    }
    res.send(doc);
  });
});

module.exports = router;