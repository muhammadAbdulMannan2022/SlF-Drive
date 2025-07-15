import * as React from "react";
import { IoSearch, IoEllipsisVertical } from "react-icons/io5";
import { useNavigate } from "react-router";

// Sample driver data
const drivers = [
  {
    id: 1,
    name: "Jubayer Ahmad",
    email: "ahmad@jubayer@gmail.com",
    phone: "12345678",
    joinDate: "16 Jun 2025",
    status: "active",
    submittedDate: "2025-01-20",
  },
  {
    id: 2,
    name: "Enrique",
    email: "abc@gmail.com",
    phone: "87654321",
    joinDate: "15 Jun 2025",
    status: "active",
  },
  {
    id: 3,
    name: "John",
    email: "john@gmail.com",
    phone: "11223344",
    joinDate: "14 Jun 2025",
    status: "pending",
    submittedDate: "2025-01-19",
  },
  {
    id: 4,
    name: "Sarah",
    email: "sarah@gmail.com",
    phone: "44332211",
    joinDate: "13 Jun 2025",
    status: "active",
  },
];

export default function DriversPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = React.useState("");
  const [activeTab, setActiveTab] = React.useState("list");
  const [dropdownOpen, setDropdownOpen] = React.useState(null);

  const activeDrivers = drivers.filter((driver) => driver.status === "active");
  const pendingDrivers = drivers.filter(
    (driver) => driver.status === "pending"
  );

  const getFilteredDrivers = (driverList) => {
    if (searchTerm.trim() === "") {
      return driverList;
    }
    return driverList.filter(
      (driver) =>
        driver.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        driver.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        driver.phone.includes(searchTerm)
    );
  };

  const handleSearch = () => {
    console.log("Search triggered for:", searchTerm);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleAction = (action, driver) => {
    switch (action) {
      case "view":
        navigate(`/dashboard/drivers/${driver.id}`);
        break;
      case "approve":
        console.log(`Approve driver ${driver.id}: ${driver.name}`);
        break;
      case "deny":
        console.log(`Deny driver ${driver.id}: ${driver.name}`);
        break;
      case "delete":
        console.log(`Delete driver ${driver.id}: ${driver.name}`);
        break;
      case "hold":
        console.log(`Hold driver ${driver.id}: ${driver.name}`);
        break;
    }
    setDropdownOpen(null);
  };

  const toggleDropdown = (driverId) => {
    setDropdownOpen(dropdownOpen === driverId ? null : driverId);
  };

  return (
    <div className="px-5 md:px-20 py-5 min-h-screen">
      <div className="">
        {/* Header with Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-4 sm:py-6 gap-4">
          <div className="grid w-full sm:w-auto grid-cols-2 rounded-md">
            <button
              className={`px-4 py-2 text-sm font-medium hover:cursor-pointer ${
                activeTab === "list"
                  ? "bg-[#0b2080] text-white"
                  : "bg-white text-gray-700"
              } rounded-l-md focus:outline-none`}
              onClick={() => setActiveTab("list")}
            >
              Driver List
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium hover:cursor-pointer ${
                activeTab === "requests"
                  ? "bg-[#0B2080] text-white"
                  : "bg-white text-gray-700"
              } rounded-r-md focus:outline-none`}
              onClick={() => setActiveTab("requests")}
            >
              Driver Request
            </button>
          </div>
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
              <IoSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
            <button
              onClick={handleSearch}
              className="bg-[#0B2088] text-white p-3 rounded-full flex items-center"
            >
              <IoSearch className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Driver List Tab */}
        {activeTab === "list" && (
          <div className="overflow-x-auto pb-40">
            <table className="min-w-full divide-y divide-gray-200">
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
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {getFilteredDrivers(activeDrivers).map((driver, index) => (
                  <tr key={driver.id}>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">
                      {driver.id}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      {driver.name}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {driver.email}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {driver.phone}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {driver.joinDate}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <div className="relative">
                        <button
                          onClick={() => toggleDropdown(driver.id)}
                          className="p-2 hover:bg-gray-100 rounded-full hover:cursor-pointer"
                        >
                          <IoEllipsisVertical className="h-4 w-4 text-gray-600" />
                        </button>
                        {dropdownOpen === driver.id && (
                          <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg">
                            <button
                              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:cursor-pointer"
                              onClick={() => handleAction("view", driver)}
                            >
                              View Details
                            </button>
                            <button
                              className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 hover:cursor-pointer"
                              onClick={() => handleAction("delete", driver)}
                            >
                              Delete
                            </button>
                            <button
                              className="block w-full text-left px-4 py-2 text-sm text-orange-600 hover:bg-gray-100 hover:cursor-pointer"
                              onClick={() => handleAction("hold", driver)}
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
        )}

        {/* Driver Request Tab */}
        {activeTab === "requests" && (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-[#B4BBDF]">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#1E1E1E] min-w-[150px]">
                    Driver Name
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#1E1E1E] min-w-[200px]">
                    Driver Email
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#1E1E1E] min-w-[120px]">
                    Submitted
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-[#1E1E1E] min-w-[150px]">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {getFilteredDrivers(pendingDrivers).map((driver, index) => (
                  <tr key={driver.id}>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      {driver.name}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {driver.email}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {driver.submittedDate}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => handleAction("approve", driver)}
                          className="bg-[#0B2088] text-white px-4 py-1 rounded-md hover:cursor-pointer"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleAction("deny", driver)}
                          className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-1 rounded-md hover:cursor-pointer"
                        >
                          Deny
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Empty state */}
        {((activeTab === "list" &&
          getFilteredDrivers(activeDrivers).length === 0) ||
          (activeTab === "requests" &&
            getFilteredDrivers(pendingDrivers).length === 0)) && (
          <div className="text-center py-12">
            <p className="text-gray-500">
              No drivers found matching your search.
            </p>
            <button
              className="mt-4 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
              onClick={() => setSearchTerm("")}
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
