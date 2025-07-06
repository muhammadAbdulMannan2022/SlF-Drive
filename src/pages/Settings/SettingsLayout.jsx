"use client";

import { useState } from "react";
import {
  FaUser,
  FaShieldAlt,
  FaLanguage,
  FaFileContract,
  FaUserShield,
  FaHandshake,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Outlet, useLocation, useNavigate } from "react-router";

const SettingsLayout = () => {
  const [activeSection, setActiveSection] = useState("Account");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navigationItems = [
    {
      id: "Account",
      label: "Account",
      icon: FaUser,
      path: "account",
    },
    {
      id: "Security",
      label: "Security",
      icon: FaShieldAlt,
      path: "security",
    },
    {
      id: "Language",
      label: "Language",
      icon: FaLanguage,
      path: "language",
    },
    {
      id: "Terms",
      label: "Terms & Condition",
      icon: FaFileContract,
      path: "terms",
    },
    {
      id: "Privacy",
      label: "Privacy Policy",
      icon: FaUserShield,
      path: "privacy",
    },
    {
      id: "Collaborations",
      label: "Collaborations",
      icon: FaHandshake,
      path: "collaborations",
    },
  ];

  const handleSectionChange = (item) => {
    setActiveSection(item.id);
    setIsSidebarOpen(false);
    navigate(item.path);
  };

  return (
    <div className="flex h-full bg-gray-100">
      {/* Mobile Menu Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0  z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out z-50 lg:z-0 w-64 h-fit py-10 flex flex-col`}
        style={{ backgroundColor: "#B4BBDF" }}
      >
        {/* Mobile Close Button */}
        <div className="lg:hidden flex justify-end p-4">
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            <FaTimes className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 px-4 pb-4">
          <div className="space-y-2">
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = location.pathname.includes(item.path);

              return (
                <button
                  key={item.id}
                  onClick={() => handleSectionChange(item)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left hover:cursor-pointer transition-colors ${
                    isActive
                      ? "bg-gradient-to-r from-[#071352] to-[#0023CF] text-white shadow-md"
                      : "text-[#1E1E1E] hover:bg-[#abb2d4] hover:bg-opacity-20"
                  }`}
                >
                  <IconComponent className="w-5 h-5 flex-shrink-0" />
                  <span className="font-medium text-sm">{item.label}</span>
                </button>
              );
            })}
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile Header */}
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <FaBars className="w-6 h-6" />
          </button>
          <h1 className="font-semibold text-gray-900">{activeSection}</h1>
          <div className="w-6"></div> {/* Spacer for centering */}
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SettingsLayout;
