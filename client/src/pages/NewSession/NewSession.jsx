import React, { useState } from "react";
import axios from "axios";
import "./NewSession.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function NewSession() {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    title: undefined,
    subject: undefined,
    startDate: undefined,
    startTime: undefined,
    endDate: undefined,
    endTime: undefined,
    studentsLimit: undefined,
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      console.log(credentials);
      const res = await axios.post("/sessions/", credentials);
      console.log("New Session created");
      navigate("/sessions");
    } catch (error) {
      console.log("error: ", error);
    }
  };
  return (
    <div className="container">
      <h1>Create a new session</h1>
      <form>
        <div className="container">
          <label for="title">
            <b>Title</b>
          </label>
          <input
            type="text"
            placeholder="Enter Title"
            name="title"
            id="title"
            onChange={handleChange}
            required
          />

          <label for="subject">
            <b>Subject</b>
          </label>
          <input
            type="text"
            placeholder="Enter Subject"
            name="subject"
            id="subject"
            onChange={handleChange}
            required
          />
          <label for="startdate">
            <b>Start date</b>
          </label>
          <input
            type="text"
            placeholder="Enter start date"
            name="startdate"
            id="startDate"
            onChange={handleChange}
            required
          />
          <label for="enddata">
            <b>End date</b>
          </label>
          <input
            type="text"
            placeholder="Enter end date"
            name="enddate"
            id="endDate"
            onChange={handleChange}
            required
          />
          <label for="starttime">
            <b>Start time</b>
          </label>
          <input
            type="text"
            placeholder="Enter start time"
            name="starttime"
            id="startTime"
            onChange={handleChange}
            required
          />
          <label for="endtime">
            <b>End time</b>
          </label>
          <input
            type="text"
            placeholder="Enter end time"
            name="endtime"
            id="endTime"
            onChange={handleChange}
            required
          />
          <label for="studentsLimit">
            <b>Enter students limit</b>
          </label>
          <br></br>
          <input
            type="text"
            placeholder="Enter students limit"
            name="limit"
            id="studentsLimit"
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            onClick={handleClick}
            className="createNewSession"
          >
            Create a new session
          </button>
        </div>

        <div className="container">
          <Link to="/sessions">
            <button type="button" className="cancelbtn">
              Cancel
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default NewSession;
