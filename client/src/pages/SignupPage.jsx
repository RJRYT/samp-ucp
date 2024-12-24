import React, { useState } from "react";
import Dialog from "../components/Dialog";

const SignupPage = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => setIsOpen(false);

  return (
    <Dialog isOpen={isOpen} onClose={handleClose}>
      <h2 className="text-2xl font-bold text-secondary mb-4">Sign Up</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            placeholder="Choose a username"
            className="w-full px-4 py-2 border rounded-lg focus:ring-secondary focus:border-secondary"
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
          />
        </div>
        <button
          type="submit"
          className="w-full bg-secondary text-white py-2 rounded-lg hover:bg-secondary-dark"
        >
          Sign Up
        </button>
      </form>
      <p className="mt-4 text-sm text-center">
        Already have an account?{" "}
        <button
          className="text-primary font-medium hover:underline"
          onClick={handleClose}
        >
          Login
        </button>
      </p>
    </Dialog>
  );
};

export default SignupPage;
