import React, { useState } from "react";
import BookingsTable from "./BookingsTable";

const BookingsDashboard = () => {
  const [data, setData] = useState([
    {
      user: "609c1f1a2a1b2c3d4e5f6a7b",
      name: "John Doe",
      phone: "1234567890",
      vehicleTypeRequested: "SUV",
      startDate: new Date("2025-05-01"),
      endDate: new Date("2025-05-05"),
      pickupLocation: "123 Main St",
      dropLocation: "456 Park Ave",
      additionalRequirement: "Child seat required",
      status: "Pending",
      driverDutySlip: "dGVzdF9kZXY=",
      invoice: {
        totalPayment: 200000,
        advancePayment: 50000,
        remainingPayment: 150000,
      },
      assignedVehicle: "609c1f1a2a1b2c3d4e5f6a7c",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user: "609c1f1a2a1b2c3d4e5f6a7d",
      name: "Jane Smith",
      phone: "0987654321",
      vehicleTypeRequested: "Sedan",
      startDate: new Date("2025-06-10"),
      endDate: new Date("2025-06-12"),
      pickupLocation: "789 Elm St",
      dropLocation: "321 Oak St",
      additionalRequirement: "Extra luggage space",
      status: "Approved",
      driverDutySlip: "c2FtcGxlX2Rldg==",
      invoice: {
        totalPayment: 150000,
        advancePayment: 75000,
        remainingPayment: 75000,
      },
      assignedVehicle: "609c1f1a2a1b2c3d4e5f6a7e",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user: "609c1f1a2a1b2c3d4e5f6a7f",
      name: "Alice Johnson",
      phone: "1122334455",
      vehicleTypeRequested: "Luxury Bus",
      startDate: new Date("2025-07-15"),
      endDate: new Date("2025-07-20"),
      pickupLocation: "987 Pine St",
      dropLocation: "654 Cedar Ave",
      additionalRequirement: "WiFi available",
      status: "Rejected",
      driverDutySlip: "YWJjZGVmZw==",
      invoice: {
        totalPayment: 500000,
        advancePayment: 200000,
        remainingPayment: 300000,
      },
      assignedVehicle: "609c1f1a2a1b2c3d4e5f6a80",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user: "609c1f1a2a1b2c3d4e5f6a81",
      name: "Robert Brown",
      phone: "5566778899",
      vehicleTypeRequested: "Mini Bus",
      startDate: new Date("2025-08-05"),
      endDate: new Date("2025-08-07"),
      pickupLocation: "246 Maple St",
      dropLocation: "135 Birch Blvd",
      additionalRequirement: "Water for passengers",
      status: "Pending",
      driverDutySlip: "cHJpdmF0ZV9zdHJpbmc=",
      invoice: {
        totalPayment: 180000,
        advancePayment: 60000,
        remainingPayment: 120000,
      },
      assignedVehicle: "609c1f1a2a1b2c3d4e5f6a82",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user: "609c1f1a2a1b2c3d4e5f6a83",
      name: "Emily Davis",
      phone: "6677889900",
      vehicleTypeRequested: "SUV",
      startDate: new Date("2025-09-10"),
      endDate: new Date("2025-09-15"),
      pickupLocation: "369 Walnut St",
      dropLocation: "258 Spruce Ln",
      additionalRequirement: "No smoking in vehicle",
      status: "Approved",
      driverDutySlip: "ZGVtb19kZXZfc3RyaW5n",
      invoice: {
        totalPayment: 220000,
        advancePayment: 100000,
        remainingPayment: 120000,
      },
      assignedVehicle: "609c1f1a2a1b2c3d4e5f6a84",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);

  return (
    <div>
      BookingsDashboard
      <BookingsTable data={data} />
      {/* <pre className="text-xs">{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
};

export default BookingsDashboard;
