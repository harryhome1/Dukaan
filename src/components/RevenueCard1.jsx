export function RevenueCard1({
    title,
    orderCount,
    amount,
    nextPaymentDate,
  }) {
    return (
      <div className="bg-blue-700 rounded shadow-md p-5 hover:bg-blue-900"> {/* Keep main card blue */}
  
        {/* Title and Icon Row */}
        <div className="text-white flex justify-between items-center">
          <div className="flex">
            <div className="font-semibold text-lg">{title}</div>
          </div>
          <div className="ml-2 flex justify-center flex-col">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
              />
            </svg>
          </div>
        </div>
  
        {/* Amount and Order Count Row */}
        <div className="flex justify-between mt-2">
          <div className="text-white font-semibold text-3xl">₹ {amount}</div>
          {orderCount ? (
            <div className="flex items-center">
              <div className="text-white underline">{orderCount} Orders</div>
              <svg className="h-4 w-4 text-white ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          ) : null}
        </div>
  
        {/* Next Payment Date - Dark Blue Part */}
        <div className="bg-blue-900 text-white text-sm mt-4 p-3 rounded-lg ">
          <div className="flex justify-between">
            <span>Next Payment Date:</span>
            <span className="font-semibold">{nextPaymentDate}</span>
          </div>
        </div>
      </div>
    );
  }
