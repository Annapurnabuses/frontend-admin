import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import BookingsDashboard from "../components/BookingsDashboard";
import { Menu } from "lucide-react";
import VehiclesDashboard from "../components/VehiclesDashboard";
import UsersDashboard from "../components/UsersDashboard";
import { Outlet } from "react-router-dom";

const AdminPage = () => {
  const Dashboard = {
    BOOKINGS: "BOOKINGS",
    VEHICLES: "VEHICLES",
    // MINIBUS:"MINI BUS",
    // LUXURYBUS:"LUXURY BUS",
    // SUV:"SUV",
    // SEDAN: "SEDAN",
    // ADMIN:"ADMIN",
    USERS: "USERS",
    // EMPLOYEES: "Employees"
  };

  // const [activeTab, setActiveTab] = useState("BOOKINGS");

  const [selectedDashboard, setSelectedDashboard] = useState(
    Dashboard.BOOKINGS
  );

  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  // useEffect(() => {
  //   console.log(activeTab);
  // }, [activeTab]);

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
          // activeTab={activeTab}
          // setActiveTab={setActiveTab}
          selectedDashboard={selectedDashboard}
          setSelectedDashboard={setSelectedDashboard}
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
          {/* {(() => {
            switch (activeTab) {
              case Dashboard.BOOKINGS:
                return <BookingsDashboard />;
              case Dashboard.VEHICLES:
                return <VehiclesDashboard />;
              case Dashboard.USERS:
                return <UsersDashboard />;
              default:
                return null;
            }
          })()} */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
