
export function Transactions(){
  // Sample data for transactions
  const transactions = [
    { id: "#281209", status: "Successful", transactionId: "TRX123456", refundDate: "Today, 8:45 PM", amount: "₹1125.00" },
    { id: "#281210", status: "Processing", transactionId: "TRX789012", refundDate: "Tomorrow, 10:00 AM", amount: "₹950.50" },
    { id: "#281211", status: "Successful", transactionId: "TRX345678", refundDate: "Yesterday, 3:30 PM", amount: "₹750.00" },
    { id: "#281212", status: "Successful", transactionId: "TRX901234", refundDate: "Today, 11:20 AM", amount: "₹2000.00" },
    { id: "#281213", status: "Processing", transactionId: "TRX567890", refundDate: "Tomorrow, 9:00 AM", amount: "₹1800.00" },
    { id: "#281214", status: "Processing", transactionId: "TRX098765", refundDate: "Yesterday, 2:00 PM", amount: "₹500.00" },
    { id: "#281215", status: "Successful", transactionId: "TRX456789", refundDate: "Today, 10:30 AM", amount: "₹3000.00" },
    { id: "#281216", status: "Processing", transactionId: "TRX987654", refundDate: "Tomorrow, 11:30 AM", amount: "₹1200.00" },
    { id: "#281217", status: "Processing", transactionId: "TRX654321", refundDate: "Yesterday, 4:00 PM", amount: "₹900.00" },
    { id: "#281218", status: "Successful", transactionId: "TRX234567", refundDate: "Today, 9:45 AM", amount: "₹1500.00" }
  ];
  

  return (
    <div className="max-w-full mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Transactions | This Month</h2>
        <div className="flex items-center space-x-4">
          <button className="bg-gray-200 py-2 px-4 rounded-full text-sm">Payouts (22)</button>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full text-sm">
  Refunds (6)
</button>

        </div>
      </div>

      {/* Search and Sort Section */}
      <div className="flex items-center justify-between mb-4">
        <input
          type="text"
          placeholder="Order ID or transactions ID"
          className="w-1/3 p-2 border border-gray-300 rounded"
        />
        <button className="p-2 border border-gray-300 rounded flex items-center">
          <span className="mr-2">Sort</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Transactions Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="w-full text-left text-gray-600 font-medium text-sm border-b">
              <th className="py-2 px-4">Order ID</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Transaction ID</th>
              <th className="py-2 px-4">Refund Date</th>
              <th className="py-2 px-4">Order Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index} className="border-b">
                <td className="py-3 px-4">{transaction.id}</td>
                <td className="py-3 px-4">
                  {transaction.status === "Successful" ? (
                    <span className="text-green-600">{transaction.status}</span>
                  ) : (
                    <span className="text-gray-600">{transaction.status}</span>
                  )}
                </td>
                <td className="py-3 px-4">{transaction.transactionId}</td>
                <td className="py-3 px-4">{transaction.refundDate}</td>
                <td className="py-3 px-4">{transaction.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

