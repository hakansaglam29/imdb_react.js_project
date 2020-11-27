import React, { useState, useEffect, createContext } from "react";
import axios from "axios";


// Components
import { PaginationBar } from "./components/Pagination";
import { VideoSection } from './components/VideoSection';
import { SearchBar } from './components/SearchBar';
import {CardList} from "./components/CardList";


const apiKey = process.env.REACT_APP_API_KEY; //temporary
const baseUrl = "https://api.themoviedb.org/3/search/collection";

export const CollectionContext  = createContext();

function Collection(props) {
  const [CollectionData, setCollectionData] = useState([]);
  const [inputData, setInputData] = useState('King')
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
        setCollectionData(res?.data?.results);
        if (res?.data?.total_pages>=5) {
          setCountPage(5);
        } else 
        setCountPage(res?.data?.total_pages);
      })
      .catch()
      .finally()
  }, [inputData, page])

  return (
    <CollectionContext.Provider value={{setInputData, setPage, CollectionData, countPage, page, handleChange}}>
      <VideoSection />
      <SearchBar />
      <PaginationBar/>
      <CardList/>
    </CollectionContext.Provider>
  );
}
export default Collection;
