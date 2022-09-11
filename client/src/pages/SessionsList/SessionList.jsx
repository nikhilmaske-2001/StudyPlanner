import React, { useContext } from "react";
import Button from "@mui/material/Button";
import Session from "../components/Session/Session";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function SessionList() {
  const { data, loading, error } = useFetch("/sessions");
  const { user } = useContext(AuthContext);

  return (
    <div className="container">
      {user ? user.email : "User not login"}
      <h1>Study Sessions</h1>
      <Link to="/newSession">
        <Button size="large" className="new-session">
          Create a new Session
        </Button>
      </Link>
      <ul>
        {loading
          ? "Loading please wait"
          : data.map((session) => <Session data={session} />)}
        {error && <span>Error while loading</span>}
      </ul>
    </div>
  );
}

export default SessionList;
