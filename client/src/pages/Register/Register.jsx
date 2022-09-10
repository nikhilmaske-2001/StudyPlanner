import React from "react";
import "../Register/Register.css";

function Register() {
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
            required
          />

          <label for="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            id="psw"
            required
          />

          <label for="psw-repeat">
            <b>Repeat Password</b>
          </label>
          <input
            type="password"
            placeholder="Repeat Password"
            name="psw-repeat"
            id="psw-repeat"
            required
          />
          <hr />
          <a href="#">
            <button type="submit" className="registerbtn">
              Register
            </button>
          </a>
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
