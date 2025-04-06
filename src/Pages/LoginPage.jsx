import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    // Reset states
    setLoading(true);
    setResponse(null);
    setError(null);

    try {
      // Get base URL from .env
      const BASE_URL = import.meta.env.VITE_BACKEND_URL;

      // Payload data
      const payload = {
        email: "esopem@fsjn.com",
        password: "dalijfe",
      };

      // Make API call
      const response = await axios.post(`${BASE_URL}/api/auth/login`, payload);

      // Handle successful response
      setResponse(response.data);
      console.log("Login successful:", response.data);

      // Store token in localStorage for future authenticated requests
      localStorage.setItem("authToken", response.data.token);

      navigate("/admin-dashboard");

      // You might want to store user info or redirect the user here
      // Example: localStorage.setItem('user', JSON.stringify(response.data.user));
      // Example: navigate('/dashboard');
    } catch (err) {
      // Handle error
      setError(err.response?.data?.error || err.message);
      console.error("Login failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <LoginForm
        handleLogin={handleLogin}
        loading={loading}
        response={response}
        error={error}
      />
      Token: {response?.token}
      Error: {error}
    </div>
  );
};

export default LoginPage;
