import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";
import logo from "./../../assets/images/logo.png"
const Header = () => {
  return (
    <nav>
      <Container>
        <Row>
          <Col>
          <div className="logo">
          <img src={logo} alt="" />
          </div>
        
          </Col>
          <Col>
            <ul>
              <CustomLink to="/"> Home</CustomLink>
              <CustomLink to="/about">About</CustomLink>
              <CustomLink to="/reviews">Reviews</CustomLink>
              <CustomLink to="/dashboard">Dashboard</CustomLink>
              <CustomLink to="/blog"> Blog</CustomLink>
            </ul>
          </Col>
        </Row>
      </Container>
    </nav>
  );
};

export default Header;
