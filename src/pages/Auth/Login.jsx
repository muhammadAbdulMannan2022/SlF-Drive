import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import Input from "../../shared/Input";
import LoginTop from "./LoginTop";
import { Link } from "react-router";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }
    setError("");
    // Add your login logic here, e.g., API call
    console.log("Login attempted with:", { email, password });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100">
      <div className="flex flex-col md:flex-row bg-white shadow-lg overflow-hidden w-full h-full border  overflow-y-scroll">
        {/* Left Illustration Section */}
        <div className="w-full md:w-1/2 bg-indigo-50 p-8 items-center justify-center hidden md:flex">
          <div className="text-center">
            <img
              src="/login.png"
              alt="SLF-Drive Logo"
              className="mx-auto mb-4 w-full"
            />
          </div>
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-1/2 h-full flex items-center justify-center">
          <div className="w-full md:w-1/2 p-8 flex flex-col">
            <div>
              <LoginTop />
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                name="email"
              />
              <Input
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                name="password"
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label className="ml-2 text-sm text-gray-700">
                    Remember me
                  </label>
                </div>
                <Link
                  to="/forgot-password"
                  className="text-sm text-indigo-600 hover:text-indigo-800"
                >
                  Forgot Password?
                </Link>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#0023CF] to-[#071352] text-white p-2 rounded-md hover:bg-indigo-700 hover:cursor-pointer"
              >
                Sign In
              </button>
              <div className="flex items-center my-6">
                <div className="flex-1 border-t border-gray-200"></div>
                <span className="px-4 text-sm text-gray-500">Or</span>
                <div className="flex-1 border-t border-gray-200"></div>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <button className="flex items-center justify-center w-1/2 bg-white border border-gray-300 p-2 rounded-md hover:bg-gray-50 hover:cursor-pointer">
                  <img
                    src="https://www.google.com/favicon.ico"
                    alt="Google"
                    className="w-5 h-5 mr-2"
                  />{" "}
                  Google
                </button>
                <button className="flex items-center justify-center w-1/2 bg-white border border-gray-300 p-2 rounded-md hover:bg-gray-50 hover:cursor-pointer">
                  <img
                    src="https://www.outlook.com/favicon.ico"
                    alt="Outlook"
                    className="w-5 h-5 mr-2"
                  />{" "}
                  Outlook
                </button>
              </div>
              <p className="text-center text-sm text-gray-600 mt-4">
                Have no account?{" "}
                <Link
                  to="/signup"
                  className="text-indigo-600 hover:text-indigo-800"
                >
                  Registration
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
