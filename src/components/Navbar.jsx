import React, { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiPhone } from "react-icons/fi";
import { useAuth } from "../AuthContext";

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  // Only update scroll state when it actually changes (perf improvement)
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled((prev) => {
        if ((scrollTop > 80 && !prev) || (scrollTop <= 80 && prev)) {
          return scrollTop > 80;
        }
        return prev;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor = isScrolled ? "text-black" : "text-white";
  const hoverColor = isScrolled ? "hover:text-red-500" : "hover:text-red-400";

  // useCallback to avoid creating a new scrollTo function on every render
  const scrollToSection = useCallback((id) => {
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <nav
      className={`w-[calc(100%-2rem)] mx-auto py-4 px-6 md:px-16 rounded-xl mt-4 flex justify-between items-center shadow-md fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white text-black"
          : "bg-white/30 backdrop-blur-md text-white"
      }`}
    >
      {/* Logo */}
      <div className={`text-2xl font-bold tracking-wide ${textColor}`}>
        <Link to="/" className={`${hoverColor} transition`}>
          WanderWave<span className="text-red-400">.</span>
        </Link>
      </div>

      {/* Navigation Links */}
      <div className={`hidden md:flex gap-6 font-medium ${textColor}`}>
        <Link to="/" className={`${hoverColor} transition`}>Home</Link>
        <a
          href="#featured"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#featured");
          }}
          className={`${hoverColor} transition`}
        >
          Trips
        </a>
        
        <a
          href="#highlights"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#highlights");
          }}
          className={`${hoverColor} transition`}
        >
          Destinations
        </a>
        <Link to="/about" className={`${hoverColor} transition`}>About Us</Link>

        {user && (
          <Link to="/profile" className="hover:text-green-500 transition">
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
                className={`${textColor} px-4 py-1.5 rounded-md ${hoverColor} text-sm font-semibold`}
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
              <span className={`${textColor} text-sm font-semibold`}>
                Hi, {user.username || "User"}
              </span>
              <button
                onClick={handleLogout}
                className={`${textColor} hover:text-yellow-500 text-sm font-semibold`}
              >
                Logout
              </button>
            </>
          )}
        </div>

        {/* Contact Section */}
        <div className={`hidden md:flex items-center gap-2 text-sm ${textColor}`}>
          <FiPhone className="text-red-400 text-lg" />
          <div>
            <p className="font-bold leading-none">+1 1800 25 2202</p>
            <p className={`text-xs ${isScrolled ? "text-black/80" : "text-white/90"} leading-none`}>
              Call Your Travel Agent
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}

// ✅ Memoize the component to avoid re-renders unless props/state change
export default React.memo(Navbar);
