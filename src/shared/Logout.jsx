import React from "react";

export default function LogoutModal({ setIsLogOutActive }) {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold mt-10">
        Sure! Are want to log out
      </h1>
      <div className="flex gap-4 px-6 py-6">
        <button
          onClick={() => setIsLogOutActive(false)}
          className="flex-1/2 bg-gradient-to-r from-[#071352] to-[#0023CF] rounded-xl text-white font-bold hover:from-[#0023CF] hover:to-[#071352] transition-colors delay-200 hover:cursor-pointer"
        >
          Back
        </button>
        <button
          onClick={() => {
            alert("downloaded");
            setIsLogOutActive(false);
          }}
          className="flex-1/2 bg-red-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-800 transition-colors hover:cursor-pointer"
        >
          Download
        </button>
      </div>
    </div>
  );
}
