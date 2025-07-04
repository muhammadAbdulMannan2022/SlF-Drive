import React, { useState } from "react";
import Modal from "../shared/Modal";
import TransactionDetails from "./TransactionDetails"; // Import the dynamic details component

const TransactionTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const transactions = [
    {
      trId: "12345678",
      userName: "Enrique",
      userType: "User",
      amount: "$250",
      date: "16 Jun 2025",
      accountNumber: "**** **** **** 2545",
      accountHolder: "Enrique",
      email: "enrique@example.com",
    },
    {
      trId: "87654321",
      userName: "Alice",
      userType: "Company",
      amount: "$400",
      date: "15 Jun 2025",
      accountNumber: "**** **** **** 1876",
      accountHolder: "Alice",
      email: "alice@example.com",
    },
    {
      trId: "87654321",
      userName: "Alice",
      userType: "Company",
      amount: "$400",
      date: "15 Jun 2025",
      accountNumber: "**** **** **** 1876",
      accountHolder: "Alice",
      email: "alice@example.com",
    },
    {
      trId: "87654321",
      userName: "Alice",
      userType: "Company",
      amount: "$400",
      date: "15 Jun 2025",
      accountNumber: "**** **** **** 1876",
      accountHolder: "Alice",
      email: "alice@example.com",
    },
    // Add more if needed
  ];

  const handleViewClick = (transaction) => {
    setSelectedTransaction(transaction);
    setIsModalOpen(true);
  };

  return (
    <div className="container mx-auto py-4 bg-[#DBDEEF] mt-10 rounded-xl">
      <h2 className="text-2xl px-4 font-bold mb-4 text-[#121212] bg-[#DBDEEF] p-2 rounded-t-lg">
        Recent Transactions
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full bg-[#DBDEEF] text-[#121212]">
          <thead>
            <tr className="bg-[#B4BBDF]">
              <th className="p-2">#TrID</th>
              <th className="p-2">User Name</th>
              <th className="p-2">User Type</th>
              <th className="p-2">Amount</th>
              <th className="p-2">Date</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index} className="hover:bg-[#cdd0e0] text-center">
                <td className="p-2">{transaction.trId}</td>
                <td className="p-2">{transaction.userName}</td>
                <td className="p-2">{transaction.userType}</td>
                <td className="p-2">{transaction.amount}</td>
                <td className="p-2">{transaction.date}</td>
                <td className="p-2">
                  <button
                    onClick={() => handleViewClick(transaction)}
                    className="text-[#0B2088] hover:underline"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal rendering the TransactionDetails component dynamically */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <TransactionDetails transaction={selectedTransaction} />
      </Modal>
    </div>
  );
};

export default TransactionTable;
