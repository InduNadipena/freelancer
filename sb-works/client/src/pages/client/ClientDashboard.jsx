// src/pages/client/ClientDashboard.jsx
import Navbar from "../../components/Navbar";

import React from 'react';

export default function ClientDashboard() {
  return <>
          <Navbar />
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-8">Client Dashboard</h1>
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-lg font-semibold">Posted Projects</h3>
          <p className="text-2xl mt-2">6</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-lg font-semibold">Ongoing Projects</h3>
          <p className="text-2xl mt-2">2</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-lg font-semibold">Applications Received</h3>
          <p className="text-2xl mt-2">12</p>
        </div>
      </div>
    </div>
  </>
}
