import React, { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiPhone, FiMenu, FiX } from "react-icons/fi";
import { useUser, SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const { user, isSignedIn } = useUser();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const scrollToSection = useCallback((id) => {
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
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
      <div className={`text-2xl font-bold tracking-wide ${textColor}`}>
        <Link to="/" className={`${hoverColor} transition`}>
          WanderWave<span className="text-red-400">.</span>
        </Link>
      </div>

      <div
        className="md:hidden text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <FiX className={`${textColor}`} />
        ) : (
          <FiMenu className={`${textColor}`} />
        )}
      </div>

      <div
        className={`$${
          menuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row absolute md:static top-16 left-4 right-4 md:left-auto md:right-auto bg-white md:bg-transparent text-black md:text-inherit rounded-lg md:rounded-none p-4 md:p-0 shadow-md md:shadow-none z-40 gap-4 md:gap-6 font-medium transition-all`}
      >
        <Link
          to="/"
          className={`${hoverColor} transition`}
          onClick={() => setMenuOpen(false)}
        >
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
        <Link
          to="/about"
          className={`${hoverColor} transition`}
          onClick={() => setMenuOpen(false)}
        >
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

        <div className="flex flex-col md:hidden gap-2">
          {!isSignedIn ? (
            <>
              <SignInButton>
                <span className="text-sm text-blue-700 font-semibold">
                  Login
                </span>
              </SignInButton>
              <SignUpButton>
                <span className="text-sm bg-blue-600 text-white px-4 py-2 rounded-md text-center hover:bg-blue-800 font-semibold">
                  Sign Up
                </span>
              </SignUpButton>
            </>
          ) : (
            <>
              <span className={`text-sm font-semibold`}>
                Hi, {user?.username || user?.firstName || "User"}
              </span>
              <UserButton afterSignOutUrl="/" />
            </>
          )}
        </div>
      </div>

      <div className="hidden md:flex items-center gap-6">
        <div className="flex gap-3 items-center">
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
        </div>

        <div className={`hidden md:flex items-center gap-2 text-sm ${textColor}`}>
          <FiPhone className="text-red-400 text-lg" />
          <div>
            <p className="font-bold leading-none">+1 1800 25 2202</p>
            <p
              className={`text-xs ${
                isScrolled ? "text-black/80" : "text-white/90"
              } leading-none`}
            >
              Call Your Travel Agent
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default React.memo(Navbar);
