import axios from "axios";
import React, { useState } from "react";
import "../Register/Register.css";

function Register() {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  const handleChange = (e) => {
    console.log("Register change");
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      console.log(credentials);
      const res = await axios.post("/auth/register", credentials);
      console.log(res);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <div className="register-container">
      <form>
        <div className="container">
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />

          <label for="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
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

          <hr />
          <button onClick={handleClick} type="submit" className="registerbtn">
            Register
          </button>
        </div>

        <div className="container signin">
          <p>
            Already have an account? <a href="#">Log In</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;
