import React from "react";
import { sessions } from "../../dummyData/sessionslist";
import Session from "../components/Session/Session";

function SessionList() {
  return (
    <div>
      <h1>Study Sessions</h1>
      <ul>
        {sessions.map((session) => (
          <Session data={session} />
        ))}
      </ul>
    </div>
  );
}

export default SessionList;
