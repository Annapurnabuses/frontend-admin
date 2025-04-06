import React from "react";

const BookingsTable = ({ data }) => {
  // Format date to display in readable format
  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Status badge style
  const getStatusStyle = (status) => {
    switch (status) {
      case "Approved":
        return "bg-green-100 text-green-800";
      case "Rejected":
        return "bg-red-100 text-red-800";
      case "Pending":
      default:
        return "bg-yellow-100 text-yellow-800";
    }
  };
  return (
    <div className="w-[95%] overflow-x-auto text-sm m-4 mx-auto">
      <table className="min-w-full bg-white border border-zinc-300 rounded-lg border-collapse">
        <thead>
          <tr className="bg-gray-100 text-gray-700 text-left rounded-lg">
            <th className="p-3 font-medium">Customer</th>
            {/* <th className="p-3 font-medium">Vehicle</th> */}
            <th className="p-3 font-medium">Trip Details</th>
            <th className="p-3 font-medium hidden sm:block">Payment</th>
            <th className="p-3 font-medium text-center">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((booking, index) => (
            <tr
              key={booking.user}
              className={`${
                index % 2 == 0 ? "" : "bg-zinc-200"
              } hover: cursor-pointer`}
            >
              <td className="p-3">
                <div className="font-medium">{booking.name}</div>
                <div className="text-sm text-gray-500">{booking.phone}</div>
              </td>
              {/* <td className="p-3">
                <div>{booking.vehicleTypeRequested}</div>
                <div className="text-sm text-gray-500">
                  {booking.additionalRequirement}
                </div>
              </td> */}
              <td className="p-3">
                <div className="text-sm">
                  <div>
                    {formatDate(booking.startDate)} -{" "}
                    {formatDate(booking.endDate)}
                  </div>
                  <div className="text-gray-500">
                    From: {booking.pickupLocation}
                  </div>
                  <div className="text-gray-500">
                    To: {booking.dropLocation}
                  </div>
                </div>
              </td>
              <td className="p-3 hidden sm:block">
                <div className="font-medium">
                  {booking.invoice.totalPayment}
                </div>
                <div className="text-sm text-gray-500">
                  Paid: {booking.invoice.advancePayment}
                </div>
                <div className="text-sm text-gray-500">
                  Due: {booking.invoice.remainingPayment}
                </div>
              </td>
              <td className="p-3">
                <div className="text-center">
                  {booking.vehicleTypeRequested}
                </div>
                <div className="text-sm text-gray-500 text-center">
                  {/* {booking.additionalRequirement} */}
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${getStatusStyle(
                      booking.status
                    )}`}
                  >
                    {booking.status}
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingsTable;

// <table className="text-xs min-w-full sm:max-w-fit overflow-hidden rounded-lg  border border-zinc-700">
//   <thead>
//     <tr className="uppercase bg-amber300 rounded-t-lg">
//       <th className="py-2">
//         <ul className="">
//           <li className="">name</li>
//           <li className="">phone</li>
//         </ul>
//       </th>

//       <th>
//         <ul>
//           <li>pickup</li>
//           <li>drop</li>
//         </ul>
//       </th>

//       <th>
//         <ul>
//           <li>start</li>
//           <li>end</li>
//         </ul>
//       </th>

//       <th>
//         <ul>
//           <li>vehicle</li>
//         </ul>
//       </th>

//       <th>
//         <ul>
//           <li>status</li>
//         </ul>
//       </th>
//     </tr>
//   </thead>

//   <tbody>
//     {data.map((item, index) => {
//       return (
//         <tr
//           key={index}
//           className={`${
//             index % 2 == 0 ? "" : "bg-zinc-200"
//           }  max-w-[90px]`}
//         >
//           <td className="border border-red-500">
//             <ul className="border max-w-[90px]">
//               <li className="borderb wrap-break-word max-w-[90px]">
//                 {item.name}
//               </li>
//               <li className="text-zinc-500  max-w-[90px]">
//                 {item.phone}
//               </li>
//             </ul>
//           </td>

//           <td className="border border-red-500">
//             <ul className="border ">
//               <li className="borderb wrap-break-word max-w-[100px]">
//                 {item.pickupLocation}
//               </li>
//               <li className="borderb wrap-break-word max-w-[100px]">
//                 {item.dropLocation}
//               </li>
//             </ul>
//           </td>

//           <td>
//             <ul>
//               <li>
//                 {(() => {
//                   const date = item.startDate;
//                   const day = String(date.getDate()).padStart(2, "0");
//                   const month = String(date.getMonth() + 1).padStart(
//                     2,
//                     "0"
//                   ); // Months are 0-based
//                   const year = String(date.getFullYear()).slice(-2); // Get last 2 digits
//                   return `${day}/${month}/${year}`;
//                 })()}
//               </li>
//               <li>
//                 {(() => {
//                   const date = item.endDate;
//                   const day = String(date.getDate()).padStart(2, "0");
//                   const month = String(date.getMonth() + 1).padStart(
//                     2,
//                     "0"
//                   ); // Months are 0-based
//                   const year = String(date.getFullYear()).slice(-2); // Get last 2 digits
//                   return `${day}/${month}/${year}`;
//                 })()}
//               </li>
//             </ul>
//           </td>

//           <td>
//             <ul>
//               <li>{item.vehicleTypeRequested}</li>
//             </ul>
//           </td>

//           <td>
//             <ul>
//               <li
//                 className={
//                   "bg-zinc-00 w-fit rounded-sm p-1" +
//                   ` ${item.status == "Pending" ? " bg-yellow-400" : ""}

//                   ${item.status == "Approved" ? "bg-green-600" : ""}

//                   ${item.status == "Rejected" ? "bg-red-500" : ""}
//                   `
//                 }
//               >
//                 {item.status}
//               </li>
//             </ul>
//           </td>
//         </tr>
//       );
//     })}
//   </tbody>
// </table>;
