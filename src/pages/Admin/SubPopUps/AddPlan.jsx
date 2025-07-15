import React, { useState } from "react";

function AddPlan() {
  const [planName, setPlanName] = useState("Basic");
  const [price, setPrice] = useState("199");
  const [discount, setDiscount] = useState("50");
  const [additionalCharges, setAdditionalCharges] = useState([
    "Up To 2,000 AI Voice Calls/Month",
    "Priority Support",
    "Enter Here",
  ]);

  const handlePlanNameChange = (e) => setPlanName(e.target.value);
  const handlePriceChange = (e) => setPrice(e.target.value);
  const handleDiscountChange = (e) => setDiscount(e.target.value);
  const handleAdditionalChange = (index, value) => {
    const newCharges = [...additionalCharges];
    newCharges[index] = value;
    setAdditionalCharges(newCharges);
  };
  const addFeature = () => setAdditionalCharges([...additionalCharges, ""]);
  const removeFeature = (index) => {
    const newCharges = additionalCharges.filter((_, i) => i !== index);
    setAdditionalCharges(newCharges);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Create New Plan</h2>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Plan Name</label>
        <input
          type="text"
          value={planName}
          onChange={handlePlanNameChange}
          className="w-full p-2 border rounded-lg bg-[#DBDEEF] text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4 flex space-x-4">
        <div className="w-1/2">
          <label className="block text-gray-700 mb-2">Price</label>
          <input
            type="text"
            value={price}
            onChange={handlePriceChange}
            className="w-full p-2 border rounded-lg bg-[#DBDEEF] text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="w-1/2">
          <label className="block text-gray-700 mb-2">Discount(%)</label>
          <input
            type="text"
            value={discount}
            onChange={handleDiscountChange}
            className="w-full p-2 border rounded-lg bg-[#DBDEEF] text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="mb-4">
        <div className="flex justify-between mb-2">
          <h3 className="text-gray-700">Additional Charges</h3>
          <button
            type="button"
            onClick={addFeature}
            className="text-blue-500 hover:text-blue-700 hover:cursor-pointer"
          >
            + Add Feature
          </button>
        </div>
        {additionalCharges.map((charge, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="text"
              value={charge}
              onChange={(e) => handleAdditionalChange(index, e.target.value)}
              className="w-full p-2 border rounded-lg bg-[#DBDEEF] text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={() => removeFeature(index)}
              className="ml-2 text-gray-500 hover:text-red-500 hover:cursor-pointer"
            >
              ×
            </button>
          </div>
        ))}
      </div>
      <div className="w-full flex items-center justify-center">
        <button className="bg-gradient-to-br hover:cursor-pointer from-[#071352] to-[#0023CF] text-white px-4 py-2 rounded-lg">
          Create plan
        </button>
      </div>
    </div>
  );
}

export default AddPlan;
