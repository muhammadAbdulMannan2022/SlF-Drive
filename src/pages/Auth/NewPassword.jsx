import React, { useState } from "react";
import { FaLessThan, FaLock } from "react-icons/fa";
import Input from "../../shared/Input";
import LoginTop from "./LoginTop";
import { Link } from "react-router";

const NewPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newPassword || !password) {
      setError("Please fill in all fields");
      return;
    }
    setError("");
    // Add your login logic here, e.g., API call
    console.log("Login attempted with:", { newPassword, password });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100">
      <div className="flex flex-col md:flex-row bg-white shadow-lg overflow-hidden w-full h-full border ">
        {/* Left Illustration Section */}
        <div className="w-full md:w-1/2 bg-indigo-50 p-8  items-center justify-center hidden md:flex">
          <div className="text-center">
            <img
              src="/newPass.png"
              alt="SLF-Drive Logo"
              className="mx-auto mb-4 w-full"
            />
          </div>
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-1/2 h-full flex items-center justify-center">
          <div className="w-full md:w-1/2 p-8 flex flex-col">
            <div>
              <img src="/logoName.png" alt="" />
              <div className="my-5">
                <Link
                  to="/forgot-password"
                  className="flex items-center text-gray-500 hover:text-gray-700 gap-4 text-2xl md:text-3xl "
                >
                  <FaLessThan /> <p>Update Password</p>
                </Link>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="New Password"
                type="password"
                value={newPassword}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="New Password"
                name="newPassword"
              />
              <Input
                label="Confirm Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Confirm Password"
                name="confirmPassword"
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#0023CF] to-[#071352] text-white p-2 rounded-md hover:bg-indigo-700 hover:cursor-pointer"
              >
                Update Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
