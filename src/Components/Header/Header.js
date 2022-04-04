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
          <Col xs={12} md={3} lg={4}>
          <div className="logo">
          <img src={logo} alt="" />
          </div> 
          </Col>
          <Col xs={12} md={9} lg={8}>
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
