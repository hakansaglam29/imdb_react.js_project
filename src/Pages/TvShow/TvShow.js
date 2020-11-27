import React, { useState, useEffect, createContext } from "react";
import axios from "axios";


// Components
import { PaginationBar } from "./components/Pagination";
import { VideoSection } from './components/VideoSection';
import { SearchBar } from './components/SearchBar';
import {CardList} from "./components/CardList";


const apiKey = process.env.REACT_APP_API_KEY; //temporary
const baseUrl = "https://api.themoviedb.org/3/search/tv";

export const TvShowContext  = createContext();

function TvShow(props) {
  const [TvShowData, setTvShowData] = useState([]);
  const [inputData, setInputData] = useState('Jimmy')
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
        include_adult:false,
      }
    })
      .then((res) =>  {
        setTvShowData(res?.data?.results);
        if (res?.data?.total_pages>=5) {
          setCountPage(5);
        } else 
        setCountPage(res?.data?.total_pages);
      })
      .catch()
      .finally()
  }, [inputData, page])

  return (
    <TvShowContext.Provider value={{setInputData, setPage, TvShowData, countPage, page, handleChange}}>
      <VideoSection />
      <SearchBar />
      <PaginationBar/>
      <CardList/>
    </TvShowContext.Provider>
  );
}
export default TvShow;
