const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const submissionSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  status: { type: String, required: true, default: 'Under Review' },
  filePath: { type: String, required: true },
}, {
  timestamps: true,
});

const Submission = mongoose.model('Submission', submissionSchema);

module.exports = Submission;
