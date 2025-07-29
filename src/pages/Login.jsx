import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { FiUser, FiLock } from "react-icons/fi";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import palmBg from "../assets/palm-bg.jpg";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) return;

    const signupUser = JSON.parse(localStorage.getItem("wanderwave_signup_user"));
    if (!signupUser || signupUser.username !== username) {
      alert("User not found. Please sign up first.");
      return;
    }

    if (password !== signupUser.password) {
      alert("Incorrect password.");
      return;
    }

    login(signupUser);
    navigate("/profile");
  };

  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center px-4"
      style={{ backgroundImage: `url(${palmBg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Form container */}
      <div className="relative bg-white bg-opacity-90 p-8 rounded-xl shadow-2xl w-full max-w-md z-10">
        <h2 className="text-3xl font-bold text-center mb-6 text-green-700">
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center border rounded-lg px-3 py-2 shadow-sm">
            <FiUser className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Username"
              className="w-full outline-none bg-transparent"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center border rounded-lg px-3 py-2 shadow-sm">
            <FiLock className="text-gray-400 mr-2" />
            <input
              type="password"
              placeholder="Password"
              className="w-full outline-none bg-transparent"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-4 text-sm text-gray-600">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-green-700 hover:underline cursor-pointer"
          >
            Sign up here
          </span>
        </p>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-3 text-gray-400 text-sm">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <div className="flex flex-col space-y-3">
          <button className="flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            <FaFacebookF /> Login with Facebook
          </button>
          <button className="flex items-center justify-center gap-2 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-100 transition">
            <FaGoogle className="text-red-500" /> Login with Google
          </button>
        </div>
      </div>
    </div>
  );
}
