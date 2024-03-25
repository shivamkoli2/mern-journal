const router = require('express').Router();
let User = require('../models/user.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.route('/register').post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  bcrypt.hash(password, 10, function(err, hash) {
    const newUser = new User({username, password: hash});

    newUser.save()
      .then(() => res.json('User added!'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
});

router.route('/login').post((req, res) => {
  User.findOne({ username: req.body.username }, function(err, user) {
    if (user === null) {
      return res.status(400).send({
        message: 'User not found.'
      });
    }
    bcrypt.compare(req.body.password, user.password, function(err, result) {
      if (result === true) {
        const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET);
        res.json({ token: token });
      } else {
        res.status(401).json({ message: 'Authentication failed' });
      }
    });
  });
});

module.exports = router;
