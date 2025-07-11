const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  budget: String,
  skills: String,
  postedAt: { type: Date, default: Date.now }
});
module.exports = mongoose.models.Project || mongoose.model('Project', ProjectSchema);

