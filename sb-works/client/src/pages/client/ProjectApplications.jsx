// src/pages/client/ProjectApplications.jsx
import Navbar from "../../components/Navbar";

import React from 'react';

const applications = [
  {
    id: 1,
    project: 'React Website',
    freelancer: 'John Doe',
    skills: ['React', 'Tailwind'],
    status: 'Pending',
  },
  {
    id: 2,
    project: 'AI App',
    freelancer: 'Jane Smith',
    skills: ['Python', 'TensorFlow'],
    status: 'Accepted',
  },
];

export default function ProjectApplications() {
  return <>
          <Navbar />
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Project Applications</h1>
      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead className="bg-gray-200 text-left">
            <tr>
              <th className="px-4 py-3 border-b">Project</th>
              <th className="px-4 py-3 border-b">Freelancer</th>
              <th className="px-4 py-3 border-b">Skills</th>
              <th className="px-4 py-3 border-b">Status</th>
              <th className="px-4 py-3 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 border-b">{app.project}</td>
                <td className="px-4 py-3 border-b">{app.freelancer}</td>
                <td className="px-4 py-3 border-b">{app.skills.join(', ')}</td>
                <td className="px-4 py-3 border-b">{app.status}</td>
                <td className="px-4 py-3 border-b space-x-2">
                  <button className="text-green-600 hover:underline">Accept</button>
                  <button className="text-red-600 hover:underline">Reject</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </>
}
