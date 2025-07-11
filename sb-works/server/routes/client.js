const express = require('express');
const { Project } = require('../Schema');
const router = express.Router();

// Assign freelancer to a project
router.post('/assign', async (req, res) => {
  const { projectId, freelancerId } = req.body;
  try {
    const project = await Project.findByIdAndUpdate(
      projectId,
      { assignedTo: freelancerId },
      { new: true }
    );
    res.json(project);
  } catch (err) {
    res.status(500).json({ error: 'Could not assign freelancer' });
  }
});

module.exports = router;
