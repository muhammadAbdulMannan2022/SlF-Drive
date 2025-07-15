import React, { useState } from "react";

function AddContractualCustomers() {
  const [chargingPercentage, setChargingPercentage] = useState("");

  const handleInputChange = (e) => {
    setChargingPercentage(e.target.value);
  };

  return (
    <div className="p-4 flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-xl font-bold mb-4 text-[#1E1E1E]">
          Add Contractual Customers
        </h2>
        <div className="mb-4 flex flex-col items-center justify-start">
          <label className=" text-start w-full text-[#1E1E1E] mb-2">
            Charging Percentage
          </label>
          <input
            type="number"
            value={chargingPercentage}
            onChange={handleInputChange}
            placeholder="Enter here"
            className="w-full p-2 border rounded-lg bg-[#DBDEEF] text-[#1E1E1E] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button className="bg-gradient-to-br from-[#071352] to-[#0023CF] text-white px-4 py-2 rounded-lg">
          Submit
        </button>
      </div>
    </div>
  );
}

export default AddContractualCustomers;
