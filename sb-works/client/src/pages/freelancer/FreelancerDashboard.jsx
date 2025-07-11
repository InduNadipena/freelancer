// src/pages/freelancer/FreelancerDashboard.jsx
import Navbar from "../../components/Navbar";

import React from 'react';

export default function FreelancerDashboard() {
  return <>
    <Navbar />
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-8">Freelancer Dashboard</h1>
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-lg font-semibold">Active Projects</h3>
          <p className="text-2xl mt-2">3</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-lg font-semibold">Applications</h3>
          <p className="text-2xl mt-2">7</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-lg font-semibold">Earnings</h3>
          <p className="text-2xl mt-2">$1,200</p>
        </div>
      </div>
    </div>
  </>
}
