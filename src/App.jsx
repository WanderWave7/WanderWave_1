import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import TourDetails from "./pages/TourDetails";
import { AuthProvider, useAuth } from "./AuthContext";
import DestinationHighlights from "./components/DestinationHighlights";
import DestinationDetails from "./pages/DestinationDetails"; // ← add this route too

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          {/* Main homepage with Hero and Destination Highlights */}
          <Route path="/" element={
            <>
              <Hero />
              <DestinationHighlights />
            </>
          } />

          {/* Destination detailed page */}
          <Route path="/destination/:id" element={<DestinationDetails />} />

          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected Profile Page */}
          <Route path="/profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />

          {/* Tour Detail Dynamic Page */}
          <Route path="/tour/:id" element={<TourDetails />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
