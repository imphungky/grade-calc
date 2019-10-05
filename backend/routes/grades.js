const router = require('express').Router(); //import express
let Grade = require('../models/grade.model'); //import the schema created from models

router.route('/').get((req, res) => {
  Grade.find()
    .then(grades => res.json(grades))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const grade = req.body.grade;
  const newGrade = new Grade({grade});

  newGrade.save()
    .then(() => res.json('Grade added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;