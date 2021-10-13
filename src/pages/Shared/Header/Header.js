import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import "./Header.css";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          Genius
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={HashLink} to="/home#home">
              Home
            </Nav.Link>
            <Nav.Link as={HashLink} to="/services#services">
              Services
            </Nav.Link>
            <Nav.Link as={HashLink} to="/exparts#exparts">
              Expart
            </Nav.Link>
            {user?.email ? (
              <>
                <Button className="nav-link btn btn-sm bg-dark outline-0 border-0">
                  {user.displayName}
                </Button>
                <Button
                  onClick={logOut}
                  className="nav-link btn btn-sm bg-dark outline-0 border-0"
                >
                  LogOut
                </Button>
              </>
            ) : (
              <>
                ""
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
