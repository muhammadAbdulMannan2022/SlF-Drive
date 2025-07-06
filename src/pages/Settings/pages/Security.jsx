"use client";

import { useState, useActionState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SecurityPage = () => {
  // State for password visibility
  const [showPasswords, setShowPasswords] = useState({
    oldPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  // useActionState for form handling
  const [formState, submitAction, isPending] = useActionState(
    async (prevState, formData) => {
      const oldPassword = formData.get("oldPassword");
      const newPassword = formData.get("newPassword");
      const confirmPassword = formData.get("confirmPassword");

      // Validation
      const newErrors = {};

      if (!oldPassword) {
        newErrors.oldPassword = "Old password is required";
      }

      if (!newPassword) {
        newErrors.newPassword = "New password is required";
      } else if (newPassword.length < 8) {
        newErrors.newPassword = "Password must be at least 8 characters long";
      }

      if (!confirmPassword) {
        newErrors.confirmPassword = "Please confirm your password";
      } else if (newPassword !== confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }

      if (oldPassword === newPassword) {
        newErrors.newPassword =
          "New password must be different from old password";
      }

      if (Object.keys(newErrors).length > 0) {
        return { errors: newErrors, success: false };
      }

      // Simulate API call
      console.log("Password update data:", { oldPassword, newPassword });
      // Here you would typically make an API call to update the password
      alert("Password updated successfully!");

      return {
        errors: {},
        success: true,
        resetFields: true, // Signal to reset form
      };
    },
    { errors: {}, success: false }
  );

  // State for form inputs
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  // Reset form if submission was successful
  if (formState.success && formState.resetFields) {
    setFormData({
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
    formState.resetFields = false; // Reset the flag
  }

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear error when user starts typing
    if (formState.errors[field]) {
      formState.errors[field] = "";
    }
  };

  const togglePasswordVisibility = (field) => {
    setShowPasswords((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const passwordFields = [
    {
      key: "oldPassword",
      label: "Old Password",
      placeholder: "Enter your current password",
    },
    {
      key: "newPassword",
      label: "Create New Password",
      placeholder: "Enter your new password",
    },
    {
      key: "confirmPassword",
      label: "Confirm Password",
      placeholder: "Confirm your new password",
    },
  ];

  return (
    <div className="p-6 mx-auto">
      <div className=" p-6 max-w-lg">
        <h1 className="text-xl font-bold text-blue-600 mb-8">
          Update Your Password
        </h1>

        <div className="space-y-6">
          {passwordFields.map((field) => (
            <div key={field.key}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {field.label}
              </label>
              <div className="relative">
                <input
                  type={showPasswords[field.key] ? "text" : "password"}
                  name={field.key}
                  value={formData[field.key]}
                  onChange={(e) => handleInputChange(field.key, e.target.value)}
                  placeholder={field.placeholder}
                  className={`w-full px-4 py-3 pr-12 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                    formState.errors[field.key]
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300 bg-gray-50"
                  }`}
                  disabled={isPending}
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility(field.key)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  disabled={isPending}
                >
                  {showPasswords[field.key] ? (
                    <FaEyeSlash className="w-5 h-5" />
                  ) : (
                    <FaEye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {formState.errors[field.key] && (
                <p className="mt-1 text-sm text-red-600">
                  {formState.errors[field.key]}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Update Button */}
        <div className="mt-8">
          <button
            onClick={() => {
              const formDataObj = new FormData();
              Object.entries(formData).forEach(([key, value]) => {
                formDataObj.append(key, value);
              });
              submitAction(formDataObj);
            }}
            disabled={isPending}
            className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
              isPending
                ? "bg-gradient-to-r from-[#071352] to-[#0023CF] text-white cursor-not-allowed"
                : "bg-gradient-to-r from-[#071352] to-[#0023CF] text-white"
            }`}
          >
            {isPending ? "Updating..." : "Update"}
          </button>
        </div>

        {/* Password Requirements */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-sm font-medium text-gray-700 mb-2">
            Password Requirements:
          </h3>
          <ul className="text-xs text-gray-600 space-y-1">
            <li>• At least 8 characters long</li>
            <li>• Must be different from your current password</li>
            <li>• Should contain a mix of letters, numbers, and symbols</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SecurityPage;
