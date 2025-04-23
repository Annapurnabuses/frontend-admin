import React, { useState } from "react";
import BookingsTable from "./BookingsTable";
import { CirclePlus } from "lucide-react";
import Button from "../components/Button";

const BookingsDashboard = () => {
  const [data, setData] = useState([
    {
      user: "609a1f1a2a1b2c3d4e5f6a7b",
      name: "John Doe",
      phone: "1234567890",
      vehicleTypeRequested: "SUV",
      startDate: new Date("2025-05-20"),
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
      assignedVehicle: "MP11 CM9085",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user: "609q1f1a2a1b2c3d4e5f6a7b",
      name: "John Doe",
      phone: "1234567890",
      vehicleTypeRequested: "SUV",
      startDate: new Date("2025-05-20"),
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
      assignedVehicle: "MP11 CM9085",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user: "609d1f1a2a1b2c3d4e5f6a7d",
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
      assignedVehicle: "MP09 LL4569",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user: "609l1f1a2a1b2c3d4e5f6a7f",
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
      assignedVehicle: "GJ17 8908",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user: "609p1f1a2a1b2c3d4e5f6a81",
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
      assignedVehicle: "BM92030",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user: "609o1f1a2a1b2c3d4e5f6a83",
      name: "Emily Davis",
      phone: "6677889900",
      vehicleTypeRequested: "SUV",
      startDate: new Date("2025-09-10"),
      endDate: new Date("2025-09-15"),
      pickupLocation: "369 Walnut St",
      dropLocation: "258 Spruce Ln",
      additionalRequirement: "No smoking in vehicle",
      status: "Approved",
      driverDutySlip: "HM17 QK 6970",
      invoice: {
        totalPayment: 220000,
        advancePayment: 100000,
        remainingPayment: 120000,
      },
      assignedVehicle: "TL6 HH0399",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user: "609n1f1a2a1b2c3d4e5f6a83",
      name: "Emily Davis",
      phone: "6677889900",
      vehicleTypeRequested: "SUV",
      startDate: new Date("2025-09-10"),
      endDate: new Date("2025-09-15"),
      pickupLocation: "369 Walnut St",
      dropLocation: "258 Spruce Ln",
      additionalRequirement: "No smoking in vehicle",
      status: "Approved",
      driverDutySlip: "HM17 QK 6970",
      invoice: {
        totalPayment: 220000,
        advancePayment: 100000,
        remainingPayment: 120000,
      },
      assignedVehicle: "TL6 HH0399",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);

  return (
    <>
      <div className="flex sm:w-fit m-4 sm:mr-8 sm:ml-auto gap-4">
        <input
          placeholder="Search Records"
          className="w-full border border-zinc-300 rounded-md p-2"
        />
        {/* <Button className={"bg-white text-zinc-700 font-normal "}>
          <span className="flex justify-between gap-2 items-center">
            Date
            <ArrowUpNarrowWide />
          </span>
        </Button> */}
        <Button className={"bg-green-600 text-white"}>
          <span className="flex justify-between gap-2 items-center">
            <CirclePlus size={18} />
            NEW
          </span>
        </Button>
      </div>
      <BookingsTable data={data} />
      {/* <pre className="text-xs">{JSON.stringify(data, null, 2)}</pre> */}
    </>
  );
};

export default BookingsDashboard;
