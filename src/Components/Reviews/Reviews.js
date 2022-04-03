import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useReviews from '../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReview] = useReviews();
    return (
        <section className="py-5">
        <Container>
            <Row>
                <Col> <h2 className="block-title">Customer Review</h2>    </Col>
            </Row>
            <Row>
                {reviews.map((review) => <Review key={review.id} review={review}></Review>)}
            </Row>
        </Container>
      </section>
    );
};

export default Reviews;