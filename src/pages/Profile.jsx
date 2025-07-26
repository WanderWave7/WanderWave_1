import React, { useState } from "react";
import { useAuth } from "../AuthContext";

export default function Profile() {
  const { user } = useAuth();
  const [image, setImage] = useState(null);

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="text-center text-xl text-gray-600">
          Please log in to view your profile.
        </div>
      </div>
    );
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 px-4">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md text-center">
        <h2 className="text-3xl font-bold mb-4 text-blue-700">User Profile</h2>

        <div className="flex justify-center mb-4">
          <img
            src={image || "https://via.placeholder.com/120x120.png?text=User"}
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover border-4 border-blue-300"
          />
        </div>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="block w-full text-sm text-gray-600 mb-4"
        />

        <div className="text-left space-y-2">
          <p>
            <span className="font-semibold text-gray-700">Username:</span>{" "}
            {user.username}
          </p>
          <p>
            <span className="font-semibold text-gray-700">Email:</span>{" "}
            {user.email || "Not provided"}
          </p>
        </div>
      </div>
    </div>
  );
}
