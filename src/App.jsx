import React, { lazy, Suspense, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignIn,
  SignUp,
  useUser,
  RedirectToSignIn,
} from "@clerk/clerk-react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PreFooter from "./components/PreFooter";

// Lazy-loaded sections and pages
const Hero = lazy(() => import("./components/Hero"));
const DestinationHighlights = lazy(() => import("./components/DestinationHighlights"));
const Services = lazy(() => import("./components/Services"));
const WhyChooseUs = lazy(() => import("./components/WhyChooseUs"));
const TestimonialSection = lazy(() => import("./components/TestimonialSection"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Contact = lazy(() => import("./pages/Contact"));
const DestinationDetails = lazy(() => import("./pages/DestinationDetails"));
const TourDetails = lazy(() => import("./pages/TourDetails"));
const Profile = lazy(() => import("./pages/Profile"));

// Scroll to top on navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
};

// Auth-protected route
const ProtectedRoute = ({ children }) => {
  const { isSignedIn } = useUser();
  return isSignedIn ? children : <RedirectToSignIn />;
};

// Footer visibility logic
const footerVisiblePaths = ["/", "/about", "/contact"];
const preFooterVisiblePaths = ["/"];

const FooterWrapper = ({ children }) => {
  const { pathname } = useLocation();
  const showFooter = footerVisiblePaths.includes(pathname);
  const showPreFooter = preFooterVisiblePaths.includes(pathname);

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
    <>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<div className="text-center py-10 text-xl">Loading...</div>}>
        <FooterWrapper>
          <Routes>
            {/* Home */}
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

            {/* Static Pages */}
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />

            {/* Clerk Authentication */}
            <Route path="/login" element={<SignIn routing="path" path="/login" />} />
            <Route path="/signup" element={<SignUp routing="path" path="/signup" />} />

            {/* Protected Profile Page */}
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />

            {/* Dynamic Pages */}
            <Route path="/destination/:id" element={<DestinationDetails />} />
            <Route path="/tour/:id" element={<TourDetails />} />

            {/* Catch All */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </FooterWrapper>
      </Suspense>
    </>
  );
}
