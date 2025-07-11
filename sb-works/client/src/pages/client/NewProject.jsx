import React, { useState } from "react";
import axios from "../../api/axios";

export default function NewProject() {
  const [project, setProject] = useState({ title: "", description: "", skills: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/client/projects", {
        ...project,
        skills: project.skills.split(",").map((s) => s.trim()),
      });
      setMessage("Project created successfully!");
      setProject({ title: "", description: "", skills: "" });
    } catch {
      setMessage("Error creating project.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Post a New Project</h1>
      {message && <p className="text-green-600 mb-2">{message}</p>}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow space-y-4 max-w-lg">
        <input name="title" value={project.title} onChange={handleChange} placeholder="Project Title" className="w-full border p-2 rounded" required />
        <textarea name="description" value={project.description} onChange={handleChange} placeholder="Project Description" className="w-full border p-2 rounded" required />
        <input name="skills" value={project.skills} onChange={handleChange} placeholder="Required Skills (comma-separated)" className="w-full border p-2 rounded" required />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Create Project</button>
      </form>
    </div>
  );
}
