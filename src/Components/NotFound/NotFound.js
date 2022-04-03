import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const NotFound = () => {
    return (
        <section className=''>
            <Container>
                <Row className='full-screen align-items-center'>
                    <Col>
                    <h1 className='text-center'>The page you are looking for is not exist or removed</h1>
                    </Col>
                </Row>
                
            </Container>
        </section>
    );
};

export default NotFound;