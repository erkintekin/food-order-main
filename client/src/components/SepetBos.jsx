import React from "react";
import Alert from "react-bootstrap/Alert";

function SepetBos() {
  return (
    <div>
      <Alert variant="danger" style={{ fontSize: "50px", margin: "30px" }}>
        <h2>Cart is empty 😒</h2>
      </Alert>
    </div>
  );
}

export default SepetBos;
