import { useState } from "react";
import { Search, Plus, MoreVertical, Edit, Trash2, Pause } from "lucide-react";
import Modal from "../../shared/Modal";
import AddNewCarForm from "./helpersComponent/AddNewCarForm";

const Vehicles = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [dropdownOpenId, setDropdownOpenId] = useState(null); // NEW STATE
  const [vehicles, setVehicles] = useState([
    {
      id: 1,
      rentalId: "AJ0125",
      name: "BMW 7 Series",
      seats: "6 Sit",
      charge: "$300",
      status: "active",
    },
    {
      id: 2,
      rentalId: "AJ0126",
      name: "BMW 7 Series",
      seats: "6 Sit",
      charge: "$300",
      status: "active",
    },
    {
      id: 3,
      rentalId: "AJ0127",
      name: "BMW 7 Series",
      seats: "6 Sit",
      charge: "$300",
      status: "active",
    },
    {
      id: 4,
      rentalId: "AJ0128",
      name: "BMW 7 Series",
      seats: "6 Sit",
      charge: "$300",
      status: "active",
    },
    {
      id: 5,
      rentalId: "AJ0129",
      name: "BMW 7 Series",
      seats: "6 Sit",
      charge: "$300",
      status: "active",
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleDropdown = (id) => {
    setDropdownOpenId(dropdownOpenId === id ? null : id);
  };

  const handleEdit = (vehicle) => {
    console.log("Edit vehicle:", vehicle);
    setDropdownOpenId(null);
  };

  const handleDelete = (vehicleId) => {
    setVehicles(vehicles.filter((vehicle) => vehicle.id !== vehicleId));
    setDropdownOpenId(null);
  };

  const handleHold = (vehicleId) => {
    setVehicles(
      vehicles.map((vehicle) =>
        vehicle.id === vehicleId
          ? {
              ...vehicle,
              status: vehicle.status === "active" ? "hold" : "active",
            }
          : vehicle
      )
    );
    setDropdownOpenId(null);
  };

  const handleAddNewCar = () => {
    setIsModalOpen(true);
    console.log("Add new car clicked");
  };

  const filteredVehicles = vehicles.filter(
    (vehicle) =>
      vehicle.rentalId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vehicle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vehicle.seats.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vehicle.charge.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#e7e9f5] p-6 px-5 md:px-20">
      <div className="mx-auto">
        {/* Header */}
        <div className="flex items-center flex-col md:flex-row justify-between mb-6">
          <h1 className="md:text-2xl text-4xl font-bold text-gray-900">
            All Vehicles
          </h1>
          <div className="flex items-center flex-col md:flex-row mt-5 md:mt-0 gap-4 w-full md:w-fit">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Type to search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-3 py-2 border border-gray-300 rounded-md w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              onClick={handleAddNewCar}
              className="flex w-full justify-center items-center bg-gradient-to-r from-[#071352] to-[#0023CF] hover:from-[#0023CF] hover:to-[#071352] transition-colors text-white px-4 py-2 rounded-md hover:cursor-pointer"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add New Car
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="rounded-lg overflow-hidden">
          <div className="overflow-x-auto pb-30">
            <table className="w-full">
              <thead className="bg-[#B4BBDF] border-b">
                <tr>
                  <th className="text-left py-4 px-6 font-semibold text-[#1E1E1E]">
                    Rental ID
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-[#1E1E1E]">
                    Vehicles Name
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-[#1E1E1E]">
                    No. of Sit
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-[#1E1E1E]">
                    Per Day Charge
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-[#1E1E1E]">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredVehicles.map((vehicle) => (
                  <tr key={vehicle.id} className="bg-[#DBDEEF] relative">
                    <td className="py-4 px-6 text-gray-900">
                      {vehicle.rentalId}
                    </td>
                    <td className="py-4 px-6 text-gray-900">{vehicle.name}</td>
                    <td className="py-4 px-6 text-gray-900">{vehicle.seats}</td>
                    <td className="py-4 px-6 text-gray-900">
                      {vehicle.charge}
                    </td>
                    <td className="py-4 px-6 relative">
                      <button
                        onClick={() => toggleDropdown(vehicle.id)}
                        className="p-2 hover:bg-gray-200 rounded hover:cursor-pointer"
                      >
                        <MoreVertical className="h-4 w-4" />
                      </button>

                      {dropdownOpenId === vehicle.id && (
                        <div className="absolute">
                          <div className="relative right-[80%] mt-2 w-40 bg-white border border-gray-200 shadow-lg rounded-md z-10">
                            <button
                              onClick={() => handleEdit(vehicle)}
                              className="flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100 hover:cursor-pointer "
                            >
                              <Edit className="w-4 h-4 mr-2" /> Edit
                            </button>
                            <button
                              onClick={() => handleHold(vehicle.id)}
                              className="flex items-center w-full px-4 py-2 text-sm text-orange-600 hover:bg-gray-100 hover:cursor-pointer"
                            >
                              <Pause className="w-4 h-4 mr-2" />
                              {vehicle.status === "active"
                                ? "Hold"
                                : "Activate"}
                            </button>
                            <button
                              onClick={() => handleDelete(vehicle.id)}
                              className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100 hover:cursor-pointer"
                            >
                              <Trash2 className="w-4 h-4 mr-2" /> Delete
                            </button>
                            <div className="h-3 w-3 absolute -top-[6px] right-3 rotate-45 bg-white"></div>
                          </div>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredVehicles.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No vehicles found matching your search.
            </div>
          )}
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <AddNewCarForm setIsModalOpen={setIsModalOpen} />
      </Modal>
    </div>
  );
};

export default Vehicles;
