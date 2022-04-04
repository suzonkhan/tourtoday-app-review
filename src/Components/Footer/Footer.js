import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './Footer.css'
import logo from "./../../assets/images/logo.png"
const Footer = () => {
  return (
    <footer className="footer-main">
      <Container>
        <Row>
          <Col>
          <img src={logo} alt="" />
          <p>Bangladesh Tour Guide: TourTodayBD © 2017 All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
