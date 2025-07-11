// src/pages/freelancer/ProjectDetails.jsx
import Navbar from "../../components/Navbar";

import React from 'react';
import { useParams } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'Build a React Website',
    budget: '$500',
    skills: ['React', 'Tailwind CSS'],
    duration: '2 weeks',
    description: 'Need a responsive React website with Tailwind CSS styling.',
    client: 'Client A',
  },
  {
    id: 2,
    title: 'Mobile App Design',
    budget: '$800',
    skills: ['Figma', 'UI/UX'],
    duration: '1 month',
    description: 'Design a modern mobile app UI/UX for a fintech startup.',
    client: 'Client B',
  },
];

export default function ProjectDetails() {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === Number(projectId));

  if (!project) {
    return <div className="p-8">Project not found.</div>;
  }

  return <>
        <Navbar />
    <div className="min-h-screen bg-gray-50 p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="mb-4 text-gray-700">{project.description}</p>
      <p className="mb-2">
        <span className="font-semibold">Budget:</span> {project.budget}
      </p>
      <p className="mb-2">
        <span className="font-semibold">Duration:</span> {project.duration}
      </p>
      <p className="mb-2">
        <span className="font-semibold">Client:</span> {project.client}
      </p>
      <p className="mb-4">
        <span className="font-semibold">Skills Required:</span> {project.skills.join(', ')}
      </p>
      <button
        className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={() => alert('Applied to project!')}
      >
        Apply Now
      </button>
    </div>
  </>
}
