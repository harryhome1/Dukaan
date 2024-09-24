// OverviewComponent.jsx
export function OverviewComponent() {
    return (
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <div>  <h2 className="text-lg font-semibold text-gray-800">Overview</h2> </div>
        <div> 
        <select className="text-gray-600 bg-white border border-gray-300 rounded-md py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>This Month</option>
          <option>Last Month</option>
          <option>This Year</option>
        </select>
        </div>
       
      
      </div>
    );
  }
  