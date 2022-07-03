import React, {useEffect} from "react";
import styled from "styled-components";
import ImgSlider from "../components/ImgSlider";
import Viewers from "../components/Viewers";
import Movies from "../components/Movies";
import db from "../firebase";
import {useDispatch} from "react-redux";
import {setMovies} from "../features/movie/movieSlice";

const Home = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const fetch_movie = async () => {
      await fetch(
        "https://fake-movie-database-api.herokuapp.com/api?s=batman      "
      )
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setData(res.Search);
        });
    };
    fetch_movie();
  }, []);

  const dispatch = useDispatch();

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      let tempMovies = snapshot.docs.map((doc) => {
        return {id: doc.id, ...doc.data()};
      });
      dispatch(setMovies(tempMovies));
    });
  }, []);
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies data={data} />
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
