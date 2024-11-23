import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const AdminLogin = ({ admin, login, setLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!admin) {
      console.error("admin prop is undefined");
      return;
    }

    const user = admin.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      setLogin(true);
      navigate("/dashboard");
    } else {
      setError(true);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Sign In
        </h3>
        {error && (
          <div className="bg-red-100 text-red-600 px-4 py-2 rounded-md mb-4">
            The credentials you entered are incorrect.
            <button
              onClick={() => setError(false)}
              className="float-right text-red-800 font-bold"
            >
              ✕
            </button>
          </div>
        )}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-0"
            />
            <label htmlFor="remember" className="ml-2 text-gray-700">
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

AdminLogin.propTypes = {
  admin: PropTypes.array.isRequired,
};

export default AdminLogin;
