import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { BrowserRouter, Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="text-center py-2">
          <Col>
            <small>
              <b className="ttu">Aizik projects Inc</b>., All Rights Reserved
              &copy; {new Date().getFullYear()}
            </small>
          </Col>
        </Row>

        <Row className="text-center mt-sm-4">
          <BrowserRouter>
            <Col>
              <Link
                to="/"
                onClick={() =>
                  window.open("https://github.com/AizikAizik", "_blank")
                }
              >
                <p className="f4 dib ph2 link mid-gray dim underline-hover">
                  {" "}
                  My GitHub
                </p>
              </Link>
              <Link
                to="/"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/aizik-ogunleye-78749213a",
                    "_blank"
                  )
                }
              >
                <p className="f4 dib ph2 link mid-gray dim underline-hover">
                  {" "}
                  My LinkedIn
                </p>
              </Link>
            </Col>
          </BrowserRouter>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
