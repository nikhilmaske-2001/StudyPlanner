import React from "react";
import "./NewSession.css";

function NewSession() {
  return (
    <div>
      <h1>Create a new session</h1>
      <form>
        <div className="container">
          <label for="title">
            <b>Title</b>
          </label>
          <input type="text" placeholder="Enter Title" name="title" required />

          <label for="subject">
            <b>Subject</b>
          </label>
          <input
            type="text"
            placeholder="Enter Subject"
            name="subject"
            required
          />
          <label for="startdate">
            <b>Start date</b>
          </label>
          <input
            type="text"
            placeholder="Enter start date"
            name="startdate"
            required
          />
          <label for="enddata">
            <b>End date</b>
          </label>
          <input
            type="text"
            placeholder="Enter end date"
            name="enddate"
            required
          />
          <label for="starttime">
            <b>Start time</b>
          </label>
          <input
            type="text"
            placeholder="Enter start time"
            name="starttime"
            required
          />
          <label for="endtime">
            <b>End time</b>
          </label>
          <input
            type="text"
            placeholder="Enter end time"
            name="endtime"
            required
          />

          <button type="submit">Create a new session</button>
        </div>

        <div className="container">
          <button type="button" className="cancelbtn">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewSession;
