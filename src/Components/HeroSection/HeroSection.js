import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useState } from "react";
import icon from "../../images/icon.png";

const Wrapper = styled.div`
  width: 100vw;
  
  text-transform: uppercase;
  padding: 120px 100px;

  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--text-color);
  .hero-div {
    background: var(--main-color);
    border-radius: 5px;
    width: 140px;
    height: 140px;
  }
  .hero-div img {
    width: 100%;
  }
  .hero-text {
    padding-left: 40px;
    text-transform: uppercase;
  }
  .title {
    font-size: 35px;
    font-weight: 700;
    line-height: 35px !important;
    font-family: 'Roboto', sans-serif;
    font-style: italic;
  }
  .subtitle {
    font-size: 18px;
    text-transform: uppercase;
  }
  .hero-footer {
    background: var(--main-color);
    border-radius: 2px;
    color: #000;
    text-align: center;
    padding:12px 0;
    margin-top:40px;
  }
  .hero-footer p{
    font-family: 'Roboto', sans-serif;
    font-style:italic;
    font-weight:500;
    font-size:16px;
  }
  .hero-footer h4{
    font-weight:700;
  }
  .borders {
    border: 5px solid #000;
    padding: 4px 15px;
  }
  .borders-left {
    border: 5px solid #000;
    border-right: 0;
    cursor: pointer;
    padding: 4px 15px;
  }
  .borders-right {
    border: 5px solid #000;
    border-left: 0;
    cursor: pointer;
    padding: 4px 15px;
  }
  .icon img {
    width: 100px;
  }
  .button {
    background: #000;
    border: 0;
    outline: 0;
    color: #fff;
    
    padding: 16px 22px;
    border-radius:5px;
    font-weight:700;
  }
  @media only screen and (max-width: 991px) {
    padding: 0px 10px;
    .icon img {
    width: 60px;
  }
  .hero-footer h4{
      font-size:20px;
  }
  .borders {
  
    padding: 4px 4px;
  }
  .borders-left {
   
    padding: 8px 4px;
  }
  .borders-right {
  
    padding: 8px 4px;
  }
  .buttons{
      display:flex;
  }
  .button{
      font-size:12px;
      padding:12px 10px ;
  }

  @media only screen and (max-width: 767px) {
      margin-top:180px;
  }
  @media only screen and (max-width: 520px) {
      margin-top:220px;
  }
  @media only screen and (max-width: 435px) {
    padding:0 10px;
    padding-top: 120px;
      .button{
          padding:4px 15px;
      }
  }
`;

const HeroSection = () => {
  const [mint, setMint] = useState(1);
  const increase = () => {
    setMint((prev) => prev + 1);
  };
  const decrease = () => {
    if (mint <= 0) return;
    setMint((prev) => prev - 1);
  };
  return (
    <>
    <Wrapper id="buyabull">
      <Container fluid>
        <Row>
          <Col
            md={{ order: "first", span: "4" }}
            lg={5}
            xl={3}
            sm={{ order: "last", span: "7" }}
            xs={{ order: "last", span: "12" }}
            className="mx-auto"
          >
            <Row>
              <Col xs={6}>
                <div className="hero-div px-2 my-2">
                  <img
                    src="
                "
                    alt=""
                  />
                </div>
              </Col>
              <Col xs={6}>
                <div className="hero-div px-2 my-2">
                  <img
                    src="
                "
                    alt=""
                  />
                </div>
              </Col>
              <Col xs={6}>
                <div className="hero-div px-2 my-2">
                  <img
                    src="
                "
                    alt=""
                  />
                </div>
              </Col>
              <Col xs={6}>
                <div className="hero-div px-2 my-2">
                  <img
                    src="
                "
                    alt=""
                  />
                </div>
              </Col>
            </Row>
          </Col>
          <Col
            md={7}
            lg={7}
            xl={8}
            xs={{ order: "first" }}
            className="middeling"
          >
            <div className="hero-text">
              <h4 className="title">
                WELCOME TO <br />
                BINANCE BULL CLUB
              </h4>
              <p className="subtitle py-3">
                BBC is a collection of 7,777 randomly generated Bull NFTs stored
                on the Binance Smart Chain & hosted on ipfs.{" "}
              </p>
            </div>
          </Col>
          <Col md={0} lg={1}></Col>
        </Row>
        <div className="hero-footer">
          <p>The sale has started.Select how many you would like to mint</p>
          <Row className="middeling">
            <Col md={4} lg={4}>
              <h4 className="py-3 py-lg-0">become bulish</h4>
            </Col>
            <Col md={5} lg={6} className="">
              <Row className="middeling py-3 py-lg-0">
                <Col xs={5} sm={3} md={3} className="px-2 ">
                  <Row className="mint">
                    <Col className="borders-left middeling" onClick={increase}>
                      <FiPlus />
                    </Col>
                    <Col className="borders middeling">{mint}</Col>
                    <Col className="borders-right middeling" onClick={decrease}>
                      <FiMinus />
                    </Col>
                  </Row>
                </Col>
                <Col xs={3} sm={3} md={6} className="px-2 buttons">
                  {" "}
                  <button className="button ">MINIT NOW</button>
                </Col>
              </Row>
            </Col>
            <Col md={3} lg={2} className="icon py-3 py-lg-0">
              <img src={icon} alt="#" />
            </Col>
          </Row>
          <h5>Metting cost 0.15 Bnb</h5>
        </div>
        <p className="py-2 text-center">
          VERIFIED SMART CONTRACT ADDRESS: 0x0000000000000000
        </p>
      </Container>
    </Wrapper>
    <hr/>
    </>
  );
};

export default HeroSection;
