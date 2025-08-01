import React, { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiPhone, FiMenu, FiX } from "react-icons/fi";
import {
  useUser,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";

const Navbar = () => {
  const { user, isSignedIn } = useUser();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = useCallback((id) => {
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  }, []);

  const textColor = isScrolled ? "text-black" : "text-white";
  const hoverColor = isScrolled ? "hover:text-red-500" : "hover:text-red-400";

  return (
    <nav
      className={`w-[calc(100%-2rem)] mx-auto py-4 px-6 md:px-16 rounded-xl mt-4 flex justify-between items-center shadow-md fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white text-black"
          : "bg-white/30 backdrop-blur-md text-white"
      }`}
    >
      {/* Logo */}
      <div className="text-2xl font-bold tracking-wide">
        <Link to="/" className={`${hoverColor} transition`}>
          WanderWave<span className="text-red-400">.</span>
        </Link>
      </div>

      {/* Mobile menu icon */}
      <div
        className="md:hidden text-2xl cursor-pointer z-50"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        {menuOpen ? <FiX className={textColor} /> : <FiMenu className={textColor} />}
      </div>

      {/* Navigation Links */}
      <div
        className={`${
          menuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row items-center absolute md:static top-[72px] left-0 w-full md:w-auto bg-white md:bg-transparent text-black md:text-inherit px-6 md:px-0 py-6 md:py-0 shadow-md md:shadow-none gap-6 transition-all z-40`}
      >
        <Link to="/" onClick={() => setMenuOpen(false)} className={`${hoverColor} transition`}>
          Home
        </Link>
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
        <Link to="/about" onClick={() => setMenuOpen(false)} className={`${hoverColor} transition`}>
          About Us
        </Link>
        {isSignedIn && (
          <Link
            to="/profile"
            className="hover:text-green-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            Profile
          </Link>
        )}

        {/* Account section (mobile view) */}
        <div className="flex flex-col gap-2 md:hidden w-full">
          {!isSignedIn ? (
            <>
              <SignInButton>
                <span className="text-blue-700 font-semibold text-center cursor-pointer">
                  Login
                </span>
              </SignInButton>
              <SignUpButton>
                <span className="bg-blue-600 text-white px-4 py-2 rounded-md text-center hover:bg-blue-800 font-semibold cursor-pointer">
                  Sign Up
                </span>
              </SignUpButton>
            </>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm font-semibold">
                Hi, {user?.username || user?.firstName || "User"}
              </span>
              <UserButton afterSignOutUrl="/" />
            </div>
          )}
        </div>
      </div>

      {/* Desktop right-side account & contact */}
      <div className="hidden md:flex items-center gap-6">
        {!isSignedIn ? (
          <>
            <SignInButton>
              <span
                className={`${textColor} px-4 py-1.5 rounded-md ${hoverColor} text-sm font-semibold cursor-pointer`}
              >
                Login
              </span>
            </SignInButton>
            <SignUpButton>
              <span className="bg-blue-600 text-white px-4 py-1.5 rounded-md hover:bg-blue-800 text-sm font-semibold cursor-pointer">
                Sign Up
              </span>
            </SignUpButton>
          </>
        ) : (
          <>
            <span className={`${textColor} text-sm font-semibold`}>
              Hi, {user?.username || user?.firstName || "User"}
            </span>
            <UserButton afterSignOutUrl="/" />
          </>
        )}

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
};

export default React.memo(Navbar);
