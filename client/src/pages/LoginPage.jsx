import React, { useState } from "react";
import Dialog from "../components/Dialog";
import { useAuth } from "../context/AuthContext";

const LoginPage = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const { login } = useAuth();

  const handleClose = () => setIsOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(credentials);
    setIsOpen(false);
  };

  return (
    <Dialog isOpen={isOpen} onClose={handleClose}>
      <h2 className="text-2xl font-bold text-primary mb-4">Login</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            placeholder="Enter your username"
            className="w-full px-4 py-2 border rounded-lg focus:ring-primary focus:border-primary"
            value={credentials.username}
            onChange={(e) =>
              setCredentials({ ...credentials, username: e.target.value })
            }
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded-lg focus:ring-primary focus:border-primary"
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
          />
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-dark"
        >
          Login
        </button>
      </form>
    </Dialog>
  );
};

export default LoginPage;
