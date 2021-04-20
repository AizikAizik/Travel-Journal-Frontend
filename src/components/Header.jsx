import React, { useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../actions/userActions";
import InstructionsModal from "./InstructionsModal";

const Header = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const [modalShow, setModalShow] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    history.push("/");
  };

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <LinkContainer to="/">
          <Navbar.Brand>Travel Journal</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {userInfo ? (
              <NavDropdown title={userInfo.fullName} id="username">
                <NavDropdown.Item onClick={() => setModalShow(true)}>
                  Instructions
                </NavDropdown.Item>
                <NavDropdown.Item onClick={logoutHandler}>
                  logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <>
                <LinkContainer to="/">
                  <Nav.Link>Sign In</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/register">
                  <Nav.Link>Register</Nav.Link>
                </LinkContainer>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <InstructionsModal show={modalShow} onHide={() => setModalShow(false)} />
    </header>
  );
};

export default Header;
