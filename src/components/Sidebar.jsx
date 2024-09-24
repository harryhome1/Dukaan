export function Sidebar() {
    return (
      <div className="bg-[#1E2A47] text-white h-screen w-60 p-3 relative">
        {/* Logo and Store Link */}
        <div className="flex items-center space-x-2 mb-5">
          {/* SVG Logo */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className="w-10 h-10"
            fill="currentColor"
          >
            {/* Placeholder SVG */}
            <circle cx="50" cy="50" r="45" stroke="white" strokeWidth="5" fill="none" />
            <text x="50%" y="50%" textAnchor="middle" fill="white" dy=".3em" fontSize="24">
              D
            </text>
          </svg>
  
          <div>
            <h2 className="font-semibold text-base">Dukaan</h2> {/* Store name */}
            <a href="#visit-store" className="text-xs text-blue-300 hover:underline">
              Visit Store
            </a>
          </div>
        </div>
  
        {/* Menu Items */}
        <nav className="space-y-1">
          <a href="#home" className="flex items-center space-x-3 hover:bg-[#15233A] p-2 rounded text-sm">
            {/* Home SVG Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m0 0v7a1 1 0 01-1 1h-3m-6 0h6" />
            </svg>
            <span>Home</span>
          </a>
          <a href="#orders" className="flex items-center space-x-3 hover:bg-[#15233A] p-2 rounded text-sm">
            {/* Orders SVG Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 14h6m2 0a2 2 0 002-2v-3a2 2 0 00-2-2H7a2 2 0 00-2 2v3a2 2 0 002 2m12 0v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"
              />
            </svg>
            <span>Orders</span>
          </a>
          <a href="#products" className="flex items-center space-x-3 hover:bg-[#15233A] p-2 rounded text-sm">
            {/* Products SVG Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 10l1.89-5.66A2 2 0 016.74 3h10.52a2 2 0 011.85 1.34L21 10M3 10h18m-18 0l.621 6.21A2 2 0 005.61 18h12.78a2 2 0 001.99-1.79L21 10M3 10h18M5 22h14M9 14h6"
              />
            </svg>
            <span>Products</span>
          </a>
          <a href="#delivery" className="flex items-center space-x-3 hover:bg-[#15233A] p-2 rounded text-sm">
            {/* Delivery SVG Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 19h6a2 2 0 002-2v-7a2 2 0 00-2-2H9a2 2 0 00-2 2v7a2 2 0 002 2zm0 0v2m6-2v2m-8 0h10a2 2 0 002-2v-5a2 2 0 00-2-2h-2m-10 0H5"
              />
            </svg>
            <span>Delivery</span>
          </a>
          <a href="#marketing" className="flex items-center space-x-3 hover:bg-[#15233A] p-2 rounded text-sm">
            {/* Marketing SVG Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 11.5V4.59c0-.59.54-1.09 1.16-.97l6.35 1.1a1 1 0 01.79.97v7.68c0 .45-.29.84-.7.97l-6.35 1.76c-.62.17-1.26-.15-1.3-.78v-4.37m0 0v-.01m0 0H5.5a.5.5 0 01-.5-.5v-2.5a.5.5 0 01.5-.5h4.5z"
              />
            </svg>
            <span>Marketing</span>
          </a>
          <a href="#analytics" className="flex items-center space-x-3 hover:bg-[#15233A] p-2 rounded text-sm">
            {/* Analytics SVG Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v13m-7-6v6m14-10v10m1-14H3a1 1 0 00-1 1v16a1 1 0 001 1h18a1 1 0 001-1V6a1 1 0 00-1-1zm-7-4v4m4-4v4m-8-4v4"
              />
            </svg>
            <span>Analytics</span>
          </a>
          <a href="#payouts" className="flex items-center space-x-3 hover:bg-[#15233A] p-2 rounded text-sm bg-[#15233A]">
            {/* Payouts SVG Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 10h18M12 4v4M9 10h6m-9 5l3 3m9-3l-3 3"
              />
            </svg>
            <span>Payouts</span>
          </a>
          <a href="#discounts" className="flex items-center space-x-3 hover:bg-[#15233A] p-2 rounded text-sm">
            {/* Discounts SVG Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 12v9m0-9V3M3 9h18"
              />
            </svg>
            <span>Discounts</span>
          </a>
        </nav>

          {/* Available Credits Section */}
      <div className="absolute bottom-4 left-3 right-3 bg-[#15233A] p-3 rounded-lg flex items-center justify-between">
        <div className="flex items-center">
          {/* Wallet SVG Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 7.5h16.5m-16.5 0a3 3 0 00-3 3v5.25a3 3 0 003 3h16.5a3 3 0 003-3V10.5a3 3 0 00-3-3m-16.5 0V6a3 3 0 013-3h10.5a3 3 0 013 3v1.5M18 15.75h.008v.008H18v-.008z"
            />
          </svg>
          <div className="text-xs">Available Credits</div>
        </div>
        <span className="font-semibold text-sm">₹884.68</span>
      </div>
      </div>
    );
  }
  