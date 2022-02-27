import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Popover from "react-bootstrap/Popover";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

function AlertDismissible() {
  const [show, setShow] = useState(true);
  if (show) {
    return (
      <Button variant="success" onClick={() => setShow(false)}>
        install
      </Button>
    );
  }
  return (
    <Col>
      <Popover>
        <Alert variant="light" onClose={() => setShow(true)} dismissible>
          <Alert.Heading>are you sure?</Alert.Heading>
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(true)} variant="success">
              Yes
            </Button>
          </div>
        </Alert>
      </Popover>
    </Col>
  );
}

export default AlertDismissible;
