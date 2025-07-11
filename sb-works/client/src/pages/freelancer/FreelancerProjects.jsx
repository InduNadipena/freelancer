import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import Navbar from "../../components/Navbar";

export default function FreelancerProjects() {
  const [projects, setProjects] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("/projects")
      .then((res) => setProjects(res.data.projects))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  const applyToProject = async (projectId) => {
    try {
      const res = await axios.post("/freelancer/apply", { projectId });
      setMessage(res.data.message);
    } catch (err) {
      setMessage("Failed to apply. Try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-3xl font-bold mb-6">Available Projects</h1>

        {message && (
          <div className="mb-4 text-green-600 font-semibold">{message}</div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project._id}
              className="bg-white p-6 rounded shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="mt-2 text-gray-700">{project.description}</p>
              <p className="mt-2 text-sm text-gray-500">
                Skills: {project.skills.join(", ")}
              </p>
              <button
                onClick={() => applyToProject(project._id)}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Apply
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
