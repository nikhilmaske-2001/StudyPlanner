import React from "react";
import "./Login.css";

function Login() {
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
            name="uname"
            required
          />

          <label for="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />

          <button type="submit">Login</button>
          <div className="container register">
            <p>
              Don't have an account? <a href="#">Register</a>.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
