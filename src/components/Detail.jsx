import React from "react";
import styled from "styled-components";
import {useParams} from "react-router-dom";

const Detail = () => {
  const {id} = useParams();
  console.log(id);

  return (
    <Container>
      <Background>
        <img src="https://images3.alphacoders.com/124/1241167.png" />
      </Background>
      <ImageTitle>
        <img src="http://images6.fanpop.com/image/photos/43900000/Thor-Love-and-Thunder-May-6-2022-the-avengers-43925014-640-274.gif" />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" />
          <span>Play</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" />
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="/images/group-icon.png" />
        </GroupWatchButton>
      </Controls>
      <SubTitle>2022 * 2h 30m * Family,Fantasy,Kids,Animation</SubTitle>
      <Description>
        lorem ipsum dolor lorem ipsum dolor sit amet, consectetur adipiscing
      </Description>
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 30vh;
  display: flex;
  min-height: 170px;
  width: 30vw;
  min-width: 200px;
  margin-top: 60px;

  img {
    display: flex;
    width: 100%;
    height: 100%;
    object-fit: conatin;
    border-radius: 10px;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  margin-top: 20px;
`;

const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  display: flex;
  padding: 0px 24px;
  margin-right: 22px;
  align-items: center;
  height: 56px;
  background: rgb(249, 249, 249);
  border: none;
  letter-spacing: 1.9px;
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;
const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
`;
const AddButton = styled.button`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  margin-left: 10px;

  span {
    font-size: 30px;
    color: white;
  }
`;
const GroupWatchButton = styled(AddButton)`
  background: rgb(0, 0, 0);
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;
const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
  max-width: 700px;
`;
