import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiPhone } from "react-icons/fi";
import { useAuth } from "../AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="w-[calc(100%-2rem)] mx-auto py-4 px-6 md:px-16 bg-white/30 backdrop-blur-md rounded-xl mt-4 flex justify-between items-center shadow-md fixed top-0 left-0 right-0 z-50">
      {/* Logo */}
      <div className="text-2xl font-bold text-white tracking-wide">
        <Link to="/" className="hover:text-red-400 transition">
          WanderWave<span className="text-red-400">.</span>
        </Link>
      </div>

      {/* Navigation Links with Profile */}
      <div className="hidden md:flex gap-6 font-medium text-white">
        <Link to="/" className="hover:text-red-400 transition">
          Home
        </Link>
        <Link to="/trips" className="hover:text-red-400 transition">
          Trips
        </Link>
        <Link to="/about" className="hover:text-red-400 transition">
          About
        </Link>
        <Link to="/destinations" className="hover:text-red-400 transition">
          Destinations
        </Link>
        {user && (
          <Link to="/profile" className="hover:text-green-300 transition">
            Profile
          </Link>
        )}
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        <div className="hidden md:flex gap-3 items-center">
          {!user ? (
            <>
              <Link
                to="/login"
                className="text-white px-4 py-1.5 rounded-md hover:text-red-400 text-sm font-semibold"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-blue-600 text-white px-4 py-1.5 rounded-md hover:bg-blue-800 text-sm font-semibold"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <>
              <span className="text-white text-sm font-semibold">
                Hi, {user.username || "User"}
              </span>
              <button
                onClick={handleLogout}
                className="text-white hover:text-yellow-300 text-sm font-semibold"
              >
                Logout
              </button>
            </>
          )}
        </div>

        <div className="hidden md:flex items-center gap-2 text-sm text-white">
          <FiPhone className="text-red-400 text-lg" />
          <div>
            <p className="font-bold leading-none">+1 1800 25 2202</p>
            <p className="text-xs text-white/90 leading-none">
              Call Your Travel Agent
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}
