const router = require("express").Router(); //import express
let User = require("../models/user.model"); //import the schema created from models

router.route("/").get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  const newUser = new User({ username, email, password });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:email").get((req, res) => {
  User.find(req.params)
    .then(user => res.json(user))
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
