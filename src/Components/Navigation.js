import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Noice Dashboard</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link
                to="/manage/icons"
                style={{
                  marginRight: "30px",
                  textDecoration: "none",
                  color: "white",
                }}
              >
                Manage Icons
              </Link>
              <Link
                to="/noicedashboard"
                style={{
                  marginRight: "30px",
                  textDecoration: "none",
                  color: "white",
                }}
              >
                Add Icons
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
