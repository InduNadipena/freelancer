import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Authenticate from "./pages/Authenticate";
import Register from "./pages/Register";

// Freelancer Pages
import FreelancerDashboard from "./pages/freelancer/FreelancerDashboard";
import FreelancerProjects from "./pages/freelancer/FreelancerProjects";
import MyApplications from "./pages/freelancer/MyApplications";

// Client Pages
import ClientDashboard from "./pages/client/ClientDashboard";
import NewProject from "./pages/client/NewProject";
// import ClientApplications from "./pages/client/ClientApplications"; // If implemented later

// Admin Pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminAllProjects from "./pages/admin/AdminAllProjects";
import AdminAllUsers from "./pages/admin/AdminAllUsers";

import { useAuth } from "./context/AuthContext";

function PrivateRoute({ children, role }) {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" replace />;
  if (role && user.role !== role) return <Navigate to={`/${user.role}/dashboard`} replace />;

  return children;
}

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Authenticate />} />
        <Route path="/register" element={<Register />} />

        {/* Freelancer Routes */}
        <Route
          path="/freelancer/dashboard"
          element={
            <PrivateRoute role="freelancer">
              <FreelancerDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/freelancer/projects"
          element={
            <PrivateRoute role="freelancer">
              <FreelancerProjects />
            </PrivateRoute>
          }
        />
        <Route
          path="/freelancer/my-applications"
          element={
            <PrivateRoute role="freelancer">
              <MyApplications />
            </PrivateRoute>
          }
        />

        {/* Client Routes */}
        <Route
          path="/client/dashboard"
          element={
            <PrivateRoute role="client">
              <ClientDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/client/new-project"
          element={
            <PrivateRoute role="client">
              <NewProject />
            </PrivateRoute>
          }
        />
        {/* Add Client applications page route here if implemented */}

        {/* Admin Routes */}
        <Route
          path="/admin/dashboard"
          element={
            <PrivateRoute role="admin">
              <AdminDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/projects"
          element={
            <PrivateRoute role="admin">
              <AdminAllProjects />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/users"
          element={
            <PrivateRoute role="admin">
              <AdminAllUsers />
            </PrivateRoute>
          }
        />

        {/* Default redirect */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}
