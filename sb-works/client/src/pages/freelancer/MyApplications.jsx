import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import Navbar from "../../components/Navbar";

export default function MyApplications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    axios
      .get("/freelancer/applications")
      .then((res) => {
        if (res.data.success) setApplications(res.data.applications);
      })
      .catch((err) => console.error("Failed to load applications:", err));
  }, []);

  return (
    <>
      <Navbar />
      <div className="p-8 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-4">My Applications</h1>
        {applications.length === 0 ? (
          <p>No applications yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {applications.map((app) => (
              <div key={app._id} className="bg-white p-4 rounded shadow">
                <h2 className="text-xl font-semibold">{app.projectId?.title}</h2>
                <p>{app.projectId?.description}</p>
                <p className="text-sm mt-2 text-gray-600">
                  Skills: {app.projectId?.skills?.join(", ")}
                </p>
                <p className="mt-2 font-semibold">
                  Status:{" "}
                  <span
                    className={`${
                      app.status === "pending"
                        ? "text-yellow-500"
                        : app.status === "accepted"
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {app.status}
                  </span>
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
