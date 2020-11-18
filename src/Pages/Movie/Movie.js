import React, { useState, useEffect, createContext } from "react";
import axios from "axios";


// Components
import { PaginationBar } from "./components/Pagination";
import { VideoSection } from './components/VideoSection';
import { SearchBar } from './components/SearchBar';
import {CardList} from "./components/CardList";



const apiKey = "d161df73b66b9d1b527d3526c891aeca"; //temporary
const baseUrl = "https://api.themoviedb.org/3/search/movie";

// We are changing now to Context Consept
export const MovieContext  = createContext();

function Movie(props) {
  const [movieData, setMovieData] = useState([]);
  const [inputData, setInputData] = useState('Live')
  const [countPage, setCountPage] = useState(1)
  const [page, setPage] = useState(1);


  const handleChange = (state, value) => {
    setPage(value);
  };

  useEffect(() => {
    axios.get(
        baseUrl, {params: {
        api_key: apiKey,
        query: inputData,
        page: page,
      }
    })
      .then((res) =>  {
        setMovieData(res?.data?.results);
        if (res?.data?.total_pages>=5) {
          setCountPage(5);
        } else 
        setCountPage(res?.data?.total_pages);
      })
      .catch()
      .finally()
  }, [inputData, page])

  return (
    <MovieContext.Provider value={{setInputData, setPage, movieData, countPage, page, handleChange}}>
      <VideoSection />
      <SearchBar />
      <PaginationBar/>
      <CardList/>
    </MovieContext.Provider>
  );
}
export default Movie;