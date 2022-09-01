import React from "react";
import Alert from "react-bootstrap/Alert";

export function Error404() {
  return (
    <div>
      <Alert variant="danger">
        <h3> Error 404</h3>
        Sorry, this route does not exist.
      </Alert>
    </div>
  );
}
