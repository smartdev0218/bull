import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

const Wrapper = styled.div`
  padding: 120px 100px;
  color: "var(--text-color)";
  .r-title {
    text-transform: uppercase;
    font-size: 40px;
    color: var(--text-color);
    font-family: "Roboto", sans-serif;
    font-style: italic;
    font-weight: 700;
  }
  .r-subtitle {
    padding-bottom: 60px !important;
    color: var(--text-color) !important;
  }
  .percent {
    width: 100%;
    
    padding: 15px 20px;
    background: var(--main-color);
    border-radius: 8px;
    color: var(--text-color);
    font-family: "Roboto", sans-serif;
    font-style: italic;
    height: 0;
    padding-top: 50%;
    padding-bottom: 50%;
  }
  .r-text-container {
    display: flex;
  }
  .percent-container {
    wight: 70px;
    height: 70px;
  }
  .r-text {
    color: var(--text-color);
    width: 70%;
    padding-top: 11px;
    padding-left: 20px;
    font-family: "Roboto", sans-serif;
  }
  @media only screen and (max-width: 991px) {
    padding: 0px 10px;
    padding-top: 120px;
    .r-text-container {
      margin: 10px;
    }

    .r-text {
      padding: 0 10px;
    }
  }
  @media only screen and (max-width: 435px) {
    .r-text {
      width: 90%;
      padding: 0 10px;
    }
  }
`;

const RoadMap = () => {
  const roadmapArray = [
    {
      text: "There will be a five bull random airdrop for early adopters. We will begin pushing our social media marketing as well as banner advertisements to promote Binance Bulls.",
      percent: "10 %",
    },
    {
      text: "We will be looking for a marketplace partnership as well as $3,000 dropped into the community wallet. (The community of Binance Bulls will be deciding on how the $3,000 is spent, such as giveaways, donations, advertisements and more.)",
      percent: "25 %",
    },
    {
      text: "We plan on having a $3,000 donation decided by the community of Binance Bulls as well as a $2,000 BNB giveaway.",
      percent: "50 %",
    },

    {
      text: "Exclusive Binance Bull Merch will be released, such as T-Shirts, Hoodies, and more!",
      percent: "75 %",
    },
    {
      text: "Introduce the Binance Bull Lottery as well as a custom reflection BNB marketplace.",
      percent: "90 %",
    },
    {
      text: "$10,000 will be dropped into the community wallet. (The community of Binance bulls will be decided on how the $10,000 is spent, such as giveaways, donations, advertisements and more.",
      percent: "100%",
    },
  ];
  return (
    <>
    <Wrapper id="roadmap">
      <Container fluid>
        <h3 className="r-title">Roadmap</h3>
        <p className=" r-subtitle">
          Once we have hit the precentage of mints we will begin working on the
          state goal
        </p>

        <Col>
          <div className="row">
            {roadmapArray.map((el, i) => {
              return (
                <div key={i} className="r-text-container my-2">
                  <div className="my-2 percent-box">
                    <div className="middeling percent">{el.percent}</div>
                  </div>
                  <div className="r-text ">{el.text}</div>
                </div>
              );
            })}
          </div>
        </Col>
      </Container>
    </Wrapper>
    {/* <hr/> */}
    </>
  );
};

export default RoadMap;
