import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import review from '../../../images/review.jpg'

const Review = () => {
    return (
        <Container className="mt-5 ">
            <h1 className="my-5 text-danger">Customers feedback about us</h1>
            <Row>
                <Col>
                    <img width="60%" src={review} alt="" />

                </Col>
                <Col>
                    <div>
                        <p>
                            i am very exciting about to travel agency they are very good team .they support us very friendly ways .so that we can travel all the  places very easuly .they always friendly every client.
                        </p>

                        <span className="text-primary"> <small>---Denny Willson</small></span>
                    </div>

                    <div>
                        <p>
                            Travel agency is one of my favourite agency .This  is psrticulerly helping about us.we can facilitis from them for every trsvel sgrncy.they are very friendly and helpful.i think one day this will be a huge popular
                        </p>

                        <span className="text-primary"> <small>---Corey jason</small></span>
                    </div>

                    <div>
                        <p>
                            WOW!! great experice about the travel agency.you cant ignore the agency.
                            .very friendly ways .so that we can travel all the  places very easuly .they always friendly every client.
                        </p>
                        <span className="text-primary"> <small>---Tom Latham</small></span>
                    </div>

                </Col>


            </Row>

        </Container>
    );
};

export default Review;