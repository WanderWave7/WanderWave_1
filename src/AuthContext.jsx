import React, { createContext, useState, useContext, useEffect } from "react";

// Keys used in localStorage
const USER_KEY = "wanderwave_user";
const SIGNUP_USER_KEY = "wanderwave_signup_user";

// Create Context
const AuthContext = createContext();

// Custom Hook
export const useAuth = () => useContext(AuthContext);

// Main Auth Provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem(USER_KEY);
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem(USER_KEY, JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(USER_KEY);
  };

  // Optional: Retrieve registered user from signup
  const getRegisteredUser = () => {
    const storedSignupUser = localStorage.getItem(SIGNUP_USER_KEY);
    return storedSignupUser ? JSON.parse(storedSignupUser) : null;
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, getRegisteredUser }}>
      {children}
    </AuthContext.Provider>
  );
};
