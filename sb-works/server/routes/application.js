const express = require('express');
const { Application } = require('../Schema');
const router = express.Router();

// Submit application
router.post('/apply', async (req, res) => {
  try {
    const application = await Application.create(req.body);
    res.status(201).json(application);
  } catch (err) {
    res.status(500).json({ error: 'Failed to apply' });
  }
});

// View applications for a project
router.get('/project/:projectId', async (req, res) => {
  try {
    const apps = await Application.find({ projectId: req.params.projectId });
    res.json(apps);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get applications' });
  }
});

// Get applications by freelancer
router.get('/freelancer/:freelancerId', async (req, res) => {
  try {
    const apps = await Application.find({ freelancerId: req.params.freelancerId });
    res.json(apps);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get freelancer applications' });
  }
});

module.exports = router;
