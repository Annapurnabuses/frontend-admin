import {
  Car,
  ChevronDown,
  Layers,
  LayoutDashboard,
  LogOut,
  ReceiptText,
  Users,
  X,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

// Menu configuration - makes it easy to add/modify menu items
const MENU_CONFIG = {
  vehicles: {
    label: "Vehicles",
    icon: Car,
    items: ["All", "Mini Bus", "Luxury Bus", "SUV", "Sedan"],
  },
  users: {
    label: "Users",
    icon: Users,
    items: ["Admins", "Consumers", "Employees"],
  },
};

// Dropdown menu component
const DropdownMenu = ({
  items,
  activeTab,
  setActiveTab,
  isExpanded,
  label,
}) => {
  if (!isExpanded) return null;

  return (
    <ul className="pl-6">
      {items.map((item) => (
        <li
          className="flex"
          key={item}
          onClick={() => setActiveTab(item.toUpperCase())}
        >
          <NavLink
            to={`${label.toLowerCase().replace(/\s+/g, "-")}/${item
              .toLowerCase()
              .replace(/\s+/g, "-")}`}
            className={`p-2 ${
              activeTab === item.toUpperCase()
                ? " w-full border rounded-md border-zinc-300"
                : ""
            }`}
          >
            {item}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

// Main sidebar component
const Sidebar = ({ isSidebarVisible, setIsSidebarVisible }) => {
  const [activeTab, setActiveTab] = useState("DASHBOARD");
  const [expandedMenus, setExpandedMenus] = useState({});

  useEffect(() => {
    // first

    isTabInSubmenu(MENU_CONFIG.users.items);
  }, [activeTab]);

  const toggleMenu = (menuKey) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [menuKey]: !prev[menuKey],
    }));
  };

  const isTabInSubmenu = (submenuItems) => {
    return submenuItems.some((item) => item.toUpperCase() === activeTab);
  };

  return (
    <div className="flex flex-col justify-between bg-white shadow-2xl sm:shadow-sm w-[230px] h-screen p-2 rounded-md">
      {/* Header */}
      <div>
        <div className="flex gap-2 bg-amber-300 w-full p-2 rounded-lg text-violet-800">
          <p className="self-center">Fake Taxi - Dashboard</p>
          <span
            className="sm:hidden cursor-pointer"
            onClick={() => setIsSidebarVisible(!isSidebarVisible)}
          >
            <X />
          </span>
        </div>

        {/* Menu Items */}
        <ul className="py-2 cursor-pointer">
          {/* Bookings Tab */}
          <li onClick={() => setActiveTab("DASHBOARD")}>
            <NavLink
              to="/dashboard"
              className={`w-full p-2 rounded-lg flex gap-2 ${
                activeTab === "DASHBOARD"
                  ? "bg-zinc-100 border border-zinc-200"
                  : ""
              }`}
            >
              <span>
                <LayoutDashboard />
              </span>
              Analytics
            </NavLink>
          </li>

          <li onClick={() => setActiveTab("BOOKINGS")}>
            <NavLink
              to="bookings"
              className={`w-full p-2 rounded-lg flex gap-2 ${
                activeTab === "BOOKINGS"
                  ? "bg-zinc-100 border border-zinc-200"
                  : ""
              }`}
            >
              <span>
                <Layers />
              </span>
              Bookings
            </NavLink>
          </li>

          {/* Dropdown Menus */}
          {Object.entries(MENU_CONFIG).map(([key, menu]) => {
            const MenuIcon = menu.icon;
            const isActive = isTabInSubmenu(menu.items);

            return (
              <li
                key={key}
                className={`w-full p-2 rounded-lg ${
                  isActive ? "bg-zinc-100 border border-zinc-200" : ""
                }`}
              >
                <div
                  className="flex gap-2 justify-between"
                  onClick={() => !isActive && toggleMenu(key)}
                >
                  <div className="flex gap-2">
                    <span>
                      <MenuIcon />
                    </span>
                    {menu.label}
                  </div>
                  <ChevronDown />
                </div>

                <DropdownMenu
                  items={menu.items}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                  isExpanded={expandedMenus[key] || isActive}
                  label={menu.label}
                />
              </li>
            );
          })}

          {/* Invoices Tab */}
          <li
            className={`w-full p-2 rounded-lg flex gap-2 ${
              activeTab === "INVOICES"
                ? "bg-zinc-100 border border-zinc-200"
                : ""
            }`}
            onClick={() => setActiveTab("INVOICES")}
          >
            <div className="flex gap-2">
              <span>
                <ReceiptText />
              </span>
              Invoices
            </div>
          </li>
        </ul>
      </div>

      {/* Footer */}
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
