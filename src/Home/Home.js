import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../Components/Navbar/Navbar";
import HeroSection from "../Components/HeroSection/HeroSection";
import HowItWorks from "../Components/HowItWork/HowItWorks";
import RoadMap from "../Components/RoadMap/RoadMap";
import Team from "../Components/Team/Team";
import Footer from "../Components/Footer/Footer";
import WalletConnect from "../Components/WalletConnect/WalletConnect";

const Wrapper = styled.div``;

const Home = () => {
  return (
    <Wrapper>
      <Navbar />

      <HeroSection />
      <HowItWorks />
      <RoadMap />
      <WalletConnect />
      <Team />               
      <Footer />
    </Wrapper>
  );
};

export default Home;
