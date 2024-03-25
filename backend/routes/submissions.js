const router = require('express').Router();
let Submission = require('../models/submission.js');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.route('/').get((req, res) => {
  Submission.find()
    .then(submissions => res.json(submissions))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post(upload.single('file'), (req, res) => {
  const title = req.body.title;
  const author = req.body.author;
  const filePath = req.file.path;

  const newSubmission = new Submission({title, author, filePath});

  newSubmission.save()
    .then(() => res.json('Submission added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Submission.findById(req.params.id)
      .then(submission => {
        submission.status = req.body.status;
  
        submission.save()
          .then(() => res.json('Submission updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
  


module.exports = router;
