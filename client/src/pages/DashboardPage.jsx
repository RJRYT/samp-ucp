import React from "react";
import { useAuth } from "../context/AuthContext";

const DashboardPage = () => {
  const { user, logout } = useAuth();

  return (
    <div className="p-6 bg-background min-h-screen">
      <div className="bg-card shadow-lg rounded-lg p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-primary">Dashboard</h1>
        <p className="mt-4 text-gray-700">Welcome, {user?.username}!</p>
        <button
          onClick={logout}
          className="mt-6 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default DashboardPage;
