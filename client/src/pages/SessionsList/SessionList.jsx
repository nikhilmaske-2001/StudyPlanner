import React from "react";
import { sessions } from "../../dummyData/sessionslist";
import Button from "@mui/material/Button";
import Session from "../components/Session/Session";
import { Link } from "react-router-dom";

function SessionList() {
  return (
    <div className="container">
      <h1>Study Sessions</h1>
      <Link to="/newsessions">
        <Button size="large" className="new-session">
          Create a new Session
        </Button>
      </Link>
      <ul>
        {sessions.map((session) => (
          <Session data={session} />
        ))}
      </ul>
    </div>
  );
}

export default SessionList;
