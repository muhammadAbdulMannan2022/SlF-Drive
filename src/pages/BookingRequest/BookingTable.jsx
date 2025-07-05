const ReusableBookingTable = ({ data, onApprove, onDeny }) => {
  return (
    <div className="overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-[#B4BBDF]">
            <tr>
              <th className="text-left py-4 px-4 font-semibold text-[#1E1E1E] text-sm">
                Customer
              </th>
              <th className="text-left py-4 px-4 font-semibold text-[#1E1E1E] text-sm">
                Vehicles
              </th>
              <th className="text-left py-4 px-4 font-semibold text-[#1E1E1E] text-sm">
                Dates
              </th>
              <th className="text-left py-4 px-4 font-semibold text-[#1E1E1E] text-sm">
                Approved By
              </th>
              <th className="text-left py-4 px-4 font-semibold text-[#1E1E1E] text-sm">
                Amount
              </th>
              <th className="text-left py-4 px-4 font-semibold text-[#1E1E1E] text-sm">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((booking, index) => (
              <tr
                key={booking.id || index}
                className={"border-b border-gray-300"}
              >
                <td className="py-4 px-4">
                  <div>
                    <div className="font-semibold text-gray-700 text-sm">
                      {booking.customer.name}
                    </div>
                    <div className="text-gray-600 text-xs">
                      {booking.customer.contact}
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div>
                    <div className="font-medium text-gray-900 text-sm">
                      {booking.vehicle.model}
                    </div>
                    <div className="text-gray-600 text-xs">
                      {booking.vehicle.type}
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="text-gray-900 text-sm flex flex-col">
                    <span>{booking.dates.start}</span>{" "}
                    <span>{booking.dates.end}</span>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div>
                    <div className="font-medium text-gray-900 text-sm">
                      {booking.approvedBy.name}
                    </div>
                    <div className="text-gray-600 text-xs">
                      {booking.approvedBy.role}
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <span className="font-medium text-gray-900 text-sm">
                    {booking.amount}
                  </span>
                </td>
                <td className="py-4 px-4">
                  {booking.status === "confirmed" ? (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Confirmed
                    </span>
                  ) : (
                    <div className="flex gap-2">
                      <button
                        onClick={() => onApprove(booking)}
                        className="px-3 py-1 bg-[#0B2088] text-white text-xs font-medium rounded hover:bg-[#0b2088ce] transition-colors hover:cursor-pointer"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => onDeny(booking)}
                        className="px-3 py-1 bg-gray-400 text-white text-xs font-medium rounded hover:bg-gray-500 transition-colors hover:cursor-pointer"
                      >
                        Deny
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {data.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No booking requests found.
        </div>
      )}
    </div>
  );
};

export default ReusableBookingTable;
