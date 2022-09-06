import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Session(session) {
  return (
    <div>
      <CardActions></CardActions>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {session.data.id}
          </Typography>
          <Typography variant="h5" component="div">
            {session.data.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Date: {session.data.date}
          </Typography>
          <Typography variant="body2">
            Timing: {session.data.starttime} to {session.data.endtime}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Join session</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Session;
