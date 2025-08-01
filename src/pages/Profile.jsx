import React, { useState, useEffect } from "react";
import {
  FaUserCircle,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaEdit,
  FaSave,
} from "react-icons/fa";
import { MdTravelExplore } from "react-icons/md";
import { useUser } from "@clerk/clerk-react";

export default function Profile() {
  const { user } = useUser();

  const LOCAL_KEY = `wanderwave_profile_${user?.username || "guest"}`;
  const [image, setImage] = useState(null);
  const [phone, setPhone] = useState("");
  const [bio, setBio] = useState("");
  const [wishlist, setWishlist] = useState("");
  const [wishlistItems, setWishlistItems] = useState([]);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(LOCAL_KEY));
    if (saved) {
      setPhone(saved.phone || "");
      setBio(saved.bio || "");
      setWishlistItems(saved.wishlist || []);
      setImage(saved.image || null);
    }
  }, [user]);

  useEffect(() => {
    const data = { phone, bio, wishlist: wishlistItems, image };
    localStorage.setItem(LOCAL_KEY, JSON.stringify(data));
  }, [phone, bio, wishlistItems, image]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleAddWishlist = () => {
    if (wishlist.trim()) {
      setWishlistItems([...wishlistItems, wishlist.trim()]);
      setWishlist("");
    }
  };

  const toggleEditMode = () => setEditMode(!editMode);

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="text-center text-xl text-gray-600">
          Please log in to view your profile.
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full pt-24 pb-10 px-6 sm:px-12">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1541417904950-b855846fe074?q=80&w=1441&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          filter: "blur(2px)",
        }}
      ></div>

      <div className="relative z-10 bg-white/90 rounded-xl shadow-2xl flex flex-col md:flex-row w-full max-w-6xl mx-auto overflow-hidden backdrop-blur-sm">
        {/* Sidebar */}
        <div className="md:w-1/3 bg-gradient-to-b from-blue-100 to-blue-200 p-6 flex flex-col items-center">
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-blue-400 mb-4">
            <img
              src={image || user.imageUrl || "https://via.placeholder.com/120x120.png?text=User"}
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>
          {editMode && (
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="text-sm text-gray-600 mb-4"
            />
          )}

          <h2 className="text-xl font-bold text-blue-800 flex items-center gap-2">
            <FaUserCircle /> {user.username || user.firstName}
          </h2>

          <p className="text-sm text-gray-700 mt-2 flex items-center gap-2">
            <FaEnvelope /> {user.emailAddresses?.[0]?.emailAddress || "Not Provided"}
          </p>

          <div className="mt-6 w-full space-y-4">
            <div className="flex items-center gap-2">
              <FaPhone className="text-blue-600" />
              {editMode ? (
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full px-3 py-1 rounded border border-gray-300"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              ) : (
                <span className="text-sm text-gray-800">{phone || "N/A"}</span>
              )}
            </div>

            {editMode ? (
              <textarea
                rows="3"
                placeholder="Tell us about yourself..."
                className="w-full px-3 py-2 rounded border border-gray-300"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            ) : (
              <p className="text-gray-700 text-sm">{bio || "No bio yet."}</p>
            )}

            <button
              onClick={toggleEditMode}
              className="mt-4 flex items-center gap-2 px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              {editMode ? <FaSave /> : <FaEdit />}
              {editMode ? "Save Profile" : "Edit Profile"}
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:w-2/3 p-6 bg-white space-y-6">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center gap-2">
            <MdTravelExplore className="text-3xl" />
            Wishlist Places
          </h3>

          {editMode && (
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Add a place you wish to visit"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                value={wishlist}
                onChange={(e) => setWishlist(e.target.value)}
              />
              <button
                onClick={handleAddWishlist}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Add
              </button>
            </div>
          )}

          <ul className="list-disc list-inside space-y-2 text-gray-800">
            {wishlistItems.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
