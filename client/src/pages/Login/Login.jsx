import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      console.log(credentials);
      const res = await axios.post("/auth/login", credentials);
      console.log("User login");
      navigate("/sessions");
    } catch (error) {
      console.log("error: ", error);
    }
  };
  return (
    <div className="container">
      <h2>Login Form</h2>
      <form>
        <div className="container">
          <label for="uname">
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="email"
            id="email"
            onChange={handleChange}
            required
          />

          <label for="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            id="password"
            onChange={handleChange}
            required
          />
          <button type="submit" onClick={handleClick}>
            Login
          </button>

          <div className="container register">
            <p>
              Don't have an account? <Link to="/register"> Register</Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
