
import { VideoSection } from './components/VideoSection';
import React, { useState, useEffect } from "react";
import { Card } from "./components/Card";
import axios from "axios";
import { SearchBar } from './components/SearchBar';
import { CardWrapper } from './App.style'


const apiKey = "d161df73b66b9d1b527d3526c891aeca"; //temporary
const baseUrl = "https://api.themoviedb.org/3/search/movie";

function App(props) {
  const [movieData, setMovieData] = useState(null);
  const [inputData, setInputData] = useState('live')

  useEffect(() => {
    axios.get(baseUrl, {
      params: {
        api_key: apiKey,
        query: inputData,
        page: 1,
      }
    })
      .then((res) => setMovieData(res.data.results))
  }, [inputData])

  function ChangeSetInputData(e) {
    setInputData(e.target.value)
  }
  
  return (
    <>
      <VideoSection />
      <SearchBar onChange={ChangeSetInputData} />
      <CardWrapper>
        {movieData?.map(
          (movie, index) => {
            return <Card
              key={index}
              title={movie.title}
              poster_path={
                movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : "https://tse2.mm.bing.net/th?id=OIP.ai9mtrwlPjK4Tutfq4m-ugHaL2&pid=Api"}
              overview={movie.overview}
              release_date={movie.release_date}
              vote_average={movie.vote_average} />
          })
        }
      </CardWrapper>
    </>

  );
}

export default App;
