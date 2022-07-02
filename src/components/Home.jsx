import React from "react";
import styled from "styled-components";
import ImgSlider from "../components/ImgSlider";
import Viewers from "../components/Viewers";
import Movies from "../components/Movies";

const Home = () => {
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies />
    </Container>
  );
};

export default Home;

const Container = styled.main`
width: 95%;
margin-left: auto;
margin-right: auto;
min-height: calc(100vh - 70px)
padding: 0 calc(3.5vw + 5px)
position: relative;
overflow-x: hidden;
overflow-y: hidden;

&:before{
  background: url("/images/home-background.png") center center / cover;
  no-repeat: fixed;
  content:"";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom:0;
  z-index: -1;
}
`;
