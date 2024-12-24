import React, { useState } from "react";
import Dialog from "../components/Dialog";
import { useAuth } from "../context/AuthContext";

const SignupPage = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [details, setDetails] = useState({ username: "", password: "" });
  const { signup } = useAuth();

  const handleClose = () => setIsOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(details);
    setIsOpen(false);
  };

  return (
    <Dialog isOpen={isOpen} onClose={handleClose}>
      <h2 className="text-2xl font-bold text-secondary mb-4">Sign Up</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            placeholder="Choose a username"
            className="w-full px-4 py-2 border rounded-lg focus:ring-secondary focus:border-secondary"
            value={details.username}
            onChange={(e) =>
              setDetails({ ...details, username: e.target.value })
            }
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            placeholder="Choose a password"
            className="w-full px-4 py-2 border rounded-lg focus:ring-secondary focus:border-secondary"
            value={details.password}
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
          />
        </div>
        <button
          type="submit"
          className="w-full bg-secondary text-white py-2 rounded-lg hover:bg-secondary-dark"
        >
          Sign Up
        </button>
      </form>
    </Dialog>
  );
};

export default SignupPage;
