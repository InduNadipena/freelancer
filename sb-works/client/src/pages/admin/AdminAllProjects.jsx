// src/pages/admin/AdminAllProjects.jsx
import Navbar from "../../components/Navbar";

import React from 'react';

const projects = [
  { id: 1, name: 'React Web App', client: 'Client A', category: 'Web', status: 'Active' },
  { id: 2, name: 'Mobile Design', client: 'Client B', category: 'Design', status: 'Pending' },
  { id: 3, name: 'AI Model', client: 'Client C', category: 'ML', status: 'Completed' },
];

export default function AdminAllProjects() {
  return <>
          <Navbar />
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">All Projects</h1>
      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="w-full table-auto border-collapse">
          <thead className="bg-gray-200 text-left">
            <tr>
              <th className="px-4 py-3 border-b">Project Name</th>
              <th className="px-4 py-3 border-b">Client</th>
              <th className="px-4 py-3 border-b">Category</th>
              <th className="px-4 py-3 border-b">Status</th>
              <th className="px-4 py-3 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 border-b">{project.name}</td>
                <td className="px-4 py-3 border-b">{project.client}</td>
                <td className="px-4 py-3 border-b">{project.category}</td>
                <td className="px-4 py-3 border-b">{project.status}</td>
                <td className="px-4 py-3 border-b space-x-2">
                  <button className="text-blue-600 hover:underline">View</button>
                  <button className="text-green-600 hover:underline">Edit</button>
                  <button className="text-red-600 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </>
}
