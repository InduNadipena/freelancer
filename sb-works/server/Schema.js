const mongoose = require("mongoose");

// Project schema (if not already defined)
const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  skills: [String],
  clientId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Project = mongoose.model("Project", projectSchema);

// Application schema
const applicationSchema = new mongoose.Schema({
  freelancerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
  },
  status: {
    type: String,
    default: "pending",
  },
});

const Application = mongoose.model("Application", applicationSchema);

module.exports = {
  Project,
  Application,
};
