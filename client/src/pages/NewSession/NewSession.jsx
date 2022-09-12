import React, { useState } from "react";
import axios from "axios";
import "./NewSession.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

function NewSession() {
  let navigate = useNavigate();
  const [startvalue, setStartValue] = useState(dayjs());
  const [endvalue, setEndValue] = useState(dayjs());

  const { user } = useContext(AuthContext);
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
      const startmonth = startvalue.$M + 1;
      const endmonth = endvalue.$M + 1;
      const startdate = startvalue.$D + "/" + startmonth + "/" + startvalue.$y;
      const enddate = endvalue.$D + "/" + endmonth + "/" + endvalue.$y;
      const starttime = startvalue.$H + ":" + startvalue.$m;
      const endtime = endvalue.$H + ":" + endvalue.$m;

      setCredentials((prev) => ({ ...prev, startDate: startdate }));
      setCredentials((prev) => ({ ...prev, endDate: enddate }));
      setCredentials((prev) => ({ ...prev, startTime: starttime }));
      setCredentials((prev) => ({ ...prev, endTime: endtime }));

      console.log(credentials);

      const res = await axios.post("/sessions/", credentials);
      console.log("New Session created");
      navigate("/sessions");
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return user ? (
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
            <b>Start date and time</b>
          </label>
          <br></br>
          <br></br>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              renderInput={(props) => <TextField {...props} />}
              label="DateTimePicker"
              value={startvalue}
              onChange={(newValue) => {
                setStartValue(newValue);
                console.log(startvalue);
              }}
            />
          </LocalizationProvider>
          <br></br>
          <br></br>
          <label for="enddata">
            <b>End date and time</b>
          </label>
          <br></br>
          <br></br>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              renderInput={(props) => <TextField {...props} />}
              label="DateTimePicker"
              value={endvalue}
              onChange={(newValue) => {
                setEndValue(newValue);
                console.log(endvalue);
              }}
            />
          </LocalizationProvider>
          <br></br>
          <br></br>
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
  ) : (
    <div className="container">
      Please login before creating a new session
      <Link to="/">
        <button type="button" className="Loginbtn">
          Login
        </button>
      </Link>
    </div>
  );
}

export default NewSession;
