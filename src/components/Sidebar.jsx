import {
  Car,
  ChevronDown,
  Layers,
  LogOut,
  ReceiptText,
  Users,
  X,
} from "lucide-react";
import React from "react";

const Sidebar = ({ isSidebarVisible, setIsSidebarVisible }) => {
  const vehicleDropDownList = ["Mini Bus", "Luxury Bus", "SUV", "Sedan"];
  const usersDropDownList = ["Admin", "Users", "Employees"];

  return (
    <div className="flex flex-col justify-between bg-white shadow-2xl sm:shadow-sm w-[230px] h-screen p-2 rounded-md">
      <div>
        <div className="flex gap-2 bg-amber-300 w-full p-2 rounded-lg text-purple800 text-violet-800">
          <p className=" self-center">Fake Taxi - Dashboard</p>
          <span
            className="sm:hidden"
            onClick={(e) => {
              e.preventDefault();
              setIsSidebarVisible(!isSidebarVisible);
            }}
          >
            <X />
          </span>
        </div>

        <ul className="py-2">
          <li className="w-full p-2 rounded-lg flex gap-2 ">
            <span>
              <Layers />
            </span>
            Bookings
          </li>

          <li className="w-full p-2 rounded-lg bg-zinc-100 border border-zinc-200">
            <div className="flex gap-2 justify-between">
              <div className="flex gap-2">
                <span>
                  <Car />
                </span>
                Vehicles
              </div>

              <ChevronDown />
            </div>
            <DropDown list={vehicleDropDownList} />
          </li>

          <li className="w-full p-2 rounded-lg">
            <div className="flex gap-2 justify-between">
              <div className="flex gap-2">
                <span>
                  <Users />
                </span>
                Users
              </div>
              <ChevronDown />
            </div>

            <DropDown list={usersDropDownList} />
          </li>

          <li className="w-full p-2 rounded-lg">
            <div className="flex gap-2 justify-between">
              <div className="flex gap-2">
                <span>
                  <ReceiptText />
                </span>
                Invoices
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div className="bg-zinc-100 rounded-lg">
        <div className="px-0.5 pt-0.25 text-xs text-zinc-600">
          Account Details: XXXXXXXXXXX
        </div>
        <div className="flex justify-between p-2 rounded-lg text-red-500 font-black shadow-2xl bg-white border border-zinc-300">
          Logout
          <span>
            <LogOut color="#fb2c36" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

const DropDown = ({ list }) => {
  return (
    <ul>
      {list.map((item, index) => {
        // const Icon = item.icon;
        return (
          // <div className="flex px-2" key={index}>
          <div
            className={`flex px-2 ${
              item == "SUV" ? "border rounded-md border-zinc-300" : ""
            }`}
            key={index}
          >
            {/* <Icon /> */}
            <li className="py-2">{item}</li>
          </div>
        );
      })}
    </ul>
  );
};
