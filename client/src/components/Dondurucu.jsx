import React from "react";
import Spinner from "react-bootstrap/Spinner";

function Dondurucu() {
    return (
        <div className="d-flex vh-100 justify-content-center align-items-center">
            <Spinner
                animation="border"
                variant="warning"
                style={{ height: "100px", width: "100px" }}
            />
        </div>
    );
}

export default Dondurucu;
