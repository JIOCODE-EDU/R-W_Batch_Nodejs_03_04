import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3002/auth/register", {
        name,
        email,
        password,
      });

      localStorage.setItem("token", res.data.token || " ");

      navigate("/login");
      
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed!!");
    }
  };

  return (
    <>
      <div>Register Page</div>
      <form onSubmit={handleLogin}>
        <h2>Register Form</h2>
        <input
          type="text"
          name=""
          id=""
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name=""
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          name=""
          id="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;
