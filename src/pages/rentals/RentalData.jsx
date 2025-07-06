import { useState } from "react";
import {
  Calendar,
  Search,
  MoreHorizontal,
  Clock,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";
import Modal from "../../shared/Modal";
import VehiclesDetails from "./HelperComponent/VehiclesDetails";

const tableData = [
  {
    id: 1,
    customer: { name: "Saydun Tuhin", email: "Info@Gamil.Com" },
    vehicle: "MERCEDES-BENZ CLA",
    dates: { start: "06/06/2025, 08:00 PM", end: "12/15/2025, 10:00 AM" },
    amount: 25,
    status: "Completed",
    daysLeft: "1 Day Left",
    rating: 4.8,
    totalTrips: 50,
    vehicleImage: "/car1.jpg",
    tripLocation: "Banasree",
    dropOffLocation: "Cantonment",
    vehicleType: "Car",
    persons: 4,
    phoneNumber: "1234567890",
    bookingDate: "06 Jun 2025",
    bookingTime: "08:00 PM",
    paymentType: "Cash",
  },
  {
    id: 2,
    customer: { name: "Jubayer Ahmad", email: "Info@Gamil.Com" },
    vehicle: "MERCEDES-BENZ CLA",
    dates: { start: "06/06/2025, 08:00 PM", end: "12/15/2025, 10:00 AM" },
    amount: 25,
    status: "Overdue",
    daysLeft: "1 Overdue",
    rating: 4.8,
    totalTrips: 50,
    vehicleImage: "/car2.jpg",
    tripLocation: "Banasree",
    dropOffLocation: "Cantonment",
    vehicleType: "Car",
    persons: 4,
    phoneNumber: "1234567890",
    bookingDate: "06 Jun 2025",
    bookingTime: "08:00 PM",
    paymentType: "Cash",
  },
  {
    id: 3,
    customer: { name: "Muhammad", email: "Info@Gamil.Com" },
    vehicle: "MERCEDES-BENZ CLA",
    dates: { start: "06/06/2025, 08:00 PM", end: "12/15/2025, 10:00 AM" },
    amount: 25,
    status: "Active",
    daysLeft: "3 Days",
    rating: 4.8,
    totalTrips: 50,
    vehicleImage: "/car1.jpg",
    tripLocation: "Banasree",
    dropOffLocation: "Cantonment",
    vehicleType: "Car",
    persons: 4,
    phoneNumber: "1234567890",
    bookingDate: "06 Jun 2025",
    bookingTime: "08:00 PM",
    paymentType: "Cash",
  },
  {
    id: 4,
    customer: { name: "Abdul Mannan", email: "Info@Gamil.Com" },
    vehicle: "MERCEDES-BENZ CLA",
    dates: { start: "06/06/2025, 08:00 PM", end: "12/15/2025, 10:00 AM" },
    amount: 25,
    status: "Completed",
    daysLeft: "1 Day Left",
    rating: 4.8,
    totalTrips: 50,
    vehicleImage: "/car1.jpg",
    tripLocation: "Banasree",
    dropOffLocation: "Cantonment",
    vehicleType: "Car",
    persons: 4,
    phoneNumber: "1234567890",
    bookingDate: "06 Jun 2025",
    bookingTime: "08:00 PM",
    paymentType: "Cash",
  },
  {
    id: 5,
    customer: { name: "MAHBUBUR RAHMAN", email: "Info@Gamil.Com" },
    vehicle: "MERCEDES-BENZ CLA",
    dates: { start: "06/06/2025, 08:00 PM", end: "12/15/2025, 10:00 AM" },
    amount: 25,
    status: "Completed",
    daysLeft: "1 Day Left",
    rating: 4.8,
    totalTrips: 50,
    vehicleImage: "/car2.jpg",
    tripLocation: "Banasree",
    dropOffLocation: "Cantonment",
    vehicleType: "Car",
    persons: 4,
    phoneNumber: "1234567890",
    bookingDate: "06 Jun 2025",
    bookingTime: "08:00 PM",
    paymentType: "Cash",
  },
];

export default function RentalData() {
  const [searchTerm, setSearchTerm] = useState("");
  const [dateFilter, setDateFilter] = useState({
    startDate: "",
    endDate: "",
  });
  const [activeDropdown, setActiveDropdown] = useState(null); // Track the active dropdown
  const [detailsItem, setDetailsItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (data) => {
    setDetailsItem(data);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setDetailsItem(null);
  };

  const getStatusBadge = (status) => {
    const baseClass =
      "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-white";
    if (status === "Completed") {
      return (
        <span className={baseClass} style={{ backgroundColor: "#99AAFF" }}>
          Completed
        </span>
      );
    } else if (status === "Overdue") {
      return (
        <span className={baseClass} style={{ backgroundColor: "#860000" }}>
          Overdue
        </span>
      );
    } else if (status === "Active") {
      return (
        <span className={baseClass} style={{ backgroundColor: "#00782A" }}>
          Active
        </span>
      );
    }
    return null;
  };

  const getDaysLeftIcon = (status) => {
    if (status === "Overdue") {
      return <AlertTriangle className="w-4 h-4" style={{ color: "#860000" }} />;
    } else if (status === "Active") {
      return <CheckCircle className="w-4 h-4" style={{ color: "#00782A" }} />;
    } else {
      return <Clock className="w-4 h-4" style={{ color: "#C28400" }} />;
    }
  };

  // Parse date string to Date object
  const parseDate = (dateStr) => {
    const [datePart] = dateStr.split(", ");
    const [month, day, year] = datePart.split("/").map(Number);
    return new Date(year, month - 1, day);
  };

  // Date filter handler
  const handleDateFilter = (e) => {
    const { name, value } = e.target;
    setDateFilter((prev) => ({ ...prev, [name]: value }));
  };

  // Toggle dropdown for a specific row
  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id); // Toggle dropdown for the clicked row
  };

  // Filter and sort data
  const filteredAndSortedData = tableData
    .filter((row) => {
      const matchesSearch =
        row.customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.customer.email.toLowerCase().includes(searchTerm.toLowerCase());

      if (!dateFilter.startDate && !dateFilter.endDate) return matchesSearch;

      const rowDate = parseDate(row.dates.start);
      const filterStart = dateFilter.startDate
        ? new Date(dateFilter.startDate)
        : null;
      const filterEnd = dateFilter.endDate
        ? new Date(dateFilter.endDate)
        : null;

      // Normalize dates to compare only date, month, and year
      const normalizeDate = (date) =>
        new Date(date.getFullYear(), date.getMonth(), date.getDate());

      const normalizedRowDate = normalizeDate(rowDate);
      const normalizedFilterStart = filterStart
        ? normalizeDate(filterStart)
        : null;
      const normalizedFilterEnd = filterEnd ? normalizeDate(filterEnd) : null;

      const matchesDate =
        (!normalizedFilterStart ||
          normalizedRowDate >= normalizedFilterStart) &&
        (!normalizedFilterEnd || normalizedRowDate <= normalizedFilterEnd);

      return matchesSearch && matchesDate;
    })
    .sort((a, b) => parseDate(b.dates.start) - parseDate(a.dates.start)); // Sort newest first

  return (
    <div className="w-full mx-auto py-6">
      {/* Header Controls */}
      <div className="flex flex-col sm:flex-row sm:justify-end gap-4 mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative">
            {/* <Calendar className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" /> */}
            <input
              type="date"
              name="startDate"
              value={dateFilter.startDate}
              onChange={handleDateFilter}
              className=" w-full sm:w-48 border border-gray-300 px-3 py-2 rounded"
            />
          </div>
          <div className="relative">
            {/* <Calendar className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" /> */}
            <input
              type="date"
              name="endDate"
              value={dateFilter.endDate}
              onChange={handleDateFilter}
              className=" w-full sm:w-48 border border-gray-300 px-3 py-2 rounded"
            />
          </div>
        </div>
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            placeholder="Type to search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 w-full sm:w-64 border border-gray-300 px-3 py-2 rounded"
          />
        </div>
      </div>

      {/* Table Container with Horizontal Scroll */}
      <div className="overflow-x-auto rounded-lg border border-gray-200 pb-20">
        {filteredAndSortedData.length > 0 ? (
          <table className="w-full min-w-[800px]">
            <thead style={{ backgroundColor: "#B4BBDF" }}>
              <tr>
                {[
                  "Customer",
                  "Vehicles",
                  "Dates",
                  "Amount",
                  "Status",
                  "Days Left",
                  "Actions",
                ].map((heading) => (
                  <th
                    key={heading}
                    className="px-6 py-4 text-left text-sm font-semibold whitespace-nowrap"
                    style={{ color: "#1E1E1E" }}
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredAndSortedData.map((row, index) => (
                <tr
                  key={row.id}
                  style={{
                    backgroundColor: "#DFE1F1",
                  }}
                  className="border-b border-gray-400"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="font-medium" style={{ color: "#1E1E1E" }}>
                        {row.customer.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {row.customer.email}
                      </div>
                    </div>
                  </td>
                  <td
                    className="px-6 py-4 text-sm whitespace-nowrap"
                    style={{ color: "#1E1E1E" }}
                  >
                    {row.vehicle || "N/A"} {/* Handle missing vehicle */}
                  </td>
                  <td
                    className="px-6 py-4 text-sm whitespace-nowrap"
                    style={{ color: "#1E1E1E" }}
                  >
                    <div>{row.dates.start} -</div>
                    <div style={{ color: "#860000" }}>{row.dates.end}</div>
                  </td>
                  <td
                    className="px-6 py-4 text-sm font-medium whitespace-nowrap"
                    style={{ color: "#1E1E1E" }}
                  >
                    ${row.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(row.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      {getDaysLeftIcon(row.status)}
                      <span className="text-sm" style={{ color: "#1E1E1E" }}>
                        {row.daysLeft}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap relative">
                    <button
                      onClick={() => toggleDropdown(row.id)}
                      className="h-8 w-8 p-0 text-gray-600 hover:text-black hover:cursor-pointer"
                    >
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                    {activeDropdown === row.id && (
                      <div className="absolute flex bg-white flex-col items-start p-2 z-10 top-[60%] right-[60%] rounded-xl shadow-lg">
                        <div className="flex flex-col items-start relative">
                          <button
                            onClick={() => {
                              openModal(row);
                            }}
                            className="hover:bg-gray-200 p-1 rounded transition-colors w-full text-start hover:cursor-pointer"
                          >
                            View Details
                          </button>
                          <button className="hover:bg-gray-200 p-1 rounded transition-colors w-full text-start hover:cursor-pointer text-red-500">
                            Delete
                          </button>
                          <div className="w-3 h-3 bg-white absolute -top-[12px] right-0 rotate-45"></div>
                        </div>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-center py-6 text-gray-500">
            No results found. Please adjust your search or date filters.
          </div>
        )}
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <VehiclesDetails data={detailsItem} />
      </Modal>
    </div>
  );
}
