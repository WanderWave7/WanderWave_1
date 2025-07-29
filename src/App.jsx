import React, { lazy, Suspense, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./AuthContext";
import Navbar from "./components/Navbar";

// Lazy-loaded components
const Hero = lazy(() => import("./components/Hero"));
const DestinationHighlights = lazy(() => import("./components/DestinationHighlights"));
const Services = lazy(() => import("./components/Services"));
const WhyChooseUs = lazy(() => import("./components/WhyChooseUs"));
const TestimonialSection = lazy(() => import("./components/TestimonialSection"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Profile = lazy(() => import("./pages/Profile"));
const TourDetails = lazy(() => import("./pages/TourDetails"));
const DestinationDetails = lazy(() => import("./pages/DestinationDetails"));
const Contact = lazy(() => import("./pages/Contact"));

// **Add lazy import for AboutUs**
const AboutUs = lazy(() => import("./pages/AboutUs"));

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
};

// Protected route wrapper
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Suspense fallback={<div className="text-center py-10 text-xl">Loading...</div>}>
          <Routes>
            {/* Homepage */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <DestinationHighlights />
                  <Services />
                  <WhyChooseUs />
                  <TestimonialSection />
                </>
              }
            />

            {/* About Us Page */}
            <Route path="/about" element={<AboutUs />} />

            {/* Contact Page */}
            <Route path="/contact" element={<Contact />} />

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

            {/* Dynamic Routes */}
            <Route path="/tour/:id" element={<TourDetails />} />
            <Route path="/destination/:id" element={<DestinationDetails />} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </Router>
    </AuthProvider>
  );
}
