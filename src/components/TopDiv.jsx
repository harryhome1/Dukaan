// export function TopDiv  ({
//   }) {
//     return (
//         <>
//    <div className="bg-white flex justify-between">

//   {/* <div className=" flex">

//     <div>Payout</div>
//     <div className='ml-2 flex justify-center flex-col'>
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
//                 <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
//                 </svg>
//      </div>
//      <div className="bg-grey-500">How it works</div>
     

//   </div> */}

// <div className="flex items-center space-x-4 p-4">
//   <div className="text-lg font-bold">Payout</div>
//   <div className="flex justify-center flex-col">
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       strokeWidth="1.5"
//       stroke="currentColor"
//       className="w-6 h-6"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
//       />
//     </svg>
//   </div>
//   <div className=" px-2 py-1 rounded">How it works</div>
// </div>
// <div class="relative">
//   <input 
//     type="text" 
//     class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
//     placeholder="Search features, tutorials, etc."
//   />
//   <div class="absolute left-3 top-2 text-gray-400">
//     <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35m1.6-5.65A7 7 0 1112 5a7 7 0 016.25 10.65z" />
//     </svg>
//   </div>
// </div>

//   <div className="bg-green-500">3</div>

//   </div>

//         </>
     
//     );
//   };


export function TopDiv() {
    return (
      <>
        <div className="bg-white flex justify-between items-center p-4 border-b border-gray-200">
          {/* Left side: Payout and How it Works */}
          <div className="flex items-center space-x-4">
            <div className="text-lg font-bold">Payouts</div>
            <div className="flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                />
              </svg>
            </div>
            <div className="text-sm text-blue-500 hover:underline cursor-pointer">
              How it works
            </div>
          </div>
  
          {/* Middle: Search Box */}
<div className="relative flex-1 max-w-xl">
  <input
    type="text"
    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    placeholder="Search features, tutorials, etc."
  />
  <div className="absolute left-3 top-2 text-gray-400">
    <svg
      className="w-5 h-5"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 21l-4.35-4.35m1.6-5.65A7 7 0 1112 5a7 7 0 016.25 10.65z"
      />
    </svg>
  </div>
</div>

  
          {/* Right side: Notification Icon */}
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 22.75c1.793 0 3.25-1.457 3.25-3.25h-6.5c0 1.793 1.457 3.25 3.25 3.25zM5.25 16h13.5M5.25 16v-5.25a6.75 6.75 0 1 1 13.5 0V16M5.25 16l-.867 1.734a1.5 1.5 0 0 0 1.343 2.266h13.548a1.5 1.5 0 0 0 1.344-2.266L18.75 16"
              />
            </svg>
            <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              3
            </div>
          </div>
        </div>
      </>
    );
  }
  