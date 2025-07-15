import React, { useState } from "react";
import { Link, useLocation } from "react-router";
import {
  FaMoneyBillWave,
  FaCog,
  FaSignOutAlt,
  FaCarAlt,
  FaCarSide,
  FaCrown,
} from "react-icons/fa";
import { FiLayout } from "react-icons/fi";
import { PiUsersDuotone } from "react-icons/pi";
import { CarTaxiFront, X, Bell, Crown, FileText } from "lucide-react"; // Added missing icons
import { LuMessageSquareMore } from "react-icons/lu";
import LogoutModal from "../shared/Logout";
import Modal from "../shared/Modal";
import { RiLayout3Fill, RiMessage2Fill } from "react-icons/ri";
import { HiUsers } from "react-icons/hi";
import { BsBellFill } from "react-icons/bs";
import { AiFillFileText } from "react-icons/ai";
import { IoSettingsSharp } from "react-icons/io5";

function SideBar({ setSidebarOpen }) {
  const location = useLocation();
  const [isLogoutActive, setIsLogOutActive] = useState(false);

  // Updated menu items to match the first sidebar
  const menuItems = [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: RiLayout3Fill,
    },
    {
      title: "Earnings",
      url: "/dashboard/earnings",
      icon: FaMoneyBillWave,
    },
    {
      title: "Users",
      url: "/dashboard/users",
      icon: HiUsers,
    },
    {
      title: "Drivers",
      url: "/dashboard/drivers",
      icon: FaCarAlt,
    },
    {
      title: "Rental Company",
      url: "/dashboard/rental-company",
      icon: FaCarSide,
    },
    {
      title: "Messages",
      url: "/dashboard/messages",
      icon: RiMessage2Fill,
    },
    {
      title: "Notification",
      url: "/dashboard/notifications",
      icon: BsBellFill, // Using Bell from lucide-react instead of BellRing
    },
    {
      title: "Subscription",
      url: "/dashboard/subscription",
      icon: FaCrown,
    },
    {
      title: "Reports",
      url: "/dashboard/reports",
      icon: AiFillFileText,
    },
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: IoSettingsSharp,
    },
  ];

  // Updated isActive to match the first sidebar's logic
  const isActive = (url) => {
    if (url === "/dashboard") {
      return location.pathname === url;
    }
    return location.pathname.startsWith(url);
  };

  return (
    <div className="h-full w-full bg-gradient-to-b from-blue-50 to-gray-100 text-gray-800 p-4 shadow-lg relative">
      <button
        className="absolute top-4 right-4 z-50 p-2 lg:hidden"
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
            {menuItems.map((item) => (
              <Link
                key={item.title}
                to={item.url}
                className={`flex items-center p-2.5 rounded-lg transition-all duration-200 ${
                  isActive(item.url)
                    ? "bg-gradient-to-r from-[#071352] to-[#0023CF] text-white"
                    : "text-[#1E1E1E] hover:bg-gray-200 hover:text-gray-900"
                }`}
              >
                <item.icon className="text-xl mr-3" /> {item.title}
              </Link>
            ))}
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
