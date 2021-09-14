import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

const Wrapper = styled.div`
  color: var(--text-color);
  padding:0px 100px;
  .t-title {
    text-transfomr: uppercase;
    font-size:40px ;
    font-weight:700;
    font-family: "Roboto", sans-serif;
    font-style: italic;
  }
  .box {
    height: 80px;
    width: 100px;
    border-radius:8px;
    background: var(--main-color);
  }
  .team-text{
      font-size:25px;
      margin-left:15px !important;
      font-family: "Roboto", sans-serif;
    font-style: italic;
    font-weight:700;
    
  }
  .position{
    font-size:14px;
    font-weight:500;
  }
  
}
@media only screen and (max-width: 576px) {
  .box {
    height: 60px;
    width: 70px;
    border-radius:8px;
    background: var(--main-color);
  }
  .team-text{
    font-size:15px;

     
  }
  .position{
    font-size:11px;
  }
  

}
`;

const Team = () => {
  return (
    <Wrapper id="team">
      <Container>
        <h3 className="t-title">The Team</h3>
        <p className="py-4">
          Binance Bulls was created by two friends that have a love for the
          Binance Smart Chain ecosystem & have a love <br /> for art.
        </p>
        <Row className="py-4">
          <Col xs="6" sm="6" className="d-flex">
            <div className="box">
              <img src="" alt="" />
            </div>

            <p className="team-text">
              Ox <br />
              <span className="position">Artist And Devlopers</span>
            </p>
          </Col>
          <Col xs="6" sm="6" className="d-flex">
            <div className="box">
              <img src="" alt="" />
            </div>
            <p className="team-text">
              Crypto Jake <br />{" "}
              <span className="position">Marketing Manager</span>
            </p>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Team;
