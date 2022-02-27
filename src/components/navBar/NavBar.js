import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdContactPhone } from "react-icons/md";
import { IoPersonCircleOutline, IoLogOutOutline, IoSettingsOutline } from "react-icons/io5";
import Container from "react-bootstrap/Container";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>
              CRUD-
              <MdContactPhone />
            </Navbar.Brand>
          </Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Dropdown>
                <Container>
                  <Dropdown.Toggle
                    align="end"
                    className="justify-content-end"
                    variant="warning"
                    id="dropdown-basic"
                  >
                    <IoPersonCircleOutline />
                  </Dropdown.Toggle>
                </Container>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Settigns <IoSettingsOutline/></Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Sign out <IoLogOutOutline/></Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
