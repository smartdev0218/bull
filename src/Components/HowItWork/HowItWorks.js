import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import gif from "../../images/gif.gif";

const Wrapper = styled.div`

  padding: 120px 100px;
  
  color: var(--text-color);
  
  .h-title {
    text-transform: uppercase;
    font-size: 40px;
    font-weight: 700;
    color: #fff;
    padding-bottom: 35px !important;
    font-family: "Roboto", sans-serif;
    font-style: italic;
  }
  .h-image {
    
  }
  .h-image img {
    border-radius: 5px;
    width: 100%;
  }
  @media only screen and (max-width: 991px) {
    padding: 0px 10px;
  }
  @media only screen and (max-width: 767px) {
    padding-top: 80px;
  }
  @media only screen and (max-width: 435px) {
    padding: 0 10px;
    padding-top: 120px;
  }
`;

const HowItWorks = () => {
  return (
    <>
    <Wrapper id="howitworks">
      <Container fluid>
        <Row className="align-items-center">
          <Col md={8}>
            <h3 className="h-title">How It works</h3>
            <p className="py-3">
              Every one of 10,00 Binance Bulls are unique & generated fro over
              100 traits <br /> including, Mouth Expression, Eyes, Clothing,
              Background Color & More.
            </p>
            <p className="py-3">
              Your bull is stored as an ERC721 token on the Binance Smart Chain
              & hosted on IPS.
            </p>
            <p className="py-3">
              There are no bonding curves here. Buying a bull costs 0.15 bnb.
            </p>
          </Col>
          <Col md={4}>
            <div className="h-image">
              <img src={gif} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </Wrapper>
    {/* <hr/> */}
    </>
  );
};

export default HowItWorks;
