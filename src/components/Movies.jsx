import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Movies = ({data}) => {
  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        {data?.map((item) => (
          <Wrap>
            <img src={item.poster} />
          </Wrap>
        ))}

        <Wrap>
          <Link to={`/detail`}>
            <img src="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2022/06/thor-love-and-thunder-1654244090.jpg" />
          </Link>
        </Wrap>
        <Wrap>
          <Link to={`/detail`}>
            <img src="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2022/06/thor-love-and-thunder-1654244090.jpg" />
          </Link>
        </Wrap>
        <Wrap>
          <Link to={`/detail`}>
            <img src="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2022/06/thor-love-and-thunder-1654244090.jpg" />
          </Link>
        </Wrap>
        <Wrap>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Luq2aEeRoKQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </Wrap>
        <Wrap>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/QnMMm7059yI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </Wrap>
        <Wrap>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/gim2kprjL50"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </Wrap>
        <Wrap>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/aWzlQ2N6qqg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </Wrap>
        <Wrap>
          <Link to={`/detail`}>
            <img src="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2022/06/thor-love-and-thunder-1654244090.jpg" />
          </Link>
        </Wrap>
        <Wrap>
          <Link to={`/detail`}>
            <img src="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2022/06/thor-love-and-thunder-1654244090.jpg" />
          </Link>
        </Wrap>
        <Wrap>
          <Link to={`/detail`}>
            <img src="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2022/06/thor-love-and-thunder-1654244090.jpg" />
          </Link>
        </Wrap>
        <Wrap>
          <Link to={`/detail`}>
            <img src="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2022/06/thor-love-and-thunder-1654244090.jpg" />
          </Link>
        </Wrap>
      </Content>
    </Container>
  );
};

export default Movies;

const Container = styled.div``;
const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;
const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    border-shadow: rgb(0 0 0 /80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 73%) 0px 30px 22px -10px;
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
