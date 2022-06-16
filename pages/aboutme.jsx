import React from "react";
import Image from "next/image";

// yess let's get those animations
import "animate.css";

// Reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";


const AboutMe = () => {
  return (
    <>
      <section className="section section-lg">
        <Row className="justify-content-center text-center ">
          <Col lg="8">
            <h1 className="animate__animated animate__zoomIn animate__fast">ABOUT ME</h1>
          </Col>
        </Row>

        <Container className="py-lg-md d-flex">
          <Row className="justify-content-center text-center">
            <Col lg="8">
              <p className="lead text-muted">
                At Co-op Soc, our top aims are to socialise and meet new people. We facilitate this through a wide range of social events, including our highly anticipated annual camp and ball.
              </p>
            </Col>
          </Row>
        </Container>
        <br></br>
      </section>
    </>
  );
}

export default AboutMe;
