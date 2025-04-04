import React, { useState } from "react";
import RegisterForm from "../components/RegisterForm";
import axios from "axios";

const RegisterPage = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleRegister = async () => {
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
        name: "daeijv fsekjn",
        contact: "1234567890",
      };

      // Make API call
      const response = await axios.post(
        `${BASE_URL}/api/auth/register`,
        payload
      );

      // Handle successful response
      setResponse(response.data);
      console.log("Registration successful:", response.data);
    } catch (err) {
      // Handle error
      setError(err.response?.data?.error || err.message);
      console.error("Registration failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <RegisterForm
        handleRegister={handleRegister}
        loading={loading}
        response={response}
        error={error}
      />
      Token: {response?.token}
      Error: {error}
    </div>
  );
};

export default RegisterPage;
