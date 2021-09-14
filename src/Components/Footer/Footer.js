import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import twitter from "../../images/twitter.png";
import telegram from "../../images/telegram.png";
import social from "../../images/social.png";
import logo from "../../images/icon.png";
import { Link } from "react-scroll";

const Wrapper = styled.div`
  background: var(--main-color);
  color: var(--text-color);
  padding: 20px 0;
  font-family: "Roboto", sans-serif;
  font-style: italic;
  .social-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .social-container img {
    width: 40px;
  }
  .soocial-container p {
    font-weight: 700;
  }
  .footer-links {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .footer-links img {
    width: 60px;
  }
  .footer-links a {
    text-decoration: none;
    color: var(--text-color);
    font-size: 20px;
    cursor: pointer;
  }
`;

const Footer = () => {
  return (
    <Wrapper id="footer">
      <Container fluid>
        <Row className="middeling">
          <Col md={4}>
            <div className="social-container ">
              <img src={twitter} alt="#" />
              <img src={telegram} alt="#" />
              <img src={social} alt="#" />
            </div>
          </Col>
          <Col md={4}>
            <div className="footer-links py-5 py-md-0">
              <img src={logo} alt="#" />
              <p>POWERD BY BINANCE SMART CHAIN</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="d-flex justify-content-around align-items-center">
              <div className="footer-links">
                <Link to="buyabull">BUY A BULL</Link>
                <Link to="roadmap">ROADMAP</Link>
              </div>
              <div className="footer-links">
                <Link to="howitworks">HOW IT WORKS</Link>
                <Link to="team">Team</Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Footer;
