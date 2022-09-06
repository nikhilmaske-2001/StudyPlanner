import React from "react";
import { sessions } from "../../dummyData/sessionslist";
import Button from "@mui/material/Button";
import Session from "../components/Session/Session";

function SessionList() {
  return (
    <div>
      <h1>Study Sessions</h1>
      <Button size="large">Create a new Session</Button>

      <ul>
        {sessions.map((session) => (
          <Session data={session} />
        ))}
      </ul>
    </div>
  );
}

export default SessionList;
