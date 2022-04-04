import { Button } from "bootstrap";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useReviews from "../hooks/useReviews";
import Review from "../Review/Review";
import bannerPhoto from "./../../assets/images/app-add-banner.png";
import "./Home.css";
const Home = () => {
  const [reviews, setReview] = useReviews();
  // console.log(reviews);
  return (
    <div>
      <section className="py-5 main-banner">
        <Container>
          <Row className="align-items-center flex-sm-row-reverse">
          <Col xs={12} md={6} lg={6} className="text-end">
              <img src={bannerPhoto} alt="" />
            </Col>
            <Col xs={12} md={6} lg={6}>
            <h4 className="text-branding">TourTodayBD</h4>
              <h2 className="h1 mb-4">Keep a tour guid in you pocket</h2>
              <p className="lead">
                TourTodayBD is one of the largest tour and travel directory of
                Bangladesh. Here you will find all of tourist place/spots of
                Bangladesh with necessary information which you want.
              </p>
              <a className="btn-live-demo" href="https://play.google.com/store/apps/details?id=com.tourtoday.bd" target="_blank">Intall Now</a>
            </Col>
            
          </Row>
        </Container>
      </section>
      <section className="py-5">
        <Container>
          <Row>
            <Col> 
              <h2 className="block-title">Customer Review</h2> 
            </Col>
          </Row>
          <Row> 
            {reviews.slice(0, 3).map((singleReview) => <Review key={singleReview.id} reviewItem={singleReview}></Review>)}
          </Row>
          <Row>
            <Col className="text-center"> 
              <Link className="btn btn-info mt-3" to="/reviews">View All Reviews</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
