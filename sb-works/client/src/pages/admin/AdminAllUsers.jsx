// src/pages/admin/AdminUsers.jsx
import Navbar from "../../components/Navbar";

import React from 'react';

const users = [
  { id: 1, name: 'Alice', email: 'alice@example.com', role: 'client' },
  { id: 2, name: 'Bob', email: 'bob@example.com', role: 'freelancer' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com', role: 'admin' },
];

export default function AdminUsers() {
  return <>
          <Navbar />
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">All Users</h1>
      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="w-full table-auto border-collapse">
          <thead className="bg-gray-200 text-left">
            <tr>
              <th className="px-4 py-3 border-b">Name</th>
              <th className="px-4 py-3 border-b">Email</th>
              <th className="px-4 py-3 border-b">Role</th>
              <th className="px-4 py-3 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 border-b">{user.name}</td>
                <td className="px-4 py-3 border-b">{user.email}</td>
                <td className="px-4 py-3 border-b capitalize">{user.role}</td>
                <td className="px-4 py-3 border-b space-x-2">
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
