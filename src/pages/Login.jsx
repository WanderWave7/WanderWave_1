import React from "react";
import { SignIn } from "@clerk/clerk-react";
import palmBg from "../assets/palm-bg6.jpg";

export default function Login() {
  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center px-4"
      style={{ backgroundImage: `url(${palmBg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Clerk Sign-In */}
      <div className="relative z-10 bg-white bg-opacity-90 p-6 rounded-xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-4 text-green-700">
          Welcome Back
        </h2>
        <SignIn path="/login" routing="path" signUpUrl="/signup" />
      </div>
    </div>
  );
}
