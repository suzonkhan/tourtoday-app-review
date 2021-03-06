import React from "react";
import { Col } from "react-bootstrap";
import './Review.css';
import Rating from 'react-rating';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Review = ({reviewItem}) => {
  const {thumb, name, review, rating} = reviewItem;
  return (
    <Col xs={12} md={6} lg={4} className="mb-4">
      <div className="review-box">
         <div className="thumb"> <img src={thumb} alt="" /></div>
        <h4> {name} </h4>
        <p>{review}</p>
        <Rating
            initialRating={rating}
            emptySymbol={<FontAwesomeIcon icon={faStar} />}
            fullSymbol={<FontAwesomeIcon style={{color: '#f89321'}} icon={faStar} />}
            readonly
        ></Rating>
      </div>
    </Col>
  );
};

export default Review;
