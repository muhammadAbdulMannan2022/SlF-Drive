const TransactionDetails = ({ transaction }) => {
  if (!transaction) return null;

  return (
    <div className="max-w-md md:w-md mx-auto rounded-lg overflow-hidden">
      <div className="text-center mb-6 text-2xl text-gray-700">
        <h1>Transaction Details</h1>
      </div>
      <div className="divide-y divide-gray-300">
        <div className="flex justify-between items-center px-6 py-4">
          <span className="text-gray-600 font-medium">Transaction ID :</span>
          <span className="text-gray-800 font-semibold">
            #{transaction.trId}
          </span>
        </div>

        <div className="flex justify-between items-center px-6 py-4">
          <span className="text-gray-600 font-medium">Date :</span>
          <span className="text-gray-800 font-semibold">
            {transaction.date}
          </span>
        </div>

        <div className="flex justify-between items-center px-6 py-4">
          <span className="text-gray-600 font-medium">User name :</span>
          <span className="text-gray-800 font-semibold">
            {transaction.userName}
          </span>
        </div>

        <div className="flex justify-between items-center px-6 py-4">
          <span className="text-gray-600 font-medium">A/C number :</span>
          <span className="text-gray-800 font-semibold">
            {transaction.accountNumber || "**** **** **** *545"}
          </span>
        </div>

        <div className="flex justify-between items-center px-6 py-4">
          <span className="text-gray-600 font-medium">A/C holder name :</span>
          <span className="text-gray-800 font-semibold">
            {transaction.accountHolder || transaction.userName}
          </span>
        </div>

        <div className="flex justify-between items-center px-6 py-4">
          <span className="text-gray-600 font-medium">
            Transaction amount :
          </span>
          <span className="text-gray-800 font-semibold">
            {transaction.amount}
          </span>
        </div>

        <div className="flex justify-between items-center px-6 py-4">
          <span className="text-gray-600 font-medium">Email :</span>
          <span className="text-gray-800 font-semibold">
            {transaction.email || "Not provided"}
          </span>
        </div>
      </div>

      <div className="flex gap-4 px-6 py-6">
        <button className="flex-1/2 bg-white text-[#071352] border-2 border-[#071352] px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors hover:cursor-pointer">
          Download
        </button>
        <button className="flex-1/2 bg-gradient-to-r from-[#071352] to-[#0023CF] rounded-full text-white font-bold hover:from-[#0023CF] hover:to-[#071352] transition-colors delay-200 hover:cursor-pointer">
          Print
        </button>
      </div>
    </div>
  );
};

export default TransactionDetails;
