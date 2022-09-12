import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

function Session(session) {
  const { user } = useContext(AuthContext);
  const [hasJoined, sethasJoined] = useState(false);
  const [joinButton, setJoinButton] = useState(false);
  const [sessionfull, setSessionfull] = useState(false);
  const [sess, setsess] = useState(session);

  const checking = async () => {
    try {
      const session = sess.data._id;
      const User = user._id;
      const res = await axios.post("/sessions/checksession", { session, User });

      sethasJoined(res.data);
      setJoinButton(!res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const sessionSize = async () => {
    try {
      const session = sess.data._id;
      const res = await axios.post("/sessions/sessionsize", { session });

      setSessionfull(res.data);
      setJoinButton(!res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checking();
    sessionSize();
  }, []);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const session = e.target.id;
      const User = user._id;
      const res = await axios.post("/sessions/joinsession", { session, User });
      console.log(res);
      checking();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <CardActions></CardActions>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {session.data._id}
          </Typography>
          <Typography variant="h5" component="div">
            {session.data.title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Date: From {session.data.startDate} to {session.data.endDate}
          </Typography>
          <Typography variant="body2">
            Timing: From {session.data.startTime} to {session.data.endTime}
          </Typography>
          <Typography variant="body2">
            Max limit: {session.data.studentsLimit}
          </Typography>
        </CardContent>
        {hasJoined && (
          <CardActions>
            <Button
              id={session.data._id}
              size="small"
              style={{ background: "green", color: "white" }}
            >
              Already Joined
            </Button>
          </CardActions>
        )}

        {sessionfull && (
          <CardActions>
            <Button
              id={session.data._id}
              size="small"
              style={{ background: "red", color: "white" }}
            >
              Session is full
            </Button>
          </CardActions>
        )}

        {joinButton && (
          <CardActions>
            <Button id={session.data._id} size="small" onClick={handleClick}>
              Join session
            </Button>
          </CardActions>
        )}
      </Card>
    </div>
  );
}

export default Session;
