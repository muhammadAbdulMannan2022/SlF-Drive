import React, { useState } from "react";
import { Link, useLocation } from "react-router";
import { FaMoneyBillWave, FaCog, FaSignOutAlt } from "react-icons/fa";
import { FiLayout } from "react-icons/fi";
import { PiUsersDuotone } from "react-icons/pi";
import { CarTaxiFront, X } from "lucide-react";
import { LuMessageSquareMore } from "react-icons/lu";
import LogoutModal from "../shared/Logout";
import Modal from "../shared/Modal";

function SideBar({ setSidebarOpen }) {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const [isLogoutActive, setIsLogOutActive] = useState(false);

  return (
    <div className="h-full w-full bg-gradient-to-b from-blue-50 to-gray-100 text-gray-800 p-4 shadow-lg relative">
      <button
        className="absolute top-4 right-4 z-50 p-2  lg:hidden"
        onClick={() => setSidebarOpen((prev) => !prev)}
      >
        <X size={24} />
      </button>
      <div className="flex flex-col h-full">
        <div>
          <div className="flex items-center mb-10">
            <img src="/logoName.png" alt="Logo" className="h-8" />
          </div>
          <nav className="space-y-3">
            <Link
              to="/dashboard"
              className={`flex items-center p-2.5 rounded-lg transition-all duration-200 ${
                isActive("/dashboard")
                  ? "bg-gradient-to-r from-[#071352] to-[#0023CF] text-white"
                  : "text-[#1E1E1E] hover:bg-gray-200 hover:text-gray-900"
              }`}
            >
              <FiLayout className="text-xl mr-3" /> Dashboard
            </Link>
            <Link
              to="/earnings"
              className={`flex items-center p-2.5 rounded-lg transition-all duration-200 ${
                isActive("/earnings")
                  ? "bg-gradient-to-r from-[#071352] to-[#0023CF] text-white"
                  : "text-[#1E1E1E] hover:bg-gray-200 hover:text-gray-900"
              }`}
            >
              <FaMoneyBillWave className="text-xl mr-3" /> Earnings
            </Link>
            <Link
              to="/users"
              className={`flex items-center p-2.5 rounded-lg transition-all duration-200 ${
                isActive("/users")
                  ? "bg-gradient-to-r from-[#071352] to-[#0023CF] text-white"
                  : "text-[#1E1E1E] hover:bg-gray-200 hover:text-gray-900"
              }`}
            >
              <PiUsersDuotone className="text-xl mr-3" /> Users
            </Link>
            <Link
              to="/drivers"
              className={`flex items-center p-2.5 rounded-lg transition-all duration-200 ${
                isActive("/drivers")
                  ? "bg-gradient-to-r from-[#071352] to-[#0023CF] text-white"
                  : "text-[#1E1E1E] hover:bg-gray-200 hover:text-gray-900"
              }`}
            >
              <CarTaxiFront className="text-xl mr-3" /> Drivers
            </Link>
            <Link
              to="/rental-company"
              className={`flex items-center p-2.5 rounded-lg transition-all duration-200 ${
                isActive("/rental-company")
                  ? "bg-gradient-to-r from-[#071352] to-[#0023CF] text-white"
                  : "text-[#1E1E1E] hover:bg-gray-200 hover:text-gray-900"
              }`}
            >
              <CarTaxiFront className="text-xl mr-3" /> Rental Company
            </Link>
            <Link
              to="/messages"
              className={`flex items-center p-2.5 rounded-lg transition-all duration-200 ${
                isActive("/messages")
                  ? "bg-gradient-to-r from-[#071352] to-[#0023CF] text-white"
                  : "text-[#1E1E1E] hover:bg-gray-200 hover:text-gray-900"
              }`}
            >
              <LuMessageSquareMore className="text-xl mr-3" /> Messages
            </Link>
            <Link
              to="/settings"
              className={`flex items-center p-2.5 rounded-lg transition-all duration-200 ${
                isActive("/settings")
                  ? "bg-gradient-to-r from-[#071352] to-[#0023CF] text-white"
                  : "text-[#1E1E1E] hover:bg-gray-200 hover:text-gray-900"
              }`}
            >
              <FaCog className="text-xl mr-3" /> Settings
            </Link>
          </nav>
        </div>
        <div className="mt-auto">
          <button
            onClick={() => setIsLogOutActive(true)}
            className="flex hover:cursor-pointer items-center p-2.5 rounded-lg w-full bg-gradient-to-r from-red-600 to-red-800 text-white hover:from-red-700 hover:to-red-900 transition-all duration-200 mt-6"
          >
            <FaSignOutAlt className="text-xl mr-3" /> Log Out
          </button>
        </div>
        <Modal isOpen={isLogoutActive} onClose={() => setIsLogOutActive(false)}>
          <LogoutModal setIsLogOutActive={setIsLogOutActive} />
        </Modal>
      </div>
    </div>
  );
}

export default SideBar;
