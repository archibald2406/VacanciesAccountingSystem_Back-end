const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;

const { VacancyStatus } = require('../models/vacancyStatus');

// => localhost:3000/vacanciesStatuses
router.get('/', (req, res) => {
  VacancyStatus.find((err, docs) => {
    if (err) {
      return console.log('Error in retrieving info: ' + JSON.stringify(err, undefined, 2));
    }
    res.send(docs);
  });
});

router.post('/', (req, res) => {
  const vac = new VacancyStatus({
    title: req.body.title
  });

  vac.save((err, doc) => {
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

  VacancyStatus.findById(req.params.id, (err, doc) => {
    if (err) {
      return console.log('Error in retrieving info: ' + JSON.stringify(err, undefined, 2));
    }
    res.send(doc);
  });
});

module.exports = router;