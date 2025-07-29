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
import Footer from "./components/Footer";
import PreFooter from "./components/PreFooter"; // ✅ Import PreFooter

// Lazy-loaded components
const Hero = lazy(() => import("./components/Hero"));
const DestinationHighlights = lazy(() =>
  import("./components/DestinationHighlights")
);
const Services = lazy(() => import("./components/Services"));
const WhyChooseUs = lazy(() => import("./components/WhyChooseUs"));
const TestimonialSection = lazy(() =>
  import("./components/TestimonialSection")
);
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Profile = lazy(() => import("./pages/Profile"));
const TourDetails = lazy(() => import("./pages/TourDetails"));
const DestinationDetails = lazy(() => import("./pages/DestinationDetails"));
const Contact = lazy(() => import("./pages/Contact"));
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

// Paths where footer should show
const footerVisiblePaths = ["/", "/about", "/contact"];

// Paths where PreFooter should show
const preFooterVisiblePaths = ["/"];

const FooterWrapper = ({ children }) => {
  const location = useLocation();
  const showFooter = footerVisiblePaths.includes(location.pathname);
  const showPreFooter = preFooterVisiblePaths.includes(location.pathname);

  return (
    <>
      {children}
      {showPreFooter && <PreFooter />}
      {showFooter && <Footer />}
    </>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Suspense
          fallback={<div className="text-center py-10 text-xl">Loading...</div>}
        >
          <FooterWrapper>
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

              {/* Protected Profile */}
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />

              {/* Dynamic Tour & Destination Routes */}
              <Route path="/tour/:id" element={<TourDetails />} />
              <Route path="/destination/:id" element={<DestinationDetails />} />

              {/* Fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </FooterWrapper>
        </Suspense>
      </Router>
    </AuthProvider>
  );
}
