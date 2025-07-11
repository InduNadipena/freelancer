import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow">
      <h1 className="text-xl font-bold">
        <Link to="/">SB Works</Link>
      </h1>

      {user ? (
        <ul className="flex space-x-4 items-center">
          {user.role === "freelancer" && (
            <>
              <li>
                <Link to="/freelancer/dashboard" className="hover:underline">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/freelancer/my-applications" className="hover:underline">
                  My Applications
                </Link>
              </li>
            </>
          )}

          {user.role === "client" && (
            <>
              <li>
                <Link to="/client/dashboard" className="hover:underline">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/client/new-project" className="hover:underline">
                  New Project
                </Link>
              </li>
              <li>
                <Link to="/client/applications" className="hover:underline">
                  Applications
                </Link>
              </li>
            </>
          )}

          {user.role === "admin" && (
            <>
              <li>
                <Link to="/admin/dashboard" className="hover:underline">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/admin/projects" className="hover:underline">
                  All Projects
                </Link>
              </li>
              <li>
                <Link to="/admin/users" className="hover:underline">
                  All Users
                </Link>
              </li>
            </>
          )}

          <li>
            <button
              onClick={handleLogout}
              className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-200"
            >
              Logout
            </button>
          </li>
        </ul>
      ) : (
        <div className="space-x-4">
          <Link to="/login" className="hover:underline">
            Login
          </Link>
          <Link to="/register" className="hover:underline">
            Register
          </Link>
        </div>
      )}
    </nav>
  );
}
