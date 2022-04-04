import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const NotFound = () => {
  return (
    <section className="">
      <Container>
        <Row className="full-screen align-items-center">
          <Col className="text-center">
           

            <img
              src="https://amadercode.com/wp-content/themes/codelab/images/not-found.png"
              alt=""
            />
            <h1 className="my-4">Dude! Page can’t be found.</h1>
             <p className="my-4">
            The page you are looking for was moved, removed, renamed or might never existed.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NotFound;
