import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

const Wrapper = styled.div`
  padding: 0px 100px;
  padding-top: 110px;
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
    padding-top: 50px;
    .r-text-contaner {
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
      text: "5 Bulls will be randomly dirdropped to our early adopters Begin social media marketing push & banner advertisments ",
      percent: "10%",
    },
    {
      text: "20,000 Donation with the help of the community choosing what organization allocate the money too Partner with secondary marketplace",
      percent: "50%",
    },

    {
      text: "Exclusive Binance Bull Merch will be released (T Shirts, Hoodies & More) $5,000 BNB Giveaway ",
      percent: "75%",
    },
    {
      text: " Community grant/wallet is launched with $25,000    Bull Marketplace Released ",
      percent: "90%",
    },
    {
      text: "Community grant/wallet is launched with $25,000 Bull Marketplace Released",
      percent: "90%",
    },
  ];
  return (
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
        <hr />
      </Container>
    </Wrapper>
  );
};

export default RoadMap;
