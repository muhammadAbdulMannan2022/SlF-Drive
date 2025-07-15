"use client";

import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Modal from "../../shared/Modal";
import { UserDetailsModal } from "./helps/UserDetails";

// Sample user data
const users = [
  {
    id: 1,
    name: "Enrique",
    email: "abc@gmail.com",
    phone: "12345678",
    joinDate: "16 Jun 2025",
  },
  {
    id: 2,
    name: "Maria",
    email: "maria@gmail.com",
    phone: "87654321",
    joinDate: "15 Jun 2025",
  },
  {
    id: 3,
    name: "John",
    email: "john@gmail.com",
    phone: "11223344",
    joinDate: "14 Jun 2025",
  },
  {
    id: 4,
    name: "Sarah",
    email: "sarah@gmail.com",
    phone: "44332211",
    joinDate: "13 Jun 2025",
  },
  {
    id: 5,
    name: "Enrique",
    email: "enrique2@gmail.com",
    phone: "12345678",
    joinDate: "16 Jun 2025",
  },
  {
    id: 6,
    name: "David",
    email: "david@gmail.com",
    phone: "55667788",
    joinDate: "12 Jun 2025",
  },
  {
    id: 7,
    name: "Lisa",
    email: "lisa@gmail.com",
    phone: "99887766",
    joinDate: "11 Jun 2025",
  },
  {
    id: 8,
    name: "Mike",
    email: "mike@gmail.com",
    phone: "33445566",
    joinDate: "10 Jun 2025",
  },
  {
    id: 9,
    name: "Anna",
    email: "anna@gmail.com",
    phone: "77889900",
    joinDate: "09 Jun 2025",
  },
  {
    id: 10,
    name: "Carlos",
    email: "carlos@gmail.com",
    phone: "22334455",
    joinDate: "08 Jun 2025",
  },
  {
    id: 11,
    name: "Emma",
    email: "emma@gmail.com",
    phone: "66778899",
    joinDate: "07 Jun 2025",
  },
  {
    id: 12,
    name: "Robert",
    email: "robert@gmail.com",
    phone: "11335577",
    joinDate: "06 Jun 2025",
  },
];

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [isDetails, setIsDetails] = useState(false);
  const [seclectedUser, setSeclectedUser] = useState(null);

  // Real-time search functionality
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredUsers(users);
    } else {
      const filtered = users.filter(
        (user) =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.phone.includes(searchTerm)
      );
      setFilteredUsers(filtered);
    }
  }, [searchTerm]);

  const handleSearch = () => {
    console.log("Search triggered for:", searchTerm);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleAction = (action, user) => {
    switch (action) {
      case "view":
        setIsDetails(true);
        setSeclectedUser(user);
        break;
      case "delete":
        console.log(`Delete user ${user.id}: ${user.name}`);
        break;
      case "hold":
        console.log(`Hold user ${user.id}: ${user.id}`);
        break;
    }
    setDropdownOpen(null);
  };

  const toggleDropdown = (userId) => {
    setDropdownOpen(dropdownOpen === userId ? null : userId);
  };

  return (
    <div className="px-5 md:px-20 min-h-screen">
      <div className="">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 sm:p-6 border-b gap-4">
          <h1 className="text-xl font-semibold text-gray-900">User List</h1>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className="relative flex-1 sm:flex-none bg-white">
              <input
                type="text"
                placeholder="User Name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full sm:w-64 pr-10 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0B2088]"
              />
              <svg
                className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#1E1E1E]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <button
              onClick={handleSearch}
              className="bg-[#0B2088] text-white p-3 rounded-full flex items-center hover:cursor-pointer"
            >
              <FaSearch className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Table Container */}
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-[#B4BBDF]">
              <tr>
                <th className="w-16 px-4 py-3 text-left text-sm font-semibold text-[#1E1E1E]">
                  #SI
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-[#1E1E1E] min-w-[120px]">
                  User Name
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-[#1E1E1E] min-w-[180px]">
                  Email
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-[#1E1E1E] min-w-[120px]">
                  Phone number
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-[#1E1E1E] min-w-[100px]">
                  Join Date
                </th>
                <th className="w-20 px-4 py-3 text-center text-sm font-semibold text-[#1E1E1E]">
                  Details
                </th>
              </tr>
            </thead>
            <tbody className="">
              {filteredUsers.map((user, index) => (
                <tr key={user.id}>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">
                    {user.id}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    {user.name}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">
                    {user.email}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">
                    {user.phone}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">
                    {user.joinDate}
                  </td>
                  <td className="px-4 py-3 text-center hover:cursor-pointer">
                    <div className="relative">
                      <button
                        onClick={() => toggleDropdown(user.id)}
                        className="p-2 hover:bg-gray-100 rounded-full hover:cursor-pointer"
                      >
                        <svg
                          className="h-4 w-4 text-gray-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                          ></path>
                        </svg>
                      </button>
                      {dropdownOpen === user.id && (
                        <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg z-10">
                          <button
                            className="block w-full text-left px-4 py-2 text-sm text-[#1E1E1E] hover:bg-gray-100 hover:cursor-pointer"
                            onClick={() => handleAction("view", user)}
                          >
                            View Details
                          </button>
                          <button
                            className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 hover:cursor-pointer"
                            onClick={() =>
                              handleAction("delete", user.id, user.name)
                            }
                          >
                            Delete
                          </button>
                          <button
                            className="block w-full text-left px-4 py-2 text-sm text-orange-600 hover:bg-gray-100 hover:cursor-pointer"
                            onClick={() =>
                              handleAction("hold", user.id, user.name)
                            }
                          >
                            Hold
                          </button>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty state */}
        {filteredUsers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">
              No users found matching your search.
            </p>
            <button
              className="mt-4 px-4 py-2 border border-gray-300 rounded-md text-[#1E1E1E] hover:bg-gray-100"
              onClick={() => setSearchTerm("")}
            >
              Clear Search
            </button>
          </div>
        )}

        {/* Results count */}
        {searchTerm && filteredUsers.length > 0 && (
          <div className="px-4 sm:px-6 py-3 border-t bg-gray-50">
            <p className="text-sm text-gray-600">
              Found {filteredUsers.length} user
              {filteredUsers.length !== 1 ? "s" : ""} matching "{searchTerm}"
            </p>
          </div>
        )}
      </div>
      <Modal
        isOpen={isDetails}
        onClose={() => {
          setIsDetails(false);
          setSeclectedUser(null);
        }}
      >
        <UserDetailsModal user={seclectedUser} />
      </Modal>
    </div>
  );
}
