import axios from "axios";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/sessions");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.response.data });
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
          <button disabled={loading} type="submit" onClick={handleClick}>
            Login
          </button>
          {error && <span>{error.message}</span>}

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
