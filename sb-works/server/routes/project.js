const express = require('express');
const { Project } = require('../Schema');
const router = express.Router();

// Post a new project (Client)
router.post('/add', async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json(project);
  } catch (err) {
    res.status(500).json({ error: 'Could not add project' });
  }
});

// Get all projects
router.get('/all', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
});

// Get projects by client ID
router.get('/client/:clientId', async (req, res) => {
  try {
    const projects = await Project.find({ clientId: req.params.clientId });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: 'Could not fetch client projects' });
  }
});

module.exports = router;
