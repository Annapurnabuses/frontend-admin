import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import BookingsDashboard from "../components/BookingsDashboard";
import { Menu } from "lucide-react";

const AdminPage = () => {
  const Dashboard = {
    BOOKINGS: "BOOKINGS",
    VEHICLES: "VEHICLES",
    USERS: "USERS",
  };

  const [selectedDashboard, setSelectedDashboard] = useState(
    Dashboard.BOOKINGS
  );

  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  return (
    <div className="flex gap-6 h-screen w-screen overflow-xhidden">
      <div
        className={`${
          isSidebarVisible ? "" : "hidden"
        } absolute sm:block sm:fixed z-50`}
      >
        <Sidebar
          isSidebarVisible={isSidebarVisible}
          setIsSidebarVisible={setIsSidebarVisible}
        />
      </div>

      <div className="sm:ml-[230px] w-full">
        <div className="flex gap-2 bg-amber-300 w-fit p-2 rounded-lg m-2 text-violet-800 sm:hidden">
          <span
            className=""
            onClick={(e) => {
              e.preventDefault();
              setIsSidebarVisible(!isSidebarVisible);
            }}
          >
            <Menu />
          </span>
          <p className="pt-0.25 self-center">Fake Taxi - Dashboard</p>
        </div>

        <div className="w-full overflow-xclip">
          <BookingsDashboard />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
