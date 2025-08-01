import React from "react";
import { SignUp } from "@clerk/clerk-react";
import palmBg from "../assets/palm-bg6.jpg";

export default function Signup() {
  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center px-4"
      style={{ backgroundImage: `url(${palmBg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* Clerk SignUp form */}
      <div className="relative z-10 bg-white bg-opacity-90 p-6 rounded-xl shadow-2xl max-w-md w-full">
        <SignUp
          appearance={{
            elements: {
              card: "shadow-none bg-transparent",
              formButtonPrimary: "bg-green-600 hover:bg-green-700 transition",
            },
          }}
          signInUrl="/login"
          redirectUrl="/"
        />
      </div>
    </div>
  );
}
