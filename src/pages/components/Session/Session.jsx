import React from "react";

function Session(session) {
  return (
    <div>
      <h1>
        <li>{session.data.name}</li>
      </h1>
    </div>
  );
}

export default Session;
