// src/pages/admin/AdminDashboard.jsx
import Navbar from "../../components/Navbar";

import React from 'react';

export default function AdminDashboard() {
  return <>
          <Navbar />
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md p-6">
        <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
        <nav className="flex flex-col gap-4">
          <a href="/admin/dashboard" className="text-blue-600 hover:underline">Dashboard</a>
          <a href="/admin/projects" className="text-gray-700 hover:text-blue-600">Projects</a>
          <a href="/admin/users" className="text-gray-700 hover:text-blue-600">Users</a>
        </nav>
      </aside>
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-lg font-semibold">Total Projects</h3>
            <p className="text-2xl mt-2">42</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-lg font-semibold">Total Users</h3>
            <p className="text-2xl mt-2">128</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-lg font-semibold">Pending Applications</h3>
            <p className="text-2xl mt-2">5</p>
          </div>
        </div>
      </main>
    </div>
  </>
}
