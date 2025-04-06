import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import AdminPage from "./Pages/AdminPage";

function App() {
  return (
    <div className="text-zinc-800">
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/admin-dashboard" element={<AdminPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
