import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <section className="">
      <Container>
        <Row className="full-screen align-items-center">
          <Col className="text-center">
            <img
              src="https://bangla.tourtoday.com.bd/wp-content/themes/tour/images/slider.jpg"
              alt=""
            />

            <h1 className="my-4">
              বাংলাদেশের সকল দর্শনীয় স্থানের বিবরনে কিভাবে যাবেন, কোথায় থাকবেন
              সহ সকল তথ্যের ভান্ডার TourTodayBD
            </h1>
             
            <p>
              ষড়ঋতুর অপরুপ লীলাভূমি আমাদের এ বাংলাদেশ। এ দেশের ইতিহাস, ঐতিহ্য ও
              সংষ্কৃতির সাথে বিভিন্ন প্রাকৃতিক সৌন্দর্যের কারনে পর্যটন শিল্পের
              বিপুল সম্ভবনার দেশ আমাদের এ বাংলাদেশ।&nbsp;পর্যটন
              শিল্পের&nbsp;সম্ভবনার এ দিগন্ত আরো উন্মচন ও বিকশিত করতে আমাদের
              প্রচেষ্টার ফসল “ট্যুর টুডে” (
              <a
                href="https://play.google.com/store/apps/details?id=com.tourtoday.bd"
                target="_blank"
                rel="noopener"
              >
                TourToday BD
              </a>
              )। বাংলাদেশের জানা-অজানা, স্থানীয় – জাতীয়, পরিচিত সহ বিভিন্ন
              দর্শনীয় স্থান গুলোকে সুন্দর এবং সহজ ভাবে উপস্থাপন করাই আমাদের
              একমাত্র লক্ষ।
            </p>
            
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
