const express = require('express');
const { Project } = require('../Schema');
const router = express.Router();

// View assigned projects
router.get('/my-projects/:freelancerId', async (req, res) => {
  try {
    const projects = await Project.find({ assignedTo: req.params.freelancerId });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: 'Could not fetch working projects' });
  }
});

module.exports = router;
