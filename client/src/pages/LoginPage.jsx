import React, { useState } from "react";
import Dialog from "../components/Dialog";

const LoginPage = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => setIsOpen(false);

  return (
    <Dialog isOpen={isOpen} onClose={handleClose}>
      <h2 className="text-2xl font-bold text-primary mb-4">Login</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            placeholder="Enter your username"
            className="w-full px-4 py-2 border rounded-lg focus:ring-primary focus:border-primary"
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
          />
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-dark"
        >
          Login
        </button>
      </form>
      <p className="mt-4 text-sm text-center">
        Don't have an account?{" "}
        <button
          className="text-secondary font-medium hover:underline"
          onClick={handleClose}
        >
          Sign Up
        </button>
      </p>
    </Dialog>
  );
};

export default LoginPage;
