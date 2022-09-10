import React from "react";
// import { sessions } from "../../dummyData/sessionslist";
import Button from "@mui/material/Button";
import Session from "../components/Session/Session";
import useFetch from "../../hooks/useFetch";

function SessionList() {
  const { data, loading, error } = useFetch("/sessions");

  return (
    <div className="container">
      <h1>Study Sessions</h1>
      <a href="#">
        <Button size="large" className="new-session">
          Create a new Session
        </Button>
      </a>
      <ul>
        {loading
          ? "Loading please wait"
          : data.map((session) => <Session data={session} />)}
      </ul>
    </div>
  );
}

export default SessionList;
