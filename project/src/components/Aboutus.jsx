import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import aboutUsImage from "../Images/aboutus2.webp";

export function Aboutus() {
  return (
    <div className="about-us">
      <Container className="about-us-content p-5 bg-light shadow mt-4 mb-4">
        <Row>
          <Col xs={12} md={6}>
            <div className="image-container">
              <img
                src={aboutUsImage}
                alt="About Us"
                className="about-us-image"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="header">
              <h1 className="fw-bold">About Us</h1>
            </div>
            <div className="paragraphs">
              <p className="text-muted">
                Welcome to Fit Club, your destination for high-quality protein
                products! At Fit Club, we provide top-notch protein supplements
                that fuel your workouts, aid in muscle recovery, and support
                overall well-being.
              </p>
              <p className="text-muted">
                With our carefully selected range of protein products, we
                deliver excellence in both quality and taste. Each product
                undergoes rigorous testing and is crafted with the finest
                ingredients to ensure optimal results. Join our community and
                experience the transformative power of our premium protein
                products.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
