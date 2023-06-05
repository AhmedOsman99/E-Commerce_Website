import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export function Footer() {
  return (
    <div>
      <footer
        className="footer text-light py-4"
        style={{
          background: "linear-gradient(to bottom right, #000000, #7c7c7c)",
        }}
      >
        <Container>
          <Row>
            <Col xs={12} md={6} className="text-center text-md-start">
              <p>&copy; 2023 Fit Club. All rights reserved.</p>
            </Col>
            <Col xs={12} md={6} className="text-center text-md-end">
              <p>Contact us: info@fitclub.com</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}
