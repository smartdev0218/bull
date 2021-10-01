import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import ox from "../../images/ox.png";
import jake from "../../images/jake.png";

const Wrapper = styled.div`
  
  padding:120px 100px;
  
  color: var(--text-color);  
  
  .t-title {
    text-transfomr: uppercase;
    font-size:40px ;
    font-weight:700;
    font-family: "Roboto", sans-serif;
    font-style: italic;
  }
  .box img{
    width: 120px;
    border-radius:8px;
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

@media only screen and (max-width: 435px) {
  padding: 120px 10px;
  .box {
    width: 120px;
    border-radius:8px;
    background: var(--main-color);
  }
  .team-text{
    font-size:15px;
  }
  .position{
    font-size:11px;
  }
  .style1 {
    flex: 100%;
    padding-bottom: 20px;
  }
  .style2 {
    flex: 100%;
  }
}
`;

const Team = () => {
  return (
    <Wrapper id="team">
      <Container fluid>
        <h3 className="t-title">The Team</h3>
        <p className="py-4">
          Binance Bulls was created by two friends that have a love for the
          Binance Smart Chain ecosystem & have a love <br /> for art.
        </p>
        <Row className="py-4">
          <Col xs="6" sm="6" className="d-flex style1">
            <div className="box">
              <img src={ox} alt="" />
            </div>
            <p className="team-text">
              The Ox <br />
              <span className="position">Founder & Artist</span>
            </p>
          </Col>
          <Col xs="6" sm="6" className="d-flex style2">
            <div className="box">
              <img src={jake} alt="" />
            </div>
            <p className="team-text">
              BP <br />{" "}
              <span className="position">Developer</span>
            </p>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Team;
