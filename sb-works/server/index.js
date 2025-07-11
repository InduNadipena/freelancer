const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const { Project, Application } = require("./Schema");

const app = express();
app.use(cors());
app.use(express.json());

const SECRET = "smartbridge";

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/sbworks");

// ✅ Middleware to verify JWT token
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: "No token" });

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded;
    next();
  } catch {
    return res.status(401).json({ message: "Invalid token" });
  }
};

// ✅ Login route
app.post("/api/login", (req, res) => {
  const { email, password, role } = req.body;
  if (email && password && role) {
    const token = jwt.sign({ email, role, id: email }, SECRET, { expiresIn: "1h" });
    return res.json({ success: true, user: { email, role }, token });
  } else {
    return res.json({ success: false });
  }
});

// ✅ Register (Mock Only)
app.post("/api/register", (req, res) => {
  return res.json({ success: true });
});

// ✅ Project Listing (Public)
app.get("/api/projects", (req, res) => {
  return res.json({
    projects: [
      {
        _id: "1",
        title: "Build React App",
        description: "React + Tailwind SPA",
        skills: ["React", "Tailwind"],
      },
      {
        _id: "2",
        title: "Node API",
        description: "Build REST API for admin panel",
        skills: ["Node.js", "MongoDB"],
      },
    ],
  });
});

// ✅ Apply to Project (Freelancer)
app.post("/api/freelancer/apply", verifyToken, async (req, res) => {
  const { projectId } = req.body;

  try {
    const existing = await Application.findOne({
      freelancerId: req.user.id,
      projectId,
    });

    if (existing) {
      return res.json({ success: false, message: "Already applied" });
    }

    const newApp = new Application({
      freelancerId: req.user.id,
      projectId,
    });

    await newApp.save();
    return res.json({ success: true, message: "Application submitted" });
  } catch (err) {
    return res.status(500).json({ success: false, message: "Server error" });
  }
});

// ✅ Get My Applications (Freelancer)
app.get("/api/freelancer/applications", verifyToken, async (req, res) => {
  try {
    const applications = await Application.find({ freelancerId: req.user.id }).populate("projectId");
    res.json({ success: true, applications });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// ✅ Start server
app.listen(5000, () => console.log("Server running on http://localhost:5000"));
