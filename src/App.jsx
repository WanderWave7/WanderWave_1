import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AuthProvider, useAuth } from "./AuthContext";
import Navbar from "./components/Navbar";

// Lazy-loaded route-based components
const Hero = lazy(() => import("./components/Hero"));
const DestinationHighlights = lazy(() => import("./components/DestinationHighlights"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Profile = lazy(() => import("./pages/Profile"));
const TourDetails = lazy(() => import("./pages/TourDetails"));
const DestinationDetails = lazy(() => import("./pages/DestinationDetails"));

// Protected route wrapper
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Suspense fallback={<div className="text-center py-10 text-xl">Loading...</div>}>
          <Routes>
            {/* Homepage Route */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <DestinationHighlights />
                </>
              }
            />

            {/* Auth Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* Protected Route */}
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />

            {/* Dynamic Content Routes */}
            <Route path="/tour/:id" element={<TourDetails />} />
            <Route path="/destination/:id" element={<DestinationDetails />} />

            {/* Fallback Route (Optional) */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </Router>
    </AuthProvider>
  );
}
