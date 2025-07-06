"use client";

import { useState } from "react";
import Modal from "../../shared/Modal";
import ReportDetailsModal from "./ReportsModle";

const Reports = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModleOpen, setIsModleOpen] = useState(false);
  const [details, setDetails] = useState(null);

  // Sample data - replace with your actual data
  const reportsData = [
    {
      id: 1,
      username: "Ayaan",
      dateOfOccurrence: "02 Jul 2025",
      description: "Car parked illegally on sidewalk.",
      images: ["/car3.jpg"],
      location: {
        latitude: 23.8103,
        longitude: 90.4125,
        name: "Dhaka, Bangladesh",
      },
    },
    {
      id: 2,
      username: "Sadia",
      dateOfOccurrence: "01 Jul 2025",
      description: "Minor collision at traffic signal.",
      images: ["/car4.jpg"],
      location: {
        latitude: 24.9045,
        longitude: 91.8611,
        name: "Sylhet, Bangladesh",
      },
    },
    {
      id: 3,
      username: "Rahim",
      dateOfOccurrence: "30 Jun 2025",
      description: "Driver speeding in school zone.",
      images: ["/car3.jpg", "/car4.jpg"],
      location: {
        latitude: 22.3569,
        longitude: 91.7832,
        name: "Chattogram, Bangladesh",
      },
    },
    {
      id: 4,
      username: "Fariha",
      dateOfOccurrence: "28 Jun 2025",
      description: "Hit-and-run incident reported.",
      images: ["/car3.jpg"],
      location: {
        latitude: 25.7439,
        longitude: 89.2752,
        name: "Rangpur, Bangladesh",
      },
    },
    {
      id: 5,
      username: "Tariq",
      dateOfOccurrence: "03 Jul 2025",
      description: "Obstructed road due to vehicle breakdown.",
      images: ["/car4.jpg"],
      location: {
        latitude: 21.4272,
        longitude: 92.0058,
        name: "Cox's Bazar, Bangladesh",
      },
    },
    {
      id: 6,
      username: "Nadia",
      dateOfOccurrence: "05 Jul 2025",
      description: "Unauthorized street racing.",
      images: ["/car4.jpg"],
      location: {
        latitude: 23.0,
        longitude: 89.0,
        name: "Jessore, Bangladesh",
      },
    },
    {
      id: 7,
      username: "Imran",
      dateOfOccurrence: "29 Jun 2025",
      description: "Vehicle found abandoned for days.",
      images: ["/car3.jpg"],
      location: {
        latitude: 24.0,
        longitude: 90.0,
        name: "Mymensingh, Bangladesh",
      },
    },
    {
      id: 8,
      username: "Mira",
      dateOfOccurrence: "04 Jul 2025",
      description: "Blocked emergency vehicle route.",
      images: ["/car3.jpg", "/car4.jpg"],
      location: {
        latitude: 22.8456,
        longitude: 89.5403,
        name: "Khulna, Bangladesh",
      },
    },
    {
      id: 9,
      username: "Jamil",
      dateOfOccurrence: "27 Jun 2025",
      description: "Aggressive driving reported.",
      images: [],
      location: {
        latitude: 23.901,
        longitude: 90.377,
        name: "Uttara, Dhaka",
      },
    },
    {
      id: 10,
      username: "Tahmina",
      dateOfOccurrence: "06 Jul 2025",
      description: "Vehicle obstructing pedestrian crossing.",
      images: ["/car4.jpg"],
      location: {
        latitude: 24.3696,
        longitude: 88.6042,
        name: "Rajshahi, Bangladesh",
      },
    },
    {
      id: 11,
      username: "Adnan",
      dateOfOccurrence: "02 Jul 2025",
      description: "Illegal parking in fire zone.",
      images: ["/car3.jpg"],
      location: {
        latitude: 23.75,
        longitude: 90.4,
        name: "Mirpur, Dhaka",
      },
    },
    {
      id: 12,
      username: "Rina",
      dateOfOccurrence: "01 Jul 2025",
      description: "Traffic jam due to reckless lane change.",
      images: ["/car4.jpg"],
      location: {
        latitude: 22.7,
        longitude: 90.37,
        name: "Barisal, Bangladesh",
      },
    },
    {
      id: 13,
      username: "Shuvo",
      dateOfOccurrence: "30 Jun 2025",
      description: "Suspected stolen car spotted.",
      images: ["/car3.jpg", "/car4.jpg"],
      location: {
        latitude: 25.0,
        longitude: 91.0,
        name: "Sunamganj, Bangladesh",
      },
    },
  ];

  // Filter data based on search term
  const filteredData = reportsData.filter((report) =>
    report.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = () => {
    console.log("Search clicked for:", searchTerm);
  };

  const handleView = (report) => {
    if (!report) return;
    setDetails(report);
    setIsModleOpen(true);
    console.log("View clicked for:", report);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen pt-5">
      <div className="w-full px-5 md:px-20 mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h1 className="text-2xl font-bold text-gray-900">List Of Reports</h1>

          {/* Search Bar */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className="relative flex-1 sm:flex-none">
              <input
                type="text"
                placeholder="User Name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full sm:w-64 px-4 py-2 border bg-white border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
            </div>
            <button
              onClick={handleSearch}
              className="bg-[#0B2088] text-white p-2 rounded-full transition-colors flex-shrink-0"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Table Container with Horizontal Scroll */}
        <div className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              {/* Table Header */}
              <thead style={{ backgroundColor: "#B4BBDF" }}>
                <tr>
                  <th className="text-left py-4 px-6 font-semibold text-gray-800 text-sm whitespace-nowrap">
                    #SI
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-800 text-sm whitespace-nowrap">
                    Username
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-800 text-sm whitespace-nowrap">
                    Date of occurance
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-800 text-sm whitespace-nowrap">
                    Details
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {filteredData.map((report, index) => (
                  <tr key={report.id} className={`transition-colors`}>
                    <td className="py-4 px-6 text-gray-900 text-sm whitespace-nowrap">
                      1
                    </td>
                    <td className="py-4 px-6 text-gray-900 text-sm whitespace-nowrap">
                      {report.username}
                    </td>
                    <td className="py-4 px-6 text-gray-900 text-sm whitespace-nowrap">
                      {report.dateOfOccurrence}
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      <button
                        onClick={() => handleView(report)}
                        className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors hover:cursor-pointer"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* No Results Message */}
          {filteredData.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <p>No reports found matching your search.</p>
            </div>
          )}

          {/* Mobile Scroll Indicator */}
          <div className="sm:hidden bg-gray-50 px-4 py-2 text-center">
            <p className="text-xs text-gray-500">
              ← Swipe left/right to see more columns →
            </p>
          </div>
        </div>
        <Modal
          isOpen={isModleOpen}
          onClose={() => {
            setDetails(null);
            setIsModleOpen(false);
          }}
        >
          <ReportDetailsModal data={details} />
        </Modal>
      </div>
    </div>
  );
};

export default Reports;
