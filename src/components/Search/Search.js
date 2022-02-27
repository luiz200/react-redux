import React from "react";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

function Search() { 
  return (
    <Container>
      <br></br>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search..."
          className="me-2"
          aria-label="Search"
        />
      </Form>
      <br></br>
    </Container>
  );
}

export default connect()(Search);
