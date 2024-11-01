import React, { useState } from "react";
import { toast } from "react-toastify";
import { logoutUser } from "../services/authService";
import { redirect } from "react-router-dom";
import Logo from "../assets/LitLens.png";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await logoutUser();
      toast.success("Logged out successfully");
      setLoggedIn(false);
      return redirect("/");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message || "sorry there was an error";
      toast.error(errorMessage);
      return null;
    }
  };

  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <img src={Logo} alt="LitLens Logo" className="h-10 w-10 mr-2" />
        <span className="text-xl font-bold">LitLens</span>
      </div>
      <div className="flex items-center">
        {loggedIn && (
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Logout
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
