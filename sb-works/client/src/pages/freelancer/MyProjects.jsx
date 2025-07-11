// src/pages/freelancer/MyProjects.jsx
import Navbar from "../../components/Navbar";

import React from 'react';

const projects = [
  {
    id: 1,
    name: 'Landing Page Design',
    status: 'Ongoing',
  },
  {
    id: 2,
    name: 'Fintech Dashboard',
    status: 'Completed',
  },
];

export default function MyProjects() {
  return <>
          <Navbar />
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      <div className="space-y-4">
        {projects.map((proj) => (
          <div key={proj.id} className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-semibold">{proj.name}</h2>
            <p>Status: <span className="font-medium">{proj.status}</span></p>
          </div>
        ))}
      </div>
    </div>
  </>
}
