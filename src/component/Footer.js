import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MailChimpForm from "./MailChimpForm";
import { ImLinkedin2, ImFacebook } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer">
      <Container className="pt-4 ">
        <MailChimpForm />
        <Row className="align-items-center">
          <Col sm={6}>
            <h1>Bhanu Prakash</h1>
          </Col>
          <Col sm={12} md={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/bhanu-prakash-sen-87b112229/">
                <ImLinkedin2 />
              </a>
              <a href="https://github.com/BhanuPrakash7297">
                <FaGithub />
              </a>
            </div>
            <p>Copyright {new Date().getFullYear()}.|| All Right Reserved </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
