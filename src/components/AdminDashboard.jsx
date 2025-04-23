import React from "react";

const AdminDashboard = () => {
  return (
    <div className="flex flex-col justify-center sm:w-fit h-screen  m-auto gap-4">
      <h1>AdminDashboard</h1>

      <div>Total Trips Completed</div>
      <div>Upcoming Trips</div>
      <div>Outstanding Payments</div>
    </div>
  );
};

export default AdminDashboard;
