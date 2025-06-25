import { useState } from "react";
import { MapPin, Eye, EyeOff } from "lucide-react";
import Input from "../../shared/Input";
import LoginTop from "./LoginTop";

export default function Component() {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100 flex items-center justify-center ">
      <div className="w-full bg-white rounded-3xl shadow-2xl overflow-hidden h-full">
        <div className="flex flex-col lg:flex-row h-full">
          {/* Left Side - Illustration */}
          <div className="w-full md:w-1/2 bg-indigo-50 p-8 flex items-center justify-center">
            <div className="text-center">
              <img
                src="/signup.png"
                alt="SLF-Drive Logo"
                className="mx-auto mb-4 w-full"
              />
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
            <div className="max-w-md mx-auto w-full">
              {/* Logo and Header */}
              <div>
                <LoginTop />
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Company Name */}
                <div>
                  <label
                    htmlFor="company"
                    className="text-sm font-medium text-gray-700"
                  >
                    Company Name
                  </label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="Enter company name..."
                    value={formData.companyName}
                    onChange={(e) =>
                      handleInputChange("companyName", e.target.value)
                    }
                    className="mt-1 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                {/* Email and Mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-700"
                    >
                      Email Id
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="info@xyz.com"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className="mt-1 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="mobile"
                      className="text-sm font-medium text-gray-700"
                    >
                      Mobile No.
                    </label>
                    <Input
                      id="mobile"
                      type="tel"
                      placeholder="+91 - 98596 50000"
                      value={formData.mobile}
                      onChange={(e) =>
                        handleInputChange("mobile", e.target.value)
                      }
                      className="mt-1 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Password and Confirm Password */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="password"
                      className="text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <div className="relative mt-1">
                      <Input
                        id="password"
                        type="password"
                        placeholder="••••••••••"
                        value={formData.password}
                        onChange={(e) =>
                          handleInputChange("password", e.target.value)
                        }
                        className="mt-1 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="text-sm font-medium text-gray-700"
                    >
                      Confirm Password
                    </label>
                    <div className="relative mt-1">
                      <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="••••••••••"
                        value={formData.confirmPassword}
                        onChange={(e) =>
                          handleInputChange("confirmPassword", e.target.value)
                        }
                        className="mt-1 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Sign Up Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#0023CF] to-[#071352] text-white p-2 rounded-md hover:bg-indigo-700 hover:cursor-pointer"
                >
                  Sign Up
                </button>

                {/* Divider */}
                <div className="flex items-center my-6">
                  <div className="flex-1 border-t border-gray-200"></div>
                  <span className="px-4 text-sm text-gray-500">Or</span>
                  <div className="flex-1 border-t border-gray-200"></div>
                </div>

                {/* Social Login Buttons */}
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

                {/* Sign In Link */}
                <p className="text-center text-sm text-gray-600 mt-6">
                  Have an account?{" "}
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Sign In
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
