import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import AdminPage from "./Pages/AdminPage";
import BookingsDashboard from "./components/BookingsDashboard";
import AdminDashboard from "./components/AdminDashboard";
import VehiclesDashboard from "./components/VehiclesDashboard";
import UsersDashboard from "./components/UsersDashboard";

function App() {
  return (
    <div className="text-zinc-800">
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<AdminPage />}>
            <Route index element={<AdminDashboard />} />
            <Route path="bookings" element={<BookingsDashboard />} />
            <Route path="vehicles/:type" element={<VehiclesDashboard />} />
            <Route path="users/:type" element={<UsersDashboard />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
