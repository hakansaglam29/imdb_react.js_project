

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Pagination } from "@material-ui/lab";

// Components
import { Card } from "./components/Card";
import { VideoSection } from './components/VideoSection';
import { SearchBar } from './components/SearchBar';

// Style Component
import { CardWrapper, StyledPagination } from './App.style'

const apiKey = "api_key"; //temporary
const baseUrl = "https://api.themoviedb.org/3/search/movie";


function App(props) {
  const [movieData, setMovieData] = useState(null);
  const [copyMovieData, setCopyMovieData] = useState(null);
  const [inputData, setInputData] = useState('live')
  const [page, setPage] = React.useState(1);


  const handleChange = (state, value) => {
    setPage(value);
  };

  useEffect(() => {
    axios.get(baseUrl, {
      params: {
        api_key: apiKey,
        query: inputData,
        page: page,
      }
    })
      .then((res) => { 
        setMovieData(res.data.results);
        if (copyMovieData?.length==0) {
          
          
        };
          })
  }, [inputData, page])

  useEffect(() => {
    axios.get(baseUrl, {
      params: {
        api_key: apiKey,
        query: inputData,
        page: page +1 ,
      }
    })
      .then((res) => { 
        setCopyMovieData(res.data.results);
        if (copyMovieData?.length==0) {
          setPage(1)

        };
          })
  }, [inputData, page])

  function ChangeSetInputData(e) {
    setPage(1)
    setInputData(e.target.value)
  }

  function PageCount() {
    for (let i = 1; i = 10; i++) {
    }
  }

  return (
    <>
      <VideoSection />
      <SearchBar onChange={ChangeSetInputData} />
      <StyledPagination>
        <Pagination
          variant="outlined"
          count={PageCount}
          page={page}
          onChange={handleChange}
          />
      </StyledPagination>
      <CardWrapper>
        {movieData?.map(
          (movie, index) => {
            return <Card
              key={index}
              title={movie.title}
              poster_path={
                movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : "https://upload.wikimedia.org/wikipedia/en/f/f9/No-image-available.jpg"}
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
