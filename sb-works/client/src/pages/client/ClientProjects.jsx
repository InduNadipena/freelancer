// src/pages/client/ClientProjects.jsx
import Navbar from "../../components/Navbar";

import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Landing Page Design',
    status: 'In Progress',
    applied: 5,
  },
  {
    id: 2,
    title: 'Machine Learning Pipeline',
    status: 'Completed',
    applied: 8,
  },
];

export default function ClientProjects() {
  return <>
          <Navbar />
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      <div className="space-y-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white p-6 rounded shadow flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p>Status: <span className="font-medium">{project.status}</span></p>
              <p>Applications: {project.applied}</p>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              View Applications
            </button>
          </div>
        ))}
      </div>
    </div>
  </>
}
