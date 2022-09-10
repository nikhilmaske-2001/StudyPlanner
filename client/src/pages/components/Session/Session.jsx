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
        <CardActions>
          <Button size="small">Join session</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Session;
